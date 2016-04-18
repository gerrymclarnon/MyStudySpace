export class Lab {

    constructor(data) {
        if (data) {
            this.buildingName = data.building_name;
            this.buildingRoomName = data.building_room_name;
            this.longitude = data.longitude;
            this.latitude = data.latitude;
            this.free = data.free;
            this.total = data.seats;
            this.campusName = data.group;
        }
    }

    toString() {
        return JSON.stringify(this);
    }
}
