let numero = []
for(let i=0; i<10; i++)
{
let digitado = parseInt(prompt(`Escribe 10 numeros  ${i + 1}`));
if (isNaN(digitado)) {
    
    alert('No es un digito valido, repite')
    break;
}
else{
    numero.push(digitado)} // en el array numero con el operador punto y push pasamos el parametro o la variable en si que almacena los valores desde el prompt
}
alert(`Los Numero Impresos son ${numero} y se tiene ${numero.length} digitos en el arreglo`);