import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise 1';
  align = "Left";
  font = "";
  sizeUser = 20;

  setFont() {                                       //Method to set the font 
    if (this.font == 'Arial')
      return {
        'font-family': 'Arial'
      }
    else if (this.font == 'Italic')
      return {
        'font-family': 'Italic'

      }
    else (this.font == 'Cursive')
    return {
      'font-family': 'Cursive'
    }
  }

  setAlign() {                                     //Method to set the alignment 
    if (this.align == 'Centered')
      return {
        'text-align': 'center'
      }
    else if (this.align == 'Left')
      return {
        'text-align': 'left'

      }
    else (this.align == 'Right')
    return {
      'text-align': 'right'
    }
  }



}








