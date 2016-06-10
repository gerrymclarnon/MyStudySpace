import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let labsURL = SERVER_URL;

@Injectable()
export class LabService {

    constructor (private http:Http) {
        this.http = http;
    }

    // TODO - Create new Lab() for each
    findAll() {
        return this.http.get(labsURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getLabLocations(labs) {
        let destinations = [];

        // Maximum of 25 destinations
        for (let lab of labs) {
            if (destinations.length < 25 && lab.latitude !== 0 && lab.longitude !== 0) {

                if (destinations.length === 0) {
                    destinations.push({lat: lab.latitude, lng: lab.longitude});
                    lab.destination = 0;
                    console.log("NEW: " + lab.location + " - " + lab.latitude + "," + lab.longitude + "," + lab.destination);
                } else {
                    let matchFound = false;
                    for (var i = 0; i < destinations.length; i++) {
                        if (destinations[i].lat === lab.latitude && destinations[i].lng === lab.longitude) {
                            matchFound = true;
                            lab.destination = i;
                            console.log(`(DUPLICATE) ${lab.buildingName} ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}] ${lab.destination}`);
                            break;
                        }
                    }

                    if (!matchFound) {
                        destinations.push({lat: lab.latitude, lng: lab.longitude});
                        lab.destination = destinations.length - 1;
                        console.log(`(NEW) ${lab.buildingName}  ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}] ${lab.destination}`);
                    }
                }
            }
        }

        console.log(`${destinations.length} unique destinations based on geolocations.`);

        return destinations;
    }

}