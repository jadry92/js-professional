// functions

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 6);

function createAdder(a: number) {
  return function (b: number) {
    return a + b;
  };
}
const addFour = createAdder(4);
const fourPlus = addFour(6);

function fullName(firstName: string, lastName: string = ''): string {
  return `${firstName} ${lastName}`;
}

const johan = fullName('johan')
console.log(johan);


enum Color {
  Rojo = 'rojo',
  Verde = 'verde'
}

// insterfaces 

interface Rectangle {
  ancho: number,
  alto: number
  color?: Color
}


let rect: Rectangle = {
  ancho: 10,
  alto: 5,
  color: Color.Rojo
}

function area(r: Rectangle): number {
  return r.alto * r.alto
}

console.log(area(rect));

rect.toString = () => {
  return this.color ? `un Rectangulo ${this.color}` : `Un rectangle`
}

console.log(rect.toString());
