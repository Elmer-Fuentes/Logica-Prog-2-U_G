//arreglo 1
let numero = []
for (i=0 ; i <10; i++)
{
     let aletorio = Math.floor(Math.random() * 10) + 1;
    //numero.push(aletorio)//esta forma me parese mas facil de agregar los numeros a la lista
    numero[i] = aletorio// pasamos el arreglo y la iteración del for con eso almacenamos
}

//arreglo 3
let numero2 = []
for (i=0 ; i <10; i++)
{
     let aletorio2 = Math.floor(Math.random() * 10) + 1;
    numero2.push(aletorio2) //agregado en el arreglo2
}

//arreglo 3 utilizado para la suma de arreglo 1 y 2 
let resultado = []
for (let i = 0; i < 10; i++) // este for utilil para recorrer ambos arreglo 
    {
let res= numero[i]+numero2[i]
resultado.push(res)
}

alert(`Datos para los Arreglos\n Primer arreglo:        ${numero} \n Segundo Arreglo:        ${numero2} \n Suma de arreglo 1y 2:        ${resultado}`)

