export const DEFAULT_TRAVEL_MODE = "WALKING";
export const DEFAULT_UNIT_SYSTEM = "1";

export class Settings {

    selectedTravelModes:string;
    selectedUnitSystems:string;

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
            this.selectedTravelModes = Settings.DEFAULT_TRAVEL_MODE;
            this.selectedUnitSystems = Settings.DEFAULT_UNIT_SYSTEM;
        }
    }

    getDirflg() {
        let dirflg = '';

        switch(this.selectedTravelModes) {
            case 'DRIVING':
                dirflg = 'd'
                break;
            case 'BICYCLING':
                dirflg = 'b'
                break;
            case 'TRANSIT':
                dirflg = 'r'
                break;
            case 'WALKING':
                dirflg = 'w'
                break;
            default:
                dirflg = 'w'
        }

        return dirflg;
    }

    toString() {
        return JSON.stringify(this);
    }
}
