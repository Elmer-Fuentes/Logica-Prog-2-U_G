function tabla_multiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}



let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

tabla_multiplicar(numero);
