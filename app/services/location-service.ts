import {Injectable} from '@angular/core';
import {Location} from '../models/location';

@Injectable()
export class LocationService {

    static get parameters() {
        return [];
    }

    constructor() {
    }

    getCurrentLocation():Promise<Location> {
        console.debug(`LocationService.getCurrentLocation`);

        var promise = new Promise(
            function (resolve, reject) {

                console.debug(`navigator.geolocation: ${navigator.geolocation}`);

                let options = {
                    enableHighAccuracy: true,
                    timeout: 60000,
                    maximumAge: 0
                };

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
                            console.error(`Gelocation not supported!: ${err}`);
                            alert(`Gelocation not supported!: ${err}`);
                            reject(err);
                        },
                        options
                    );
                } else {
                    console.error("Gelocation not supported!");
                    alert("Gelocation not supported!");
                }
            }
        );

        return promise;
    }

}