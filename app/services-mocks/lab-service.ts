import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Labs} from './mock-labs-data';
import {Lab} from '../models/lab';
import {Location} from "../models/location";

@Injectable()
export class LabService {
    private static MAX_DESTINATIONS:number = 25;

    constructor(private http:Http) {
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

    getLabLocations(labs:Lab[]):Location[] {
        let locations = [];

        for (let lab of labs) {

            if (locations.length < LabService.MAX_DESTINATIONS && lab.latitude !== 0 && lab.longitude !== 0) {

                let matchFound = false;
                for (var i = 0; i < locations.length; i++) {
                    if (locations[i].latLng.lat() === lab.latitude && locations[i].latLng.lng() === lab.longitude) {
                        matchFound = true;
                        locations[i].labs.push(lab);
                        locations[i].free = String(Number(locations[i].free) + Number(lab.free));
                        console.log(`(UPDATED) ${lab.buildingName} ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}]`);
                        break;
                    }
                }

                if (!matchFound) {
                    let location = new Location({
                        lat: lab.latitude,
                        lng: lab.longitude,
                        buildingName: lab.buildingName,
                        free: lab.free,
                        campusName: lab.campusName,
                        labs: [lab]
                    });

                    locations.push(location);

                    console.log(`(NEW) ${lab.buildingName}  ${lab.buildingRoomName} [${lab.latitude},${lab.longitude}]`);
                }
            }
        }

        console.log(`${locations.length} unique destinations based on geolocations.`);

        return locations;
    }

    getCampuses(labs:Lab[]):Array<string> {
        let labsArray = labs.map(lab => lab.campusName);

        // It would be nice to us this ES6 technique but the combination of Set and Type
        // isn't supported in the current ES6 shim.
        //let labsSet = new Set(labsArray);
        //return [...labsSet];

        let uniqueArray = labsArray.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });

        return uniqueArray;
    }
}