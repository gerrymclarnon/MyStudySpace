import {Injectable} from 'angular2/core';
import {Location} from '../models/location';

@Injectable()
export class LocationService {

    static get parameters() {
        return [];
    }

    constructor() {
    }

    getCurrentLocation() {
        var promise = new Promise(
            function (resolve, reject) {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function (pos) {
                            let currentLocation = pos.coords;

                            console.log('Current position is:');
                            console.log('Latitude : ' + currentLocation.latitude);
                            console.log('Longitude: ' + currentLocation.longitude);
                            console.log('Accuracy: ' + currentLocation.accuracy + 'm');

                            resolve(new Location({lat: currentLocation.latitude, lng: currentLocation.longitude}));
                        },
                        function (err) {
                            reject(err);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 60000,
                            maximumAge: 0
                        }
                    );
                } else {
                    alert("Gelocation not supported!");
                }
            }
        );

        return promise;
    }

}