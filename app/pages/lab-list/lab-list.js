import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {LocationService} from '../../services/location-service';
import {MapService} from '../../services/map-service';
import {LabService} from '../../services-mocks/lab-service';
//import {LabService} from '../../services/lab-service';
import {StorageService} from '../../services/storage-service';
import {SettingsPage} from '../settings/settings';
import {FiltersPage} from '../filters/filters';
import {Settings} from '../../models/settings';
import {Filters} from '../../models/filters';
import {Location} from '../../models/location';
import moment from 'moment';


@Page({
    templateUrl: 'build/pages/lab-list/lab-list.html'
})
export class LabListPage {
    static get parameters() {
        return [[NavController], [NavParams], [LocationService], [MapService], [LabService], [StorageService]];
    }

    constructor(nav, navParams, locationService, mapService, labService, storageService) {
        this.nav = nav;
        this.selectedItem = navParams.get('item');
        this.locationService = locationService;
        this.mapService = mapService;
        this.labService = labService;
        this.storageService = storageService;

        this.lastUpdated = null;
        this.segment = 'free';

        this.settings = new Settings();
        this.filters = null;

        setInterval(() => {
            this.lastUpdatedFromNowText = this.getLastUpdatedFromNowText(this.lastUpdated);
        }, 60000);
    }

    ngOnInit() {
        this.getLabPcAvailabilityAndDistance();
    }

    getLabPcAvailabilityAndDistance(refresher) {

        let labListPage = this;
        labListPage.lastUpdated = null;

        this.storageService.storage.get('settings')
            .then(
                (settingsData) => {

                    labListPage.settings = labListPage.getSettings(settingsData);

                    labListPage.storageService.storage.get('filters')
                        .then(
                            (filtersData) => {

                                labListPage.filters = labListPage.getFilters(filtersData);

                                this.locationService.getCurrentLocation()
                                    .then(
                                        (currentLocation) => {

                                            this.currentLocation = currentLocation;
                                            this.map = this.mapService.getMap(this.currentLocation, document.getElementById('map'));

                                            labListPage.labService.findAll().subscribe(
                                                (data) => {
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
            settings = new Settings();
        }

        return settings;
    }

    getFilters(data) {
        let filters = null;
        try {
            filters = new Filters(data);
        } catch (error) {
            filters = new Filters();
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
            let segment = this.segment;

            labLocations.sort(
                (a, b) => {
                    if (segment === "free") {
                        return b.free - a.free;
                    } else if (segment === "distance") {
                        return (a.durationValue < b.durationValue) ? -1 : (a.durationValue > b.durationValue) ? 1 : 0;
                    }
                }
            );

            if (segment === "free") {
                for (let labLocation of labLocations) {
                    labLocation.labs.sort(
                        (a, b) => {
                            return b.free - a.free;
                        }
                    );
                }
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

    itemTapped(event, location) {
        let url = 'https://www.google.com/maps/preview?saddr=' + this.currentLocation.lat + ',' + this.currentLocation.lng + '&daddr=' + location.lat + ',' + location.lng + '&dirflg=w';
        window.open(url, "_self", "location=yes");
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

                labListPage.getLabPcAvailabilityAndDistance();
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