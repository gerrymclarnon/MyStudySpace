import {OnInit, ViewChild} from '@angular/core';
import {Page, NavController, NavParams, Modal, Content} from 'ionic-angular';
import {LocationService} from '../../services/location-service';
import {MapService} from '../../services/map-service';
import {LabService} from '../../services-mocks/lab-service';
//import {LabService} from '../../services/lab-service';
import {StorageService} from '../../services/storage-service';
import {LocationDetailsPage} from '../location-details/location-details';
import {SettingsPage} from '../settings/settings';
import {FiltersPage} from '../filters/filters';
import {Settings} from '../../models/settings';
import {Filters} from '../../models/filters';
import {Location} from '../../models/location';
import * as moment from 'moment';


@Page({
    templateUrl: 'build/pages/lab-list/lab-list.html',
    queries: {
        locationList: new ViewChild('locationList')
    }
})
export class LabListPage {

    selectedItem:Location;

    private lastUpdated:string;
    private settings:Settings;
    private lastUpdatedFromNowText:string;
    private filters:Filters;

    private currentLocation:Location;
    private map:google.maps.Map;
    private labs:any;
    private labLocations:Location[];
    private campuses:any;
    private distanceMatrix:any;
    private filteredLabLocations:Location[];

    constructor(private nav:NavController,
                private navParams:NavParams,
                private locationService:LocationService,
                private mapService:MapService,
                private labService:LabService,
                private storageService:StorageService) {
        this.nav = nav;
        this.selectedItem = navParams.get('item');
        this.locationService = locationService;
        this.mapService = mapService;
        this.labService = labService;
        this.storageService = storageService;

        this.lastUpdated = null;

        this.settings = new Settings(null);
        this.filters = null;

        setInterval(() => {
            this.lastUpdatedFromNowText = this.getLastUpdatedFromNowText(this.lastUpdated);
        }, 60000);
    }

    ngOnInit() {
        this.getLabPcAvailabilityAndDistance(null);
    }

    getLabPcAvailabilityAndDistance(refresher) {

        let labListPage = this;
        labListPage.lastUpdated = null;

        this.storageService.storage.get('settings')
            .then(
                (settingsData) => {

                    console.debug(`settingsData: ${settingsData}`);

                    labListPage.settings = labListPage.getSettings(settingsData);

                    labListPage.storageService.storage.get('filters')
                        .then(
                            (filtersData) => {

                                console.debug(`filtersData: ${filtersData}`);

                                labListPage.filters = labListPage.getFilters(filtersData);

                                this.locationService.getCurrentLocation()
                                    .then(
                                        (currentLocation) => {

                                            console.debug(`currentLocation: ${currentLocation}`);

                                            this.currentLocation = currentLocation;
                                            this.map = this.mapService.getMap(this.currentLocation, document.getElementById('map'));

                                            labListPage.labService.findAll().subscribe(
                                                (data) => {

                                                    console.debug(`labs: ${data}`);

                                                    labListPage.labs = data;
                                                    labListPage.labLocations = labListPage.labService.getLabLocations(labListPage.labs);
                                                    labListPage.campuses = labListPage.labService.getCampuses(data);

                                                    if (labListPage.filters.selectedCampuses.length === 0) {
                                                        labListPage.filters.setSelectedCampuses(labListPage.campuses);
                                                    }

                                                    labListPage.mapService.getLabLocationsDistanceMatrix(
                                                        labListPage.currentLocation,
                                                        labListPage.labLocations,
                                                        labListPage.settings.selectedTravelModes,
                                                        labListPage.settings.selectedUnitSystems)
                                                        .then(
                                                            (distanceMatrix) => {

                                                                console.debug(`distanceMatrix: ${distanceMatrix}`);

                                                                labListPage.distanceMatrix = distanceMatrix;
                                                                labListPage.updateLastUpdated(moment());

                                                                labListPage.updateLabLocationDistances(
                                                                    labListPage.labLocations,
                                                                    labListPage.distanceMatrix);

                                                                let filteredResults = labListPage.filterResults(labListPage.labLocations);
                                                                labListPage.filteredLabLocations = labListPage.sortResults(filteredResults);

                                                                labListPage.mapService.updateLabsOnMap(
                                                                    labListPage.currentLocation,
                                                                    labListPage.filteredLabLocations,
                                                                    labListPage.map);

                                                                labListPage.mapService.infowindowOpened
                                                                    .subscribe(
                                                                        location => {
                                                                            labListPage.itemSelected(null, location);
                                                                        },
                                                                        err => console.error(err),
                                                                        () => console.log(`infowindlow clicked`)
                                                                    );

                                                                labListPage.mapService.infowindowClicked
                                                                    .subscribe(
                                                                        location => {
                                                                            labListPage.itemSelected(null, location);
                                                                        },
                                                                        err => console.error(err),
                                                                        () => console.log(`infowindlow clicked`)
                                                                    );

                                                                if (refresher) {
                                                                    refresher.complete();
                                                                }
                                                            })
                                                        .catch(reason => {
                                                            console.error(reason);
                                                        });
                                                }
                                            );
                                        })
                                    .catch((error) => {
                                            labListPage.handleLocationServiceError(error);
                                        }
                                    );
                            });
                });
    }

    getSettings(data) {
        let settings = null;
        try {
            settings = new Settings(data);
        } catch (error) {
            settings = new Settings(null);
        }

        return settings;
    }

    getFilters(data) {
        let filters = null;
        try {
            filters = new Filters(data);
        } catch (error) {
            filters = new Filters(null);
        }

        return filters;
    }

    filterResults(data) {
        let labList = this;

        if (labList.filters.selectedCampuses.length === 0) {
            alert("Oops! Nothing to show. Try changing your filter.");
            return [];
        }

        return data.filter(lab => labList.filters.selectedCampuses.indexOf(lab.campusName) !== -1);
    }

    updateLabLocationDistances(labLocations, distanceMatrix) {
        var originList = distanceMatrix.originAddresses;

        for (var i = 0; i < originList.length; i++) {
            var results = distanceMatrix.rows[i].elements;

            for (var j = 0; j < results.length; j++) {
                labLocations[j].distance = results[j].distance.text;

                labLocations[j].duration = results[j].duration.text;
                labLocations[j].durationValue = results[j].duration.value;
            }
        }
    }

    sortResults(labLocations) {
        if (labLocations === undefined) {
            return labLocations;
        } else {
            labLocations.sort(
                (a, b) => {
                    return (a.durationValue < b.durationValue) ? -1 : (a.durationValue > b.durationValue) ? 1 : 0;
                }
            );

            for (let labLocation of labLocations) {
                labLocation.labs.sort(
                    (a, b) => {
                        return b.free - a.free;
                    }
                );
            }

            return labLocations;
        }
    }

    handleLocationServiceError(error) {
        let errorMessage = '';
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                errorMessage = "The request to get user location timed out."
                break;
            default:
                errorMessage = "An unknown error occurred."
                break;
        }

        alert(errorMessage);
        console.error('ERROR(' + error.code + '): ' + error.message + ' - ' + errorMessage);
    }

    updateLastUpdated(moment) {
        this.lastUpdated = moment;
        this.lastUpdatedFromNowText = this.getLastUpdatedFromNowText(this.lastUpdated);
        console.log(`Updated ${this.lastUpdatedFromNowText}`);
    }

    getLastUpdatedFromNowText(moment) {
        return moment ? moment.fromNow() : '';
    }

    itemSelected(event, location) {
        console.debug(`LabListPage.itemSelected: ${location.buildingName}`);

        if (this.selectedItem === location) {
            this.nav.push(LocationDetailsPage, {
                location: location,
                currentLocation: this.currentLocation,
                settings: this.settings
            });
        } else {
            this.selectedItem = location;
            //this.locationList.scrollTo(0, 500, 200);
        }
    }

    itemTapped(event, location) {
        console.debug(`LabListPage.itemTapped: ${location.buildingName}`);

        if (this.selectedItem === location) {
            this.nav.push(LocationDetailsPage, {
                location: location,
                currentLocation: this.currentLocation,
                settings: this.settings
            });
        } else {
            this.selectedItem = location;
            this.mapService.showInfoWindow(location);
        }
    }

    doRefresh(refresher) {
        this.getLabPcAvailabilityAndDistance(refresher);
    }

    doStart(refresher) {
        console.log('Doing Start', refresher);
    }

    doPulling(refresher) {
        console.log('Pulling', refresher);
    }

    showSettingsPage() {
        let labListPage = this;

        let modal = Modal.create(SettingsPage, {
            settings: this.settings
        });

        labListPage.nav.present(modal);

        modal.onDismiss(data => {
            if (data) {
                labListPage.settings = data;

                labListPage.getLabPcAvailabilityAndDistance(null);
            }
        });
    }


    showFiltersPage() {
        let labListPage = this;

        let modal = Modal.create(FiltersPage, {
            filters: this.filters,
            allCampuses: this.campuses
        });

        labListPage.nav.present(modal);

        modal.onDismiss(data => {
            if (data) {
                labListPage.filters = data;

                let filteredResults = labListPage.filterResults(labListPage.labLocations);
                labListPage.filteredLabLocations = labListPage.sortResults(filteredResults);

                labListPage.mapService.updateLabsOnMap(
                    labListPage.currentLocation,
                    labListPage.filteredLabLocations,
                    labListPage.map);
            }
        });
    }
}