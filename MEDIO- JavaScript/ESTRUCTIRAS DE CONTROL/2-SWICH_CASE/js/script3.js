function inicio(x, y) {
    // 1º. Recogida de variables
    var hoy = new Date();

    var h = hoy.getHours ();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();

    /**Traigo la función General y y la hacemos trabajar como variable funcional */

    h = ajusteHora(h)
    m = ajusteHora(m)
    s = ajusteHora(s)
    

    // Genero la variable que he desarrollado en la FUNCION GENERAL II
    pmam= meridiano()
    

    var dia = hoy.getDay();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();

    dia= ajusteHora(dia)
    
    //2º. Representación de las variables en el docType.
    document.getElementById('reloj').innerHTML = h + ':' + m + ':' +  s  +' ' +  pmam;

    //3º. Definir la llamada al mes, estructuras de configuracion para detectar el mes
    /*
    Tenemos que tener en cuenta no solo el valor de la variable, sinó que ahora encontramos
    una diferencia mas a la hora de definir las variables, acceder a ellas o identificarlas, 
    que será su POSICION*/
    switch (mes) {
        case 0:
            mes = 'Enero'
            break;

        case 1:
            mes = 'Febrero'
            break;

        case 2:
            mes = 'Marzo'
            break;

        case 3:
            mes = 'Abril'
            break;

        case 4:
            mes = 'Mayo'
            break;

        case 5:
            mes = 'Junio'
            break;

        case 6:
            mes = 'Julio'
            break;

        case 7:
            mes = 'Agosto'
            break;

        case 8:
            mes = 'Septiembre'
            break;

        case 9:
            mes = 'Octubre'
            break;

        case 10:
            mes = 'Noviembre'
            break;

        case 11:
            mes = 'Diciembre'
            break;

        default:
            mes = '#error de conexión'
            break;

    }
    document.getElementById('calendario').innerHTML = dia + '/ ' + mes + '/ ' + año

    /*Llamadas a función delimitando el tiempo, callback. Un ejemplo de callback es la función 
    setTimeOut(argumento1, argumento2)*/

    setTimeout(function() {inicio()}, 1000);//*Temporizador que si no viene por defecto es 1000 milisegundos

}
// ↑ Fuera del onload Funciones Generales (Máquinas Perfectas) tipo donde deprndiendo de la variable nos de una respuesta
//Función paragenerar decenas en cualquier variable fecha que solo use unidades

function ajusteHora(i) {
    if (i < 10) {
        i = '0' + i//Concatenador        
    }
    return i;    //Return() siempre evoca la remisión de la variable
}
/*Ejercicio establecer una función general donde me indique si es a.m ó p.m*/
 //  FUNCION GENERAL II
function meridiano(h) {
    if (h<12) {
        var pmam ='AM'
    } else {
       
        pmam = 'PM'
    }
    return pmam
}