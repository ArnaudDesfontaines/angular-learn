import { Component, OnInit } from '@angular/core';

type Ingredient = {
    name:string,
    done:boolean,
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  ingredients = [
    {name:"flour", done : false},
    {name:"eggs", done : false},
    {name:"milk", done : false},
    {name:"sugar", done : false},
    {name:"salt", done : false},
    {name:"rum", done : false},
    {name:"butter", done : false},
    ];

  constructor() { }

  toggle(i:Ingredient){
    i.done = !i.done;
  }

  isDone(i:Ingredient){
    return i.done;
  }

  ngOnInit() {
  }


}
