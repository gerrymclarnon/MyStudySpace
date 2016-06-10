import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Labs} from './mock-labs-data';
import {Lab} from '../models/lab';

@Injectable()
export class LabService {


    constructor (private http:Http) {
        this.http = http;
    }

    findAll() {
        return Observable.create(observer => {
            let labs = [];
            for (let lab of Labs) {
                labs.push(new Lab(lab));
            }

            observer.next(labs);
            observer.complete();
        });
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getLabLocations(labs) {
        let destinations = [];

        this.initLabDistanceDuration(labs);

        // Maximum of 25 destinations
        for (let lab of labs) {
            if (destinations.length < 25 && lab.latitude !== 0 && lab.longitude !== 0) {

                if (destinations.length === 0) {
                    destinations.push({
                        lat: lab.latitude,
                        lng: lab.longitude,
                        buildingName: lab.buildingName,
                        free: lab.free,
                        campusName: lab.campusName,
                        labs: [lab]});
                    lab.destination = 0;
                    console.log("NEW: " + lab.location + " - " + lab.latitude + "," + lab.longitude + "," + lab.destination);
                } else {
                    let matchFound = false;
                    for (var i = 0; i < destinations.length; i++) {
                        if (destinations[i].lat === lab.latitude && destinations[i].lng === lab.longitude) {
                            matchFound = true;
                            lab.destination = i;
                            destinations[i].labs.push(lab);
                            destinations[i].free = String(Number(destinations[i].free) + Number(lab.free));
                            console.log(`(ADDED) ${lab.buildingName} ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}] ${lab.destination}`);
                            break;
                        }
                    }

                    if (!matchFound) {
                        destinations.push({
                            lat: lab.latitude,
                            lng: lab.longitude,
                            buildingName: lab.buildingName,
                            free: lab.free,
                            campusName: lab.campusName,
                            labs: [lab]});
                        lab.destination = destinations.length - 1;
                        console.log(`(NEW) ${lab.buildingName}  ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}] ${lab.destination}`);
                    }
                }
            }
        }

        console.log(`${destinations.length} unique destinations based on geolocations.`);

        return destinations;
    }

    getCampuses(labs) {
        let labsMap = labs.map(lab => lab.campusName);
        let labsSet = new Set<any>(labsMap);
        return [...labsSet];
    }

    initLabDistanceDuration(labs) {
        for (let lab of labs) {
            lab.distance = "...";
            lab.duration = "...";
        }
    }

}