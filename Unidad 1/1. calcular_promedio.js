
function calcular_promedio() {
  let suma = 0; 
       for (let i = 0; i < 10; i++) 
        {
    let numero = parseFloat(prompt(`Ingresa el número ${i + 1} de 10:`)); // Solicita un número cada vez
    
    while (isNaN(numero)) 
        { // si no es un número
      numero = parseFloat(prompt(`# inválida, ingresa el número ${i + 1} de 10:`)); // ...vuelve a pedirlo
    }
    suma += numero; // Suma el número válido a la suma total
  }
  return suma / 10; 
}


calcular_promedio();