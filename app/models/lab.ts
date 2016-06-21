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
            this.buildingName = data.building_name;
            this.buildingRoomName = data.building_room_name;
            this.longitude = data.longitude;
            this.latitude = data.latitude;
            this.free = data.free;
            this.total = data.seats;
            this.campusName = data.group;
        }
    }

    public toString():string {
        return JSON.stringify(this);
    }
}
