import {Injectable, Component, Output, EventEmitter} from '@angular/core';

import {IONIC_DIRECTIVES} from 'ionic-angular';

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
        this.locationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=U|FFFF00|000000';

        this.destinationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=L|FF0000|000000';

        this.markers = [];
        this.infoWindows = [];

        this.infowindowClicked = new EventEmitter();
        this.infowindowOpened = new EventEmitter();
    }

    getMap(location, element):google.maps.Map {
        let mapOptions = {
            center: new google.maps.LatLng(location.lat, location.lng),
            zoom: 14,
            disableDefaultUI: true
        };
        return new google.maps.Map(element, mapOptions);
    }

    getLabLocationsDistanceMatrix(location, destinations, travelMode, unitSystem):Promise<any> {
        var service = new google.maps.DistanceMatrixService;

        var promise = new Promise(
            function (resolve, reject) {
                service.getDistanceMatrix({
                    origins: [location],
                    destinations: destinations,
                    travelMode: travelMode,
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

    updateLabsOnMap(currentLocation, labLocations, map):void {
        this.currentLocation = currentLocation;

        var bounds = new google.maps.LatLngBounds;
        this.deleteInfoWindows(this.infoWindows);
        this.deleteMarkers(this.markers);

        for (let labLocation of labLocations) {
            this.showLabLocationOnMap(map, this.markers, bounds, labLocation);
        }

        this.showCurrentLocationOnMap(map, this.markers, bounds, currentLocation);
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

    showCurrentLocationOnMap(map, markers, bounds, location):void {
        var infoContent =
            `<h6>You are here.</h6>`;

        this.showLocationOnMap(map, markers, bounds, location, this.locationIcon, infoContent);
    }

    showLabLocationOnMap(map, markers, bounds, location):void {
        var infoContent =
            `<div id="infowindow">
                <h6>${location.buildingName}</h6>
                <p>${location.distance} ∙ ${location.free} computers free</p>
            </div>`;

        this.showLocationOnMap(map, markers, bounds, location, this.destinationIcon, infoContent);
    }

    showLocationOnMap(map, markers, bounds, location, icon, infoContent):void {
        let mapService = this;

        let position = new google.maps.LatLng(location.lat, location.lng);

        map.fitBounds(bounds.extend(position));

        let infoWindow = new google.maps.InfoWindow({
            content: infoContent
        });

        mapService.infoWindows.push(infoWindow);

        let marker = new google.maps.Marker({
            map: map,
            position: position,
            icon: icon
        });

        marker.addListener('click', function() {
            for (let openInfoWindow of mapService.infoWindows) {
                openInfoWindow.close();
            }

            google.maps.event.addListener(infoWindow, 'domready', function() {
                document.getElementById("infowindow").addEventListener('click', function() {
                    mapService.infowindowClicked.emit(location);
                })
            });

            infoWindow.open(map, marker);
            mapService.infowindowClicked.emit(location);
        });

        markers.push(marker);
    }

    showInfoWindow(location):void {
        let mapService = this;

        for (let marker of mapService.markers) {
            if (marker.position.lat() === location.lat &&
                marker.position.lng() === location.lng) {
                google.maps.event.trigger(marker, 'click');
            }
        }
    }
}