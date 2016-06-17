import {Lab} from "./lab";
export class Location {

    buildingName:string;
    distance:string;
    free:string;
    campusName:string;
    latLng:google.maps.LatLng;
    labs:Lab[];

    constructor(data) {
        if (data) {
            this.buildingName = data.buildingName;
            this.distance = data.distance;
            this.free = data.free;
            this.campusName = data.campusName;
            this.latLng = new google.maps.LatLng(data.lat, data.lng);
            this.labs = data.labs;
        }
    }

    toString() {
        return JSON.stringify(this);
    }
}
