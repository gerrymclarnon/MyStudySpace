export class Lab {

    buildingName: string;
    buildingRoomName:string;
    latitude:number;
    longitude:number;
    free:string;
    total:string;
    campusName:string;

    constructor(data:any) {
        if (data) {
            this.buildingName = data.building_name || data.buildingName;
            this.buildingRoomName = data.building_room_name || data.buildingRoomName;
            this.longitude = data.longitude;
            this.latitude = data.latitude;
            this.free = data.free;
            this.total = data.seats || data.total;
            this.campusName = data.group || data.campusName;
        }
    }

    //toString() {
    //    return JSON.stringify(this);
    //}
}
