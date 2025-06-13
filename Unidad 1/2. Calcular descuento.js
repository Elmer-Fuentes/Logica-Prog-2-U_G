function calcular_descuento(precio, porcentaje) {
    let descuento = precio * (porcentaje / 100);
    return precio - descuento;
}


let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
let resultado = calcular_descuento(precio, porcentaje);
alert("Precio con descuento: " + resultado);
