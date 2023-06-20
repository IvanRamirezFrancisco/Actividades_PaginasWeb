function calcular(){

    var pes = parseFloat(document.convertidor.pesos.value)*1;

    if(pes==0) 
    {
        alert("No lleno nada, Ingrese le numero porfavor")
    }
    else
    {
        var tot = pes / 17.24;
        tot = tot.toFixed(2);

        document.convertidor.dolar.value=tot;
    }
    
}


function calcular2(){

    var dol = parseFloat(document.convertidor.dolar2.value)*1;
    
    if(dol==0)
    {
        alert("No lleno nada, Ingrese le numero porfavor")
    }
    else
    {
        var tot = dol / 0.058;
        tot = tot.toFixed(2);

        document.convertidor.pesos2.value=tot;
    }
}


function Limpiar()
{    
    var formulario=document.getElementById('form').reset();
}