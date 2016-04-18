export const DEFAULT_TRAVEL_MODE = "WALKING";
export const DEFAULT_UNIT_SYSTEM = "1";

export class Settings {

    static get DEFAULT_TRAVEL_MODE() {
        return DEFAULT_TRAVEL_MODE;
    }

    static get DEFAULT_UNIT_SYSTEM() {
        return DEFAULT_UNIT_SYSTEM;
    }

    constructor(data) {
        if (data) {
            let json = JSON.parse(data);

            this.selectedTravelModes = json.selectedTravelModes;
            this.selectedUnitSystems = json.selectedUnitSystems;
        } else {
            this.selectedTravelModes = [Settings.DEFAULT_TRAVEL_MODE];
            this.selectedUnitSystems = [Settings.DEFAULT_UNIT_SYSTEM];
        }
    }

    toString() {
        return JSON.stringify(this);
    }
}
