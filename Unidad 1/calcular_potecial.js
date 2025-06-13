function calcular_potencia(base, exponente) {
    if (exponente === 0) return 1;
    return base * calcular_potencia(base, exponente - 1);
}

let base = parseInt(prompt("Ingrese la base:"));
let exponente = parseInt(prompt("Ingrese el exponente:"));
let resultado = calcular_potencia(base, exponente);
alert("Resultado: " + resultado);
