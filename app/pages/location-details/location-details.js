import {OnInit} from '@angular/core';
import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {LocationService} from '../../services/location-service';
import {MapService} from '../../services/map-service';
import {LabService} from '../../services-mocks/lab-service';
import {Location} from '../../models/location';
import {Settings} from '../../models/settings';
import moment from 'moment';


@Page({
    templateUrl: 'build/pages/location-details/location-details.html'
})
export class LocationDetailsPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
        this.location = navParams.get('location');
        this.currentLocation = navParams.get('currentLocation');
        this.settings = navParams.get('settings');

        this.lastUpdated = null;

        this.filters = null;
    }

    ngOnInit() {
    }

    itemTapped(event, location) {
        let url = 'https://www.google.com/maps/preview?saddr=' + this.currentLocation.lat + ',' + this.currentLocation.lng + '&daddr=' + location.lat + ',' + location.lng + '&dirflg=' + this.settings.getDirflg();
        window.open(url, "_blank", "location=yes");
    }
}