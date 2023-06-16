const numeroaleatorio=Math.floor(Math.random() * 100)+ 1;
let Numintentos = 0;

function adivinarNumero(){
    const numIngresado = parseInt(document.getElementById('numero').value);
    if (isNaN(numIngresado) || numIngresado < 1 || numIngresado > 100){
        document.getElementById('resultado').textContent='por favor ingresa un numero valido entre 1 y 100';
        return
    }
    Numintentos++;
    if (numIngresado === numeroaleatorio){
        document.getElementById('resultado').textContent = 'Felicitaciones Adivinaste el numero en '+(Numintentos)+' intentos';

    } 
    else
    {
        const mensaje = numIngresado > numeroaleatorio ? 'MENOR' : 'MAYOR';
        document.getElementById('resultado').textContent = 'El numero que ingresaste es incorrecto, Intenta con un numero ' + mensaje;
    }
}