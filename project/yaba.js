function ropa(marca,color,talle) {

    this.marca=marca;
    this.color=color;
    this.talle=talle;
}
const buzocanguro= new ropa("yor,negro.Saxl");
const gorrolana= new ropa("yor,bordo,unico");
const joggers= new ropa("yor","negro","salxl");

console.log(buzocanguro);

let cantidad = parseInt(prompt( "Cantidad de productos que desea comprar"))
let precio = 3000;
let total = cantidad * precio;
alert ("Su compra es de " + total + " pesos");

if (total > 9000) {
    alert ("Usted tiene envio gratis")}

    else if (total < 9000) {
        alert ("Debe abonar $1000 pesos de envio")
    }


function calcularIva(precio) {
    let precioConIva = precio * 1.21;
    return precioConIva;
}




