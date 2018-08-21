import {double} from "./hello";

class Animal{
    constructor(public name:string, public weight: number){
    }
}

const lulu = new Animal('Cat', 7);

class Narval extends Animal{

    constructor(public length: number){
        super('Gerard', 400);
    }

    detect(object:any){
        console.log(object);
    }

}

const gerard = new Narval (30);
console.log(gerard);
gerard.detect(lulu);

//Generics : we make a parameter T for the type: the type T can change
//Observable pattern
class Viewer<T>{

    viewable: T;
    view(thing:T) {
        this.viewable = thing;
    }
}

let viewer = new Viewer<Animal>();
viewer.view(lulu);
viewer.view(gerard);
console.log(viewer);

gerard.length = double(50);
console.log(gerard);

//backticks
const lorem = ` This
is cool
<html>
<div>${gerard.name}</div>
</html>
`;

console.log(lorem);

//quick shortcut for interface
//We define a new Type which is a function
type Operation =  (x:number, y: number)=> number;

// add is a function of type operation
let add:Operation=(x,y) => x+y;

console.log(add(12,15));

let div = (x:number, y:number)=> x/y;

//ducktapping works any type, including functions
let myOperation:Operation = div;


//Splat operator

const people = ['Jim', 'John', 'Jack'];
const morePeople = people.concat('Jules');// push is mutative !! not concat
console.log('People:', people);
console.log(morePeople);
const morePeopleSexy = [...people, 'Jacky', 'Joseph'];
console.log(morePeopleSexy);//Work the same in ES2015

//With objects : Only ES 2017
const house = {
    size:50,
    price:50000,
};

let palace = {
    ...house,
    employees:5
};

//let samePalace = Object.assign({employees:5, house})

console.log(palace);

const rental = {
    people, //shortcut for people:people
    palace,
    price:10000,
    days:7
};

console.log(rental);