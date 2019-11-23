import { Component } from '@angular/core';

@Component({
  selector: 'quantity-selector',
  templateUrl: 'quantity-selector.html'
})
export class QuantitySelectorComponent {

  
  value: any = 0;

  constructor() {
    console.log('Hello QuantitySelectorComponent Component');
    
  }

  negateFromValue(){
    if(this.value > 0)
    this.value =  this.value - 1;
  }

  addToValue(){
    this.value ++;
  }


}