function mostrar_menu() {
    let opcion = prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    switch(opcion) {
        case "1":
            alert("Resultado: " + sumar(num1, num2));
            break;
        case "2":
            alert("Resultado: " + restar(num1, num2));
            break;
        case "3":
            alert("Resultado: " + multiplicar(num1, num2));
            break;
        case "4":
            alert("Resultado: " + dividir(num1, num2));
            break;
        default:
            alert("Opción inválida");
    }
}

function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "No se puede dividir entre cero"; }

mostrar_menu();
