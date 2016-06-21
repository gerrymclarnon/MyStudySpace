import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Labs} from './mock-labs-data';
import {Lab} from '../models/lab';
import {Location} from "../models/location";

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

    getLabLocations(labs):Location[] {
        let destinations = [];

        this.initLabDistanceDuration(labs);

        // Maximum of 25 destinations
        for (let lab of labs) {
            if (destinations.length < 25 && lab.latitude !== 0 && lab.longitude !== 0) {

                if (destinations.length === 0) {
                    destinations.push(new Location({
                        lat: lab.latitude,
                        lng: lab.longitude,
                        buildingName: lab.buildingName,
                        free: lab.free,
                        campusName: lab.campusName,
                        labs: [lab]}));
                    lab.destination = 0;
                    console.log(`(NEW) ${lab.buildingName} ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}] ${lab.destination}`);
                } else {
                    let matchFound = false;
                    for (var i = 0; i < destinations.length; i++) {
                        if (destinations[i].latLng.lat() === lab.latitude && destinations[i].latLng.lng() === lab.longitude) {
                            matchFound = true;
                            lab.destination = i;
                            destinations[i].labs.push(lab);
                            destinations[i].free = String(Number(destinations[i].free) + Number(lab.free));
                            console.log(`(ADDED) ${lab.buildingName} ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}] ${lab.destination}`);
                            break;
                        }
                    }

                    if (!matchFound) {
                        destinations.push(new Location({
                            lat: lab.latitude,
                            lng: lab.longitude,
                            buildingName: lab.buildingName,
                            free: lab.free,
                            campusName: lab.campusName,
                            labs: [lab]}));
                        lab.destination = destinations.length - 1;
                        console.log(`(NEW) ${lab.buildingName}  ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}] ${lab.destination}`);
                    }
                }
            }
        }

        console.log(`${destinations.length} unique destinations based on geolocations.`);

        return destinations;
    }

    getCampuses(labs):Array<string> {
        let labsArray = labs.map(lab => lab.campusName);

        // It would be nice to us this ES6 technique but the combination of Set and Type
        // isn't supported in the current ES6 shim.
        //let labsSet = new Set(labsArray);
        //return [...labsSet];

        let uniqueArray = labsArray.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        });

        return uniqueArray;
    }

    initLabDistanceDuration(labs) {
        for (let lab of labs) {
            lab.distance = "...";
            lab.duration = "...";
        }
    }

}