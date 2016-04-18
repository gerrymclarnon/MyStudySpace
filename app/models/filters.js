export class Filters {

    constructor(data) {
        if (data) {
            let json = JSON.parse(data);

            this.selectedCampuses = json.selectedCampuses;
        } else {
            this.selectedCampuses = [];
        }
    }

    toString() {
        return JSON.stringify(this);
    }

    setSelectedCampuses(selectedCampuses) {
        this.selectedCampuses = selectedCampuses;
    }
}
