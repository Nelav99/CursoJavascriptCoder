// Funcion para agregar productos
function Product(nameP, classP, price) {
    this.name = nameP;
    this.class = classP;
    this.price = price;
}

const shirt = new Product('Shirt Columbia', 'Shirt', 12.99);
const shirt2 = new Product('Shirt Africa', 'Shirt', 12.99);
const trousers = new Product('Trousers Classic', 'Trousers', 21.99);
const shoes = new Product('Shoes Vans', 'Shoes', 16.99);

//Ciclo para que el cliente elija los productos
let buying;
let buyingName;
alert('Menú: \n 1. Shirt Columbia \n 2. Shirt Africa \n 3. Trousers Classic \n 4. Shoes Vans \n 0. Ir al carrito');
buying = Number(prompt('¿Qué prenda deseas adquirir? '));
if(buying == 1) {
    buying = shirt;
    alert('Se añadio al carrito su Shirt Columbia')
} else if (buying == 2) {
    buying = shirt2;
    alert('Se añadio al carrito su Shirt Africa');
} else if (buying == 3) {
    buying = trousers;
    alert('Se añadio al carrito sus Trousers Classic');
} else if (buying == 4) {
    buying = shoes;
    alert('Se añadio al carrito sus Trousers Classic');
} else if (buying == 0) {
    alert('Ir al carrito de compras');
} else {
    alert('Elige una opcion valida');
}

// Muestra del resumen de compra
let iva = (buying.price * 1.21) - buying.price;
let total = buying.price + iva;
alert('Resumen: \n' +
            'Producto: ' + buying.name + '\n' +
            'Precio: ' + buying.price + '\n' +
            'Impuestos: ' + '+' + iva + '\n' +
            'Total: ' + total);
alert(confirm('Su total a pagar es: ' + total + '\n' + '¿Desea confirmar la compra?'));
