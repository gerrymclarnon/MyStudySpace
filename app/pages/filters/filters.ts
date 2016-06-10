import {Page, NavParams, ViewController, NavController} from 'ionic-angular';
import {StorageService} from '../../services/storage-service';

@Page({
    templateUrl: 'build/pages/filters/filters.html'
})
export class FiltersPage {
    selectedCampuses:any;
    allCampuses:any;
    campuses:any;

    constructor(private nav:NavController,
                private navParams:NavParams,
                private viewCtrl:ViewController,
                private storageService:StorageService) {
        this.nav = nav;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storageService = storageService;

        this.selectedCampuses = this.navParams.data.filters.selectedCampuses;
        this.allCampuses = this.navParams.data.allCampuses.sort();
        this.campuses = [];

        this.allCampuses.forEach(campusName => {
            this.campuses.push({
                name: campusName,
                isChecked: (this.selectedCampuses.indexOf(campusName) !== -1)
            });
        });
    }

    applyFilters() {
        let selectedCampuses = this.campuses.filter(campus => campus.isChecked).map(campus => campus.name);

        this.dismiss({
            selectedCampuses: selectedCampuses
        });
    }

    dismiss(data) {
        this.storageService.storage.set('filters', JSON.stringify(data));
        this.viewCtrl.dismiss(data);
    }

    //onPageWillLeave() {
    //    let selectedCampuses = this.campuses.filter(campus => campus.isChecked).map(campus => campus.name);
    //    this.events.publish('settings:selectedCampuses', {selectedCampuses: selectedCampuses});
    //}
}
