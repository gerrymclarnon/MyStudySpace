import {Component} from "@angular/core";
import {Platform, ionicBootstrap} from 'ionic-angular';

import {LabListPage} from './pages/lab-list/lab-list';
//import {LabService} from './services/lab-service';
import {LocationService} from './services/location-service';
import {MapService} from './services/map-service';
import {LabService} from './services-mocks/lab-service';
import {StorageService} from './services/storage-service';


@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    //config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
    providers: [LocationService, MapService, LabService, StorageService]
})
export class MyStudySpaceApp {
    static get parameters() {
        return [[Platform]];
    }

    constructor(platform) {
        this.rootPage = LabListPage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyStudySpaceApp)
