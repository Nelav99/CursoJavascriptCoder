// Ciclo For
// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
let numeros = prompt('Ingresa un numero para que "Hola" se repita dicha cantidad de veces');

for(let i = 1; i <= numeros; i++) {
    console.log('Hola!');
}

// Pedir un numero del 1 al 10 para saber su valor al cuadrado
let ingresarNumero = parseInt(prompt('Ingresa un numero del 1 al 10 para saber su valor elevado al cuadrado'));

for (let i = 1; i <= 1; i++) {
    let resultado = ingresarNumero * ingresarNumero;
    console.log(ingresarNumero + ' al cuadrado es igual a '+ resultado);
}

//Ciclo While
// Adivina el numero del 1 al 10
let numero = Number(prompt('Adivina el número del 1 al 10 para que el ciclo se detenga. Tienes 3 intentos.'));
let counter = 0;

while(numero !== 6 && counter !== 2) {
    console.log('Estuviste cerca, ' + numero + ' es incorrecto, sigue intentandolo!');
    numero = Number(prompt('Adivina el número del 1 al 10 para que el ciclo se detenga'));
    counter++;
}

if(numero == 6) {
    console.log('Felicitaciones!! Adivinaste!!')
} else {
    console.log('Te quedaste sin intentos, vuelve a intentarlo')
}

//Ciclo Do...While
// Pedir nombre y calificacion del alumno, para llevar un control de notas
let alumno;
let calificacion;

do {
    alumno = prompt('Ingresa el nombre del alumno. Coloca "ESC" en ambos inputs en caso de querer finalizar la lista.');
    calificacion = Number(prompt('Calificación del alumno: '));
    if (alumno == 'ESC') {
        console.log('Lista finalizada.');
    } else {
        console.log(alumno + ' recibio una calificacion de ' + calificacion);
    }
} while (alumno !== 'ESC');


// Menu banco
let inputValue;
do {
    console.log('Menú: \n 1. Consultar Saldo \n 2. Retirar Dinero \n 0. Salir');
    inputValue = prompt('Elige una operaciÓn: ');
        switch (inputValue) {
        case '0':
            console.log('Gracias por su visita');
        break;
        case '1':
            console.log('Su saldo es 0.00');
        break;
        case '2':
            console.log('En este momento no tienes saldo para poder realizar la transaccion');
        break;
        default:
            console.log('Elige una opcion valida');
        break;
        }
    } while(inputValue !== '0');