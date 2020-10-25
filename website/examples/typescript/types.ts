import { cpuUsage } from "process";

console.log('hello typescript');


function add(a: number, b: number) {
  return a + b;
}

const sum = add(5, 5)


// boolean

let muted: boolean = true;
muted = false;
// ERROR -> muted = 'no';

// numbers
let a: number = 6;
let b: number = 10;
let result = a / b;

// strings
let johan: string = 'johan'

// array

let people: string[] = [];
people = ["johan", "sebastian"];
// ERROR -> people.push(1000)

//mix

let peopleNumber: Array<string | number> = [];
peopleNumber.push(1000)
peopleNumber.push('johan')

enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = "Azul",
}

let colorFav: Color = Color.Azul;

// any

let comodin: any = 'joker'
comodin = 2415

// object
let someObject: object = { type: 'Wildcard' }


