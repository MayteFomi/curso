

/*
Calculo de credito basado en la formula credito*redito*tiempo
redito = tipo de interes
interes a pagar = capital inicial * tasa interes*tiempo
Tipo de interes base:
menores a 24 meses estan a 8%
a 60 meses estan a 10%
a partir de 60 meses al 12%
*/


function calcular(x,y) {
    var capital = parseFloat(prompt('introduce el importe que cumplirá tus sueños?:💡'));//2000
    var tiempo =parseInt(prompt('Elige en cuanto tiempo(meses) quieres pagarlo comodamente'));//25
    var redito = 0;
    if (tiempo<=24) {//false
        redito = 0.08
    } else if(tiempo<=60) {//true
        redito=0.10
    }else{
        redito=0.12
    }
    var interes =(capital*redito*(tiempo/12));
    document.getElementById('resultado') .innerHTML= 
    'Credito solicitado: ' + capital + '€'+ '<br>'+
    'Tipo de interes ' + redito*100 + '%'  + '<br>'+
    'Tiempo a pagar:' + tiempo/12 + ' años' + '<br>'+
    'Interes a abonar ' + interes  + '€';
    
    var cuota = (interes+capital)/tiempo;
    console.log(cuota)
    document.getElementById('resultado2').innerHTML ='El total de cuota al mes seria: ' + cuota.toFixed(2)  + '€'+ '<br>';
    /*Para los ajustes de los decimales tendremos un metodo .tofixed(n decimales)*/
}
function imprimir(x,y) {
    window.print()
    
}