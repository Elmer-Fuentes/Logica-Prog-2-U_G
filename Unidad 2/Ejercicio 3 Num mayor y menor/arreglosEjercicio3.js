let numero = []
mayor=0;
menor=10000000000;
for(let i=0; i<10; i++)
    {
        numero[i]= parseInt(prompt("Digita 10 numeros"));
    }

    for (let o = 0;o <10;o++)
    {
        if (mayor<numero[o])
            {
            mayor=numero[o];
            }
        else{
                if(menor>numero[o])
                    {
                    menor=numero[o]
                    }
            }   
    }

alert(`El numero mayo es ${mayor} \n El numero menor es ${menor}`)