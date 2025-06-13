     
let condicion = true;

while (condicion)
{
    let valor = parseInt(prompt("Digita un valor por favor \n 0.Domingo \n 1.Lunes\n 2.Martes\n 3. Miercoles\n 4.Jueves\n 5.Viernes\n 6.Sabado"));

let dia_semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
if(valor =>0 && valor<dia_semana.length)
    {
    alert(dia_semana[valor]);   
    } else {
            alert("El valor ingresado no es un dia de la semana");
    }
    let x=parseInt(prompt("Quieres detener la ejecución del programa? \n 0.Si \n 1.No"));
    if (x===0) {condicion = false} 
} alert("Finalizado")