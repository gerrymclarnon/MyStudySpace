import {OnInit} from '@angular/core';
import {Page, NavParams} from 'ionic-angular';
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

    constructor(private navParams:NavParams) {
        this.location = navParams.get('location');
        this.currentLocation = navParams.get('currentLocation');
        this.settings = navParams.get('settings');
    }

    ngOnInit() {
    }

    itemTapped(event:any, location:Location):void {
        let url = 'https://www.google.com/maps/preview?saddr=' + this.currentLocation.latLng.lat() + ',' + this.currentLocation.latLng.lng() + '&daddr=' + location.latLng.lat() + ',' + location.latLng.lng() + '&dirflg=' + this.settings.getDirflg();
        window.open(url, "_blank", "location=yes");
    }
}