import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {LabService} from "../services/lab-service";

let SERVER_URL = "./mock-data/mock-labs-data.json";

@Injectable()
export class MockLabService extends LabService {
    constructor(http:Http) {
        super(http);
        this.labsURL = SERVER_URL;
    }
}