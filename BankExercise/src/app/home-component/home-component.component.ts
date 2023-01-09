import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';

export interface Dessert {
  id: number;
  amount: number;
  balance: number;
  label: string;
  date: Date;
}

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements AfterViewInit {
  title = 'BankExercise';
  jsonDataResult: any;

  dataTransactions: Array<any> = [];
  dessert: Dessert[] = this.dataTransactions;
  sortedData!: Dessert[];

  constructor(private http: HttpClient) {                             //HttpClient queried to the json
    this.http.get('assets/transactions.json').subscribe((res) => {
      this.jsonDataResult = res;
      this.dataTransactions = this.jsonDataResult;

      this.sortedData.slice
    });
  }

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit(): void {
    this.jsonDataResult.sort = this.sort;

  }

  sortData(sort: Sort) {              //Method to sort the data
    const data = this.jsonDataResult; 
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {             //Comparing each other about the sorted data
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'ID':
          return compare(a.ID, b.ID, isAsc);
        case 'Amount':
          return compare(a.Amount, b.Amount, isAsc);
        case 'Balance':
          return compare(a.Balance, b.Balance, isAsc);
        case 'Label':
          return compare(a.Label, b.Label, isAsc);
        case 'Date':
          return compare(a.Date, b.Date, isAsc);
        default:
          return 0;
      }
    });
  }




}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
