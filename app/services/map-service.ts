import {Injectable, Component, Output, EventEmitter} from '@angular/core';

import {IONIC_DIRECTIVES} from 'ionic-angular';
import {Location} from "../models/location";

@Component({
    // directives: [NgIf],
    // properties: ['value'], //Change to be whatever properties you want, ex: <sync value="5">
    //selector: 'syncServ',
    //templateUrl: 'build/components/sync/sync.html'
    directives: [IONIC_DIRECTIVES],
    outputs: ['infowindowOpened', 'infowindowClicked']
})
@Injectable()
export class MapService {

    private locationIcon:any;
    private destinationIcon:any;

    private markers:any;
    private infoWindows:any;
    public infowindowClicked:EventEmitter<Location>;
    public infowindowOpened:EventEmitter<Location>;
    private currentLocation:any;

    constructor() {
        this.locationIcon = 'http://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png';

        this.destinationIcon = null;

        this.markers = [];
        this.infoWindows = [];

        this.infowindowClicked = new EventEmitter();
        this.infowindowOpened = new EventEmitter();
    }

    getMap(location:Location, element):google.maps.Map {
        let options = {
            center: location.latLng,
            zoom: 15,
            disableDefaultUI: true
        };

        let map = new google.maps.Map(element, options);

        return map;
    }

    getLabLocationsDistanceMatrix(location:Location,
                                  locations:Location[],
                                  travelMode:string,
                                  unitSystem/*:google.maps.UnitSystem*/):Promise<any> {
        var service = new google.maps.DistanceMatrixService;

        let destinations:google.maps.LatLng[] = new Array();

        for (let location of locations) {
            destinations.push(location.latLng);
        }

        var promise = new Promise(
            function (resolve, reject) {
                service.getDistanceMatrix({
                    origins: [location.latLng],
                    destinations: destinations,
                    travelMode: google.maps.TravelMode[travelMode],
                    unitSystem: unitSystem
                }, function (response, status) {
                    if (status === google.maps.DistanceMatrixStatus.OK) {
                        resolve(response);
                    } else {
                        reject(status);
                    }
                });
            }
        );

        return promise;
    }

    updateLabsOnMap(currentLocation:Location, locations:Location[], map):void {
        this.currentLocation = currentLocation;

        this.deleteInfoWindows(this.infoWindows);
        this.deleteMarkers(this.markers);

        for (let location of locations) {
            this.showLabLocationOnMap(map, this.markers, location);
        }

        this.showCurrentLocationOnMap(map, this.markers, currentLocation);
    }

    deleteMarkers(markers):void {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    deleteInfoWindows(infoWindows):void {
        infoWindows = [];
    }

    showCurrentLocationOnMap(map, markers, location):void {
        var infoContent =
            `<h6>You are here.</h6>`;

        this.showLocationOnMap(map, markers, location, this.locationIcon, infoContent);
    }

    showLabLocationOnMap(map, markers, location:Location):void {
        var infoContent =
            `<div id="infowindow">
                <h6>${location.buildingName}</h6>
                <p>${location.distance} ∙ ${location.free} computers free</p>
            </div>`;

        this.showLocationOnMap(map, markers, location, this.destinationIcon, infoContent);
    }

    showLocationOnMap(map, markers, location:Location, icon, infoContent):void {
        let mapService = this;

        let infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });

        mapService.infoWindows.push(infoWindow);

        let marker = new google.maps.Marker({
            map: map,
            position: location.latLng,
            icon: icon,
            animation: google.maps.Animation.DROP
        });

        marker.addListener('click', function (sendEvent) {
            for (let openInfoWindow of mapService.infoWindows) {
                openInfoWindow.close();
            }

            google.maps.event.addListener(infoWindow, 'domready', function () {
                document.getElementsByClassName("gm-style-iw")[0].addEventListener('click', function () {
                    mapService.infowindowClicked.emit(location);
                })
            });

            infoWindow.open(map, marker);

            if (sendEvent) {
                mapService.infowindowOpened.emit(location);
            }
        });

        markers.push(marker);
    }

    showInfoWindow(location:Location):void {
        let mapService = this;

        for (let marker of mapService.markers) {
            if (marker.position.lat() === location.latLng.lat() &&
                marker.position.lng() === location.latLng.lng()) {
                google.maps.event.trigger(marker, 'click', false);
            }
        }
    }
}