let numero = []
for (i=0 ; i <10; i++){
     let aletorio = Math.floor(Math.random() * 10) + 1;
    //numero.push(aletorio)//esta forma me parese mas facil de agregar los numeros a la lista
    numero[i] = aletorio// mismo resultado. al de push
}

//alert (numero) //impreción del arreglo con los numero aletorios Ok

let valorNoExistente = false //cuando se encuentra el valor en el arreglo, se cambia a true
let posicionEncontrada = -1 
let valorbuscado = parseInt(prompt("Digita un numero entero"))
if (isNaN(valorbuscado))
{
    alert("Valor digita incorrecto")
}
else 
{
for (i=0; i<=numero.length;i++)
    {
        if(numero[i]===valorbuscado)
        {
            valorNoExistente = true
            posicionEncontrada = i // imprime la posicion del valor en el arreglo
            break;
        }
    }

}

    //resultado obtenido
    if(posicionEncontrada)
    {
        alert(`El valor buscado es ${valorbuscado} Posición encontrada ${posicionEncontrada}`)
    }
    else
    {
        //si no se cumple retornara la posición -1 lo que indica no encontrada
        alert(`No encontrado ${valorbuscado} Posición encontrada ${posicionEncontrada}`)
    }

//alert(`El valor buscado es ${valorbuscado} \n Valor encontrado ${posicionEncontrada}`)