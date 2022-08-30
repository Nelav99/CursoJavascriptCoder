//Curso Javascript desde 0
// palabra reservada + nombre de varible = dato;
let nombre = 'dato';

let miNumero = 5;
typeof(miNumero);

let miString = 'Hola mundo';
typeof(miString);

let miBooleano = true;
typeof(miBooleano);

let dato;
typeof(dato);
// Operadores
let suma = 5 + 5;
suma;

let resta = 3 - 2;
resta;

let division = 3 / 3;
division;

let multiplicacion = 5 * 10;
multiplicacion;

let potencia = 3 ** 3;
potencia;

//operadores de incremento
let x = 1;
console.log(x);
// Pre-incremento: aumenta el valor de x antes de ejecutar la operacion.
let y = ++x;
console.log(y);
console.log(x);
//Post-incremento: aumenta el valor de x despues de ejecutar la operacion:
let z = x++;
console.log(z);
console.log(x);

//Operadores de decremento
//Post-decremento: decrece el valor de 'x' luego de ejecutarse la operacion
let a = x--;
console.log(a);
console.log(x);
//Pre-decremento: decrece el valor de 'x' antes de ejecutarse la operacion.
let b = --x;
console.log(b);
console.log(x);

//Operadores Booleanos:
// !: lo contrario a...
!true;
!false;
// !!: doble negacion
!!true;
!!false;
// ===: operadores de igualdad
true === true;
true === false;
// !== distinto de...
true !== false;
false !== false;

//Operadores booleanos de comparacion:
// < menor que...
5 < 7;
// > mayor que...
5 > 4;
// <= menor o igual que...
5 <= 5;
// >= mayor o igual que...
5 >= 3;

//Operadores Lógicos:
// &&: AND. Todos los valores deben ser true, si uno de ellos no cumple la condicion, entonces se mostrara false.
true && true && false;
// ||: OR. Con que uno de los valores se cumpla, entonces se mostrara true.
false || false || false || true;

//Condicionales
if(true) {
    console.log('Is true');
} else {
    console.log('Is false');
}

if(false) {
    console.log(false);
} else {
    console.log('Is false');
}

//Ejemplo If
let operacion = 5 + 1;

if (operacion >= 7){
    console.log('El resultado si es mayor o igual a 7');
} else {
    console.log('El resultado no es mayor o igual a 7');
}

//Ejemplo Else If
let operacion = 5 + 1;

if (operacion >= 7){
    console.log('El resultado si es mayor o igual a 7');
} else if(operacion < 7 && operacion > 2) {
    console.log('El resultado esta entre 2 y 7.')
} else {
    console.log('El resultado no es mayor o igual a 7.');
}

//Switch
let operacion = 5 + 2;

switch(operacion) {
    case 0:
        console.log('El resultado es 0');
        break;
    case 7:
        console.log('El resultado es 7');
        break;
    default:
        console.log('El resultado no es ni 0, ni 7');
}

// Funciones
//Funciones Puras:

function personaje(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

personaje1 = new personaje('Peter', 'Parker', 19);
personaje2 = new personaje('Tony', 'Stark', 49);
personaje3 = new personaje('Bruce', 'Banner', 43);

console.log(personaje1);
console.log(personaje2);
console.log(personaje3);

// Funciones
//Ejemplo 1:
function saludar(nombre){
    return `Hola ${nombre}!`;
}

saludar('Carlos'); // Hola Carlos
saludar('Pepe'); // Hola Pepe
saludar('Maria'); // Hola Maria
//Ejemplo 2:
function saludar(nombre = 'Carlos') {
    return `Hola ${nombre}!`;
}

saludar() //Hola Carlos
saludar('Paola') //Hola Paola

//Declaracion de clases
//Clases forma antigua
function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = [];
}

Inventario.prototype.getNombre = function() {
    return this.nombre;
}

Inventario.prototype.add = function(articulo, cantidad) {
    this.articulos[articulo] = cantidad;
}
Inventario.prototype.cantidad = function(articulo) {
    return this.articulos[articulo];
}

let libros = new Inventario('Libros');

libros.getNombre();

libros.add('Aprendiendo Javascript', 5);

libros.cantidad('Aprendiendo JavaScript');

//Clases forma moderna
class Inventario {
    constructor(nombre) {
        this.nombre = nombre;
        this.articulos = [];
    }

    getNombre() {
        return this.nombre;
    }

    add(articulo, cantidad) {
        this.articulos[articulo] = cantidad;
    }

    cantidad(articulo) {
        return this.articulos[articulo];
    }
}

let libros = new Inventario('Libros');

libros.getNombre();

libros.add('Aprendiendo Javascript', 5);

libros.cantidad('Aprendiendo JavaScript');

// Ciclo While
let condicion;

while(condicion) {
    // codigo
}

//Ejemplo While
let i = 1;
while(i < 11) {
    console.log(i);
    i++;
}
// Ejemplo funcion + while
function bucleWhile(num) {
    let i = 0;
    while(i < num) {
        console.log(i);
        i++;
    }
}

bucleWhile(11);

// ciclo Do...While
let condicion;
do {
    //codigo
} while(condicion);

//Ejemplo Do...While
function doWhile(num) {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while(i < num);
}

doWhile(11);

// Ciclo For
for(inicializacion; condicion de permanencia; actualizacion) {

}

// Ejemplo For
function bucleFor(num){
    for(let i = 0; i < num; i++) {
        console.log(i)
    }
}

bucleFor(11);

//Arrays
// Sintaxis
const array = [dato1, dato2, dato3];
// Llamado
array[2]; // nombre del array[posicion]

// Ejemplo arrays:
const obj = {
    unArray: new Array(100)
};
const unArray = obj.unArray;

for(let i = 0, longitud = unArray.length; i < longitud; i++) {
    obj.unArray[i] = 'Hola';
}

