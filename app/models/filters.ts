export class Filters {

    selectedCampuses: any;

    constructor(data) {
        if (data) {
            let json = JSON.parse(data);

            this.selectedCampuses = json.selectedCampuses;
        } else {
            this.selectedCampuses = [];
        }
    }

    public toString():string {
        return JSON.stringify(this);
    }

    public setSelectedCampuses(selectedCampuses) {
        this.selectedCampuses = selectedCampuses;
    }
}
