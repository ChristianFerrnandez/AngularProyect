import { Component } from '@angular/core';
import { JsonService } from './json.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'BankExercise';
  time = new Date();
  intervalId;

  constructor() {
   
  }

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    
  }

}
