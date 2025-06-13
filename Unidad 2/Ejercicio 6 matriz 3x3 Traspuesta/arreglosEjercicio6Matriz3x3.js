let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Inicialización de la matriz traspuesta

//matriz 3x3, la traspuestaserá 3x3.
let matriz_traspuesta = [[], [], []]; //inicialización matriz vacia

console.log(matriz); // Muestra la matriz original en la consola

for (var columna = 0; columna < matriz.length; columna++) {
    for (var fila = 0; fila < matriz[columna].length; fila++) {
        // El elemento de la fila 'columna' y columna 'fila' de la matriz original
        // va a la fila 'fila' y columna 'columna' de la matriz traspuesta.
        matriz_traspuesta[fila][columna] = matriz[columna][fila];
    }
}

alert(`Matriz: ${matriz} \n Matriz Traspuesta: ${matriz_traspuesta} \n\n\n\n\n\n\n Ver en consola para ver mejor su representación`); 

console.log(`Matriz: ${matriz} \n Matriz Traspuesta: ${matriz_traspuesta}`);