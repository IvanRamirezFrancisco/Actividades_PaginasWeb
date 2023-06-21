function calcular(){

    var pes = parseFloat(document.convertidor.pesos.value);
    var dolar= parseFloat(document.convertidor.ValorDolar.value);

    if(isNaN(pes) || pes === 0) 
    {
        alert("No lleno nada, Ingrese le numero porfavor")
    }
    else
    {
        var tot = pes / dolar;
        tot = tot.toFixed(2);

        document.convertidor.dolar.value=tot;
    }
    
}


function calcular2(){

    var dol = parseFloat(document.convertidor.dolar2.value)*1;
    
    if(isNaN(dol) || dol === 0)
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