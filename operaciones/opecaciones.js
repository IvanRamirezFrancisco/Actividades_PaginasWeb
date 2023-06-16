var v1=0,v2=0,resul,texto=''
function captura1() {
   v1=document.getElementById("v1").value
   v1=Number.parseFloat(v1)
    
}
function Captura2(){
  v2=document.getElementById("v2").value
  v2=Number.parseFloat(v2)
  resul=document.getElementById("resultado")
  if(isNaN(v2))
  v2=0
}
function suma(){
    texto="El resultado de la suma es :"+(v1+v2)
    resul.textContent=texto
}
function resta(){
    texto="El resultado de la resta es :"+(v1-v2)
    resul.textContent=texto
}
function multi(){
    texto="El resultado de la multiplicacion es "+(v1*v2)
    resul.textContent=texto
}
function divi(){
    if (v2==0 | v1==0){
        texto="No se puede dividir entre 0"
    }
    else{
        texto="El resultado de la division es:"+(v1/v2)
        
    }
    resul.textContent=texto
}