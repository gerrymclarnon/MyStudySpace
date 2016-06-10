import {OnInit} from '@angular/core';
import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {LocationService} from '../../services/location-service';
import {MapService} from '../../services/map-service';
import {LabService} from '../../services-mocks/lab-service';
import {Location} from '../../models/location';
import {Settings} from '../../models/settings';


@Page({
    templateUrl: 'build/pages/location-details/location-details.html'
})
export class LocationDetailsPage {

    private location:Location;
    private currentLocation:Location;
    private settings:Settings;

    constructor(private nav:NavController,
                private navParams:NavParams) {
        this.nav = nav;
        this.location = navParams.get('location');
        this.currentLocation = navParams.get('currentLocation');
        this.settings = navParams.get('settings');
    }

    ngOnInit() {
    }

    itemTapped(event:any, location:Location):void {
        let url = 'https://www.google.com/maps/preview?saddr=' + this.currentLocation.lat + ',' + this.currentLocation.lng + '&daddr=' + location.lat + ',' + location.lng + '&dirflg=' + this.settings.getDirflg();
        window.open(url, "_blank", "location=yes");
    }
}