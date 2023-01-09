import {Injectable} from '@angular/core'
import { Transactions } from './home-component/home-transaction'
import { HttpClient } from '@angular/common/http'

@Injectable  ()
export class TransactionService {
    constructor(private httpClient:HttpClient ){

     }

     cargaTransaction () {
        return this.httpClient.get('https://mydata-eabdc-default-rtdb.europe-west1.firebasedatabase.app/Mydata.json');
     }
}