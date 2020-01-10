import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  correctFood = new Set(["onion egg ", "tomato egg ", "chili porkbelly ", "potato porkbelly ", "egg onion ", "egg tomato ", "porkbelly chili ", "porkbelly chili "]);
  food = "";
  True=false;
  False=false;

  addFood1() {
    this.food = this.food.concat("egg ");
  }

  addFood2() {
    this.food = this.food.concat("onion ");
  }

  addFood3() {
    this.food = this.food.concat("potato ");
  }

  addFood4() {
    this.food = this.food.concat("tomato ");
  }

  addFood5() {
    this.food = this.food.concat("chili ");
  }

  addFood6() {
    this.food = this.food.concat("porkbelly ");
  }

  check() {
    if(this.correctFood.has(this.food)){
      this.True = true;
    }
    else{
      this.False = true;
    }
    this.food = ""
  }
}
