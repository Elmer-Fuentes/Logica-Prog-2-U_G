function calcularIMC(pesoLibras, alturaPulgadas) {
  if (pesoLibras <= 0 || alturaPulgadas <= 0) {
    console.error("El peso y la altura deben ser valores positivos.");
    return null;
  }
  const imc = 703 * pesoLibras / (alturaPulgadas * alturaPulgadas);
  return imc;
}

// pedir a usuario ingreso de su peso y altura
const pesoStr = prompt("Ingresa tu peso en libras:");
const alturaStr = prompt("Ingresa tu altura en pulgadas:");
const peso = parseFloat(pesoStr);
const altura = parseFloat(alturaStr);

// Validar las entradas del usuario
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.error("Por favor, ingresa valores numéricos válidos y positivos para peso y altura.");
} else {

  const imcCalculado = calcularIMC(peso, altura);

  if (imcCalculado !== null) {
    console.log(`Tu Índice de Masa Corporal (IMC) es: ${imcCalculado.toFixed(2)}`);
  }
}