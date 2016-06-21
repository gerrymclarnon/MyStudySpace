import {Injectable} from '@angular/core';

import {Location} from "../models/location";

@Injectable()
export class MapService {

    constructor() {
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
}