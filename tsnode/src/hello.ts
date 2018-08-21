console.log('Hello World');

let text:string = 'Hello';

export function double(x){
    return 2*x;
}

const result = double(text.length);

console.log(result);

//arrays are typed already

function maxReducer(max:number, next:number){
    return next > max ? next : max;
}
let max = [2, 10, -10, 13, 56].reduce( maxReducer);

let array: string[] = [];

array.push("12", "15");
console.log(array);

//array.reduce(maxReducer);

class User{

    name:string;
    age = 18; //default value
    city: City

    eat(){
        console.log('Miam');
    }

}

class City{
    name:string;
}

let peter = new User();
peter.name = 'Peter';
let london = new City();
london.name = 'London';
peter.city = london;

let julia = {
    name:'Julia',
    age: 24,
    city:{
        name:'Toulouse'
    },
    eat(){/* vite casse pied...*/}
};


peter = julia ; // this is duck typing