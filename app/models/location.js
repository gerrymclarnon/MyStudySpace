export class Location {

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
