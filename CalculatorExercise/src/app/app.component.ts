import { Component } from '@angular/core';
import { Operation } from './app.operation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorExercise';
  register:boolean=false;
  simbol!:string;
  result:number=0;
  number1:number=0;
  number2:number=0;
  dateNow: Date = new Date();

    operations:Operation[] = [
   
    ];

    addOperation(){
      let myOperation = new Operation(this.result, this.simbol);              //Saves each operation the user does
      this.operations.push(myOperation);
    }

    deleteHistorical() {
      this.operations = []            //Deletes the historical data
    }

    sumar(): void {                                       
      this.result = this.number1 + this.number2
    }
    restar(): void {
      this.result = this.number1 - this.number2
    }                                                     //Each one of this method does the 4 typical operations
    multiplicar(): void {
      this.result = this.number1 * this.number2
    }
    dividir(): void {
      this.result = this.number1 / this.number2
    }
  
    setOperation() {                          // Method to match the simbol and operation for each one
      if (this.simbol == "add")
        this.sumar()
  
      if (this.simbol == "subtract")
        this.restar()
  
      if (this.simbol == "multiply")
        this.multiplicar()
  
      if (this.simbol == "split")
        this.dividir()
    }
  

    

  
}