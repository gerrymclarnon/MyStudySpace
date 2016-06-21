import {Injectable} from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';

@Injectable()
export class StorageService {

    storage:Storage;

    constructor() {
        this.storage = new Storage(SqlStorage);
    }
}