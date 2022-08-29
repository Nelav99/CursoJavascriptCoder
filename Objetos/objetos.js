//Sintaxis:
var nombre = {
    key: value,
    key2: value2,
    key3: value3
}
// Los objetos van entre llaves {}, son valores de una variable. Son variables con atributos. Los objetos se manejan con propiedades. Es una combinación entre palabras claves (Key) y valores (Value).

//Objetos literales:
const personaje ={
    nombre: 'Pepe',
    apellido: 'Grillo',
    edad: 42,
    pelicula: 'Dumbo'
}

console.log(personaje.nombre); // Para llamar a las propiedades del objeto.
console.log(personaje.ocupacion); // El objeto no esta limitado a lo que posee, por eso nos da un valor undifined en un valor no definido
console.log(personaje["pelicula"]); // Es otra opcion de acceder a un valor del objeto.
console.table(personaje); // Crea una tabla con la informacion del objeto
console.log(this.nombre); // Es una variable que hace referencia al objeto global.

// Profundidad en un objeto. Un objeto puede tener mas objetos dentro
const dinero = {
    moneda1: 1,
    moneda2: 2,
    moneda5: 5,
    moneda10: 10,
    billetes: {
        billete10: 10,
        billete20: 20,
        billete50: 50,
        billete100: 100,
        billete200: 200,
        billete500: 500,
        billete1000: 1000
    }
}

console.log(dinero.billetes.billete10); // ingresar a un objeto de un objeto

//Asignar valor a un objeto:
const pesonal = {
    nombre: 'Pedro',
    apellido: 'Bellagamba',
    edad: 25
}
console.log(personaje.nombre); //Pedro

personal.nombre = 'Andres'; //Le asignamos un nuevo valor al objeto
personaje.ocupacion = 'Empleado Publico'

console.log(personaje.nombre); //Andres
console.log(personaje.ocupacion) //Empleado Publico

//Objetos constructores:
// El constructor de un objeto es una funcion que usamos para crear un nuevo objeto cada vez que sea necesario.
//this: refiere al elemento actual donde se esta escribiendo el codigo. Cuando se emplea un función constructora para crear un objeto (con la palabra clave new), this está enlazado al nuevo objeto instanciado.
//New: nos permite construir un objeto, declarando una variable y asignando la referencia del objeto instanciado mediante la instrucción new.

// Objeto Constructor:
function Personaje (nombre, apellido, edad, pelicula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.calle = pelicula;
}
//Agregando nuevos objetos
const personaje1 = new Personaje('Silvester', 'Stalone', 65, 'Rocky');
const personaje2 = new Personaje('Jhon', 'Travolta', 54, 'PulpFiction');
const personaje3 = new Personaje('Tony', 'Stark', 42, 'Avengers');

// Llamamos a los nuevos objetos
console.log(personaje1);
console.log(personaje2);
console.log(personaje3);

//Metodos:
// es diferente a una funcion.

//funcion normal: la podemos de llamar desde donde querramos
function f1() {
    return this;
}

f1(); //Llamado de la funcion
//Métodos: Se requiere un objeto y puede no retornar un valor. Funcion declarada dentro de un objeto.
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

console.log(Persona.nombre); // llamado de metodo

// funcion Math + metodo:
Math.pow // pow es en este caso un metodo de Math

//Ejemplo metodo:
function Personal(nombre, edad, calle) {
    this.nombre = nombre; //Propiedad
    this.edad   = edad; //Propiedad
    this.calle  = calle; //Propiedad
    this.saludar = function(){ console.log("Hola mi nombre es "+ this.nombre)} //Metodo - this accede al scope local de la funcion "Personal"
}
const persona1 = new Personal("Homero", 39, "Av. Siempreviva 742"); // creacion de un nuevo objeto
const persona2 = new Personal("Marge", 36, "Av. Siempreviva 742");
persona1.saludar(); // llamado de el nuevo objeto con el metodo
persona2.saludar(); // saludar esta ligada a la funcion Personal

//Operador in y for...n:
// in: signifia "en"
console.log('nombre' in persona1); // la consola devuelve  un valor True ya que si contamos con esta propiedad
console.log('ocupacion' in persona1); //False, ya que no contiene esa propiedad

// for...in: itera propiedades
for(propertie in persona1) {
    console.log(persona1[propertie]);
} // Devuelve los valores dentro de persona
// Por cada "valor de la iteracion"(properti) en (in) el "objeto" (persona1) hace {...}
// Por cada propiedad en persona1 quiero que hagas algo.
// Recorre e imprime todas las propiedades de una sola vez

const numbers = {
    numberOne: 20,
    numberTwo: 3,
    numberThree: 17,
    numberFour: 80
}

for (number in numbers) {
    if (numbers[number] > 10) {
        console.log('Este numero es mayor que 10: ', numbers[number]);
    }
}

//Clases son una equivalencia al empleo de funcion constructora y permite definir distintos tipos de metodos.

class Personaje{
    constructor(nombre, edad, calle) { //Metodo constructor
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.calle = pelicula;
    }
    saludar() {
        console.log('Hola soy ' + this.nombre);
    }
}

const personajeH = new Personaje('Peter', 'Parker', 39, "Spiderman");

personajeH.saludar();

class Producto {
    constructor(nombre, precio, vendido) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = vendido;
        this.stock = stock;
    }

    precioConIva(){
        return this.precio * 1.21;
    }

    estaVendido() {
        return this.vendido;
    }

    vender(){
        this.vendido = true;
    }

    registrarIngreso() {
        this.stock = 20;
    }
}

const arroz = new Producto('Arroz', 20, false);
const leche = new Producto('Leche', 15, false)

console.log(arroz.vendido);
console.log('bueno, lo quiero comprar, cuanto sale con Iva: ' + arroz.precioConIva());
console.log(arroz.estaVendido());

class saludar {
    constructor(nombre, edad, calle) { //Metodo constructor
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.calle = pelicula;
    }

    sayHi() {
        console.log('Hola, soy ' + this.nombre);
    }

    sayGoodBye() {
        console.log('Chau');
    }
}

const personaje11 = new Personaje('Bruce', 'Wayne', 32, "Batman");
