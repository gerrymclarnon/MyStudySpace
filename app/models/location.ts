export class Location {

    lat:string;
    lng:string;

    constructor(data) {
        if (data) {
            this.lat = data.lat;
            this.lng = data.lng;
        }
    }

    toString() {
        return JSON.stringify(this);
    }
}
