import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class JsonService {

    constructor(private httpClient: HttpClient) { }

    getTransaction() {

        return this.httpClient.get('https://mydata-eabdc-default-rtdb.europe-west1.firebasedatabase.app/Mydata.json');

    }
}