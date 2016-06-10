import {Page, NavParams, ViewController, NavController} from 'ionic-angular';
import {StorageService} from '../../services/storage-service';
import {Settings, DEFAULT_TRAVEL_MODE, DEFAULT_UNIT_SYSTEM} from '../../models/settings';

@Page({
    templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
    private selectedTravelModes:any;
    private selectedUnitSystems:any;

    constructor(private nav:NavController,
                private navParams:NavParams,
                private viewCtrl:ViewController,
                private storageService:StorageService) {
        this.nav = nav;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storageService = storageService;

        this.selectedTravelModes = [this.navParams.data.settings.selectedTravelModes];
        this.selectedUnitSystems = [this.navParams.data.settings.selectedUnitSystems];
    }

    resetFilters():void {
        this.selectedTravelModes = [DEFAULT_TRAVEL_MODE];
        this.selectedUnitSystems = [DEFAULT_UNIT_SYSTEM];
    }

    applyFilters():void {
        this.dismiss({
            selectedTravelModes: this.selectedTravelModes,
            selectedUnitSystems: this.selectedUnitSystems
        });
    }

    dismiss(data:any):void {
        this.storageService.storage.set('settings', JSON.stringify(data));
        this.viewCtrl.dismiss(data);
    }
}
