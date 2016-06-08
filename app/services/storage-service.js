import {Injectable} from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';

@Injectable()
export class StorageService {

    static get parameters() {
        return [];
    }

    constructor() {
        this.storage = new Storage(SqlStorage);
    }

}