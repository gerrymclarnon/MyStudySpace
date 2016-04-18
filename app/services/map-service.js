import {Injectable} from 'angular2/core';

@Injectable()
export class MapService {

    static get parameters() {
        return [];
    }

    constructor() {
        this.locationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=U|FFFF00|000000';

        this.destinationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=L|FF0000|000000';

        this.markers = [];
        this.infoWindows = [];
    }

    getMap(location, element) {
        return new google.maps.Map(element, {
            center: {lat: location.lat, lng: location.lng},
            zoom: 14,
            disableDefaultUI: true
        });
    }

    getLabLocationsDistanceMatrix(location, destinations, travelMode, unitSystem) {
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

    updateLabsOnMap(currentLocation, labLocations, map) {
        this.currentLocation = currentLocation;

        var bounds = new google.maps.LatLngBounds;
        this.deleteInfoWindows(this.infoWindows);
        this.deleteMarkers(this.markers);

        for (let labLocation of labLocations) {
            this.showLabLocationOnMap(map, this.markers, bounds, labLocation);
        }

        this.showCurrentLocationOnMap(map, this.markers, bounds, currentLocation);
    }

    deleteMarkers(markers) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    deleteInfoWindows(infoWindows) {
        infoWindows = [];
    }

    showCurrentLocationOnMap(map, markers, bounds, location) {
        var info =
            `<h6>You are here.</h6>`;

        this.showLocationOnMap(map, markers, bounds, location, this.locationIcon, info);
    }

    showLabLocationOnMap(map, markers, bounds, location) {
        var info =
            `<h6>${location.buildingName} ∙ ${location.free} free</h6>
            <a href="${this.getDirectionsUrl(location)}">
            ${location.duration} (${location.distance})</a>`;

        this.showLocationOnMap(map, markers, bounds, location, this.destinationIcon, info);
    }

    showLocationOnMap(map, markers, bounds, location, icon, info) {
        let mapService = this;

        let position = new google.maps.LatLng(location.lat, location.lng);

        map.fitBounds(bounds.extend(position));

        let infoWindow = new google.maps.InfoWindow({
            content: info
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
            infoWindow.open(map, marker);
        });

        markers.push(marker);
    }

    getDirectionsUrl(location) {
        let url = 'https://www.google.com/maps/preview?saddr=' + this.currentLocation.lat + ',' + this.currentLocation.lng + '&daddr=' + location.lat + ',' + location.lng + '&dirflg=w';
        //window.open(url, "_self", "location=yes");
        return url;
    }
}