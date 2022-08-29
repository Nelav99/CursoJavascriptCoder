let salto = br;
// Actividad 1 Homero:
var nombre = 'Homero';
var apellido = 'Simpson';
var edad = 39;

console.log(nombre + ', ' + apellido + ', ' + edad);

// Actividad 2 Ciudades:
const ciudad1 = 'Springfield';
const ciudad2 = 'Shelbyville';
const ciudad3 = 'Capital City';
const ciudad4 = 'Cypress Creek';
const ciudad5 = 'Bronson, Misuri';
console.log('ciudad1');
console.log('ciudad2');
console.log('ciudad3');
console.log('ciudad4');
console.log('ciudad5');

// Actividad 3 Carnet:
let nombre = 'Bart Simpson';
let domicilio = '742 Evergreen, Terr. Springifeld,'
let pais = 'USA';
let nacimiento = '02/11/70';
const codigo = 'B47U89RE243';

var carnet = "Codigo: "+codigo+" "+
             "Nombre: "+nombre+" "+
             "Domicilio: "+domicilio+" "+
             "Pais: "+pais+" "+
             "Nacimiento: "+nacimiento;

alert(carnet);

//Actividad 4 Registro de personas:
let familiar1 = prompt('Ingresa el nombre del 1er integrante de la familia Simpson');
let familiar2 = prompt('Ingresa el nombre del 2do integrante de la familia Simpson');
let familiar3 = prompt('Ingresa el nombre del 3er integrante de la familia Simpson');
let familiar4 = prompt('Ingresa el nombre del 4to integrante de la familia Simpson');
let familiar5 = prompt('Ingresa el nombre del 5to integrante de la familia Simpson');

var familia = '1) ' +familiar1+ ' '+
                '2) ' +familiar2+ ' '+
                '3) ' +familiar3+ ' '+
                '4) ' +familiar4+ ' '+
                '5) ' +familiar5;

alert(familia);

// Actividad 5 Descuentos:
let precio = Number(prompt('Ingresa un precio para recibir tu descuento.'));

var descuento20 = precio - (precio * 0.20);
var descuento30 = precio - (precio * 0.30);
var descuento40 = precio - (precio * 0.40);

alert(descuento20 + ' - ' + descuento30 + ' - ' + descuento40);

// Actividad 6 Yo no fui:
var nombre;
var fuiYo = 'Bart';

do {
    nombre = prompt('Ingresa un nombre para descubrir quien fue.');
    if(nombre != fuiYo) {
        console.log('Yo no fui');
    } else {
        console.log('Fui yo');
    }
} while (nombre != fuiYo);

// Actividad 7 Presionar Y:
var ingresada;

do {
    ingresada = prompt('Adivina la letra');
    if ((ingresada == 'y') || (ingresada == 'Y')) {
        console.log('Correcto');
    } else {
        console.log('Error')
    }
} while (ingresada !== 'Y' && ingresada !== 'y')

// Actividad 8 Escoger Personaje:
let personaje;

do {
    console.log('1) Homero \n 2) Marge \n 3) Bart \n 4) Lisa \n 0) Salir');
    personaje = Number(prompt('Elige un numero del 1 al 4 para seleccionar un personaje. Presione 0 para salir.'));
    switch(personaje) {
        case 0:
            console.log('Vuelvas prontos');
        break;
        case 1:
            console.log('Elegiste a Homero');
        break;
        case 2:
            console.log('Elegiste a Marge');
        break;
        case 3:
            console.log('Elegiste a Bart');
        break;
        case 4:
            console.log('Elegiste a Lisa');
        break;
        default:
            console.log('Intenta con un caracter valido.');
        break;
    }
} while(personaje !== 0);

// Actividad 9 Presupuesto:
var Presupuesto = Number(prompt('Ingresa tu Presupuesto'));

if (Presupuesto >= 3000) {
    console.log('Presupuesto alto');
} else if ((Presupuesto >= 1001) && (Presupuesto <= 3000)){
    console.log('Presupuesto medio');
} else {
    console.log('Presupuesto bajo');
}

// Actividad 10 Vacio
let producto1 = prompt('Ingresa el nombre de tu 1er producto.');
let producto2 = prompt('Ingresa el nombre de tu 2do producto.');
let producto3 = prompt('Ingresa el nombre de tu 3er producto.');
let producto4 = prompt('Ingresa el nombre de tu 4to producto.');

if ((producto1 != '') && (producto2 != '') && (producto3 != '') && (producto4 != '')) {
    let lista = '1) ' + producto1 + ' \n ' +
                '2) ' + producto2 + ' \n ' +
                '3) ' + producto3 + ' \n ' +
                '4) ' + producto4;
    console.log(lista);
} else {
    console.log('Error: Es necesario cargar todos los productos.')
}

// Actividad 11 El pizarron:
let numero = prompt('Ingresa un número');
let texto = prompt('Ingresa un texto');

for(i = 0; i < numero; i++) {
    alert(texto);
}

// Actividad 12 El cuadrado ordinario:
let lados = prompt('Ingresa un numero');

for(let i = 0; i < lados; i++) {
    if (i > 3) {
        break;
    }
    alert('lado');
}

// Actividad 13 Registro de alumnos:
var alumnos = '';

for (let i = 0; i < 10; i++) {
    alumnos += prompt('Ingresa el nombre del alumno') + ' \n ';
}
alert(alumnos);

//Actividad 14 El inombrable:
let innombrable = prompt('Ingresa un nombre, menos el del "Inombrable"');
let ingresados = '';

while (innombrable !== 'Voldemort') {
    ingresados += innombrable + ' \n ';
    innombrable = prompt('Ingresa un nombre, menos el del "Inombrable"');
}

alert(ingresados);

// Actividad 15 Comprando productos
let ingresoNum;

do {
    console.log('Opciones: \n 1. Tomate \n 2. Papa \n 3. Carne \n 4. Pollo \n Ingresa las letras "ESC" para salir');
    ingresoNum = prompt('Elige que quieres comprar: ');
        switch (ingresoNum) {
        case 'ESC':
            console.log('Gracias por su visita');
        break;
        case '1':
            console.log('Tomate');
        break;
        case '2':
            console.log('Papa');
        break;
        case '3':
            console.log('Carne');
        break;
        case '4':
            console.log('Pollo');
        break;
        default:
            console.log('Elige una opcion valida');
        break;
        }
    } while(ingresoNum !== 'ESC');

// Actividad 16 Entradas y salidas:
function entrada() {
    return prompt('Ingresa Dato');
}

function procesamiento(valor) {
    return 'La entrada es '+ valor;
}

function salida(valor) {
    alert(valor);
}

salida(procesamiento(entrada()));



