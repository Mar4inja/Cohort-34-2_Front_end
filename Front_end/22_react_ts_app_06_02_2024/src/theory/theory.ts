import { log } from "console";

export let firstName: string;

firstName = 'Andrew';
// firstName = 5;  typization error example

export let age: number | string = 20;
age = '20';

export let direction: 'UP' | 'DOWN';

direction = "DOWN";
direction = "UP";

let person: {
    fullName: string,
    age: number,
    isProgrammer: boolean
}

person = { fullName: 'John Wick', age: 59, isProgrammer: false };

interface IPerson {
    fullName: string,
    age: number,
    isProgrammer: boolean
}

let person1: IPerson = {
    fullName: 'Mike Tyson',
    age: 57,
    isProgrammer: false
}

let person2: IPerson = {
    fullName: ' Mark Zuckerberg',
    age: 39,
    isProgrammer: true
}

// массив, состоящий из чисел и буллеанов
let ids: (number | boolean)[] = [];
ids.push(1, 5.89, -8963, true)

// массив чисел или массив буллеанов
// let names: number[] | boolean[] = [];

// массив чисел или буллеан
// let names: number[] | boolean = [];

// число или массив буллеанов
// let names: number | boolean[] = [];

let example: any = [];
example = 5;
example = '0';

function perimetrCircle(radius: number): string {
return `Perimetr of circle = ${2 * Math.PI * radius}`
}

const sayHi = (name: string): void => console.log('Hello' + name);

