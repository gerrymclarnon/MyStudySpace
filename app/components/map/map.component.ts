import {Injectable, Component, Output, EventEmitter} from '@angular/core';

import {Location} from "../../models/location";

@Component({
    selector: 'map',
    templateUrl: 'build/components/map/map.component.html'
})
export class MapComponent {

    @Output()
    infoWindowClicked:EventEmitter<Location>;

    @Output()
    infoWindowOpened:EventEmitter<Location>;

    private locationIcon:any;
    private destinationIcon:any;

    private markers:any;
    private infoWindows:any;
    private currentLocation:any;

    constructor() {
        this.locationIcon = 'http://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png';

        this.destinationIcon = null;

        this.markers = [];
        this.infoWindows = [];

        this.infoWindowClicked = new EventEmitter();
        this.infoWindowOpened = new EventEmitter();
    }

    public getMap(location:Location, element):google.maps.Map {
        let options = {
            center: location.latLng,
            zoom: 15,
            disableDefaultUI: true
        };

        let map = new google.maps.Map(element, options);

        return map;
    }

    public updateLabsOnMap(currentLocation:Location, locations:Location[], map):void {
        this.currentLocation = currentLocation;

        this.deleteInfoWindows(this.infoWindows);
        this.deleteMarkers(this.markers);

        for (let location of locations) {
            this.showLabLocationOnMap(map, this.markers, location);
        }

        this.showCurrentLocationOnMap(map, this.markers, currentLocation);
    }

    public showInfoWindow(location:Location):void {
        let mapService = this;

        for (let marker of mapService.markers) {
            if (marker.position.lat() === location.latLng.lat() &&
                marker.position.lng() === location.latLng.lng()) {
                google.maps.event.trigger(marker, 'click', false);
            }
        }
    }

    private deleteMarkers(markers):void {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    private deleteInfoWindows(infoWindows):void {
        infoWindows = [];
    }

    private showCurrentLocationOnMap(map, markers, location):void {
        var infoContent =
            `<h6>You are here.</h6>`;

        this.showLocationOnMap(map, markers, location, this.locationIcon, infoContent);
    }

    private showLabLocationOnMap(map, markers, location:Location):void {
        var infoContent =
            `<div id="infowindow">
                <h6>${location.buildingName}</h6>
                <p>${location.distance} ∙ ${location.free} computers free</p>
            </div>`;

        this.showLocationOnMap(map, markers, location, this.destinationIcon, infoContent);
    }

    private showLocationOnMap(map, markers, location:Location, icon, infoContent):void {
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

            infoWindow.open(map, marker);

            google.maps.event.addListener(infoWindow, 'domready', function () {
                console.debug("MapService:showLocationOnMap infoWindow listener added");

                let infoWindowContainer = document.getElementsByClassName("gm-style-iw")[0];

                console.debug("MapService:showLocationOnMap infoWindowContainer = " + infoWindowContainer);

                let clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

                infoWindowContainer.addEventListener(clickHandler, function () {
                    console.debug("MapService:showLocationOnMap infoWindow gm-style-iw clicked");

                    mapService.infoWindowClicked.emit(location);
                })
            });

            if (sendEvent) {
                mapService.infoWindowOpened.emit(location);
            }
        });

        markers.push(marker);
    }
}