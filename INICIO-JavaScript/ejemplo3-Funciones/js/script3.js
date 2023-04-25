/*
 *              =========================
                metodo: getElementById()
                =========================
    
        DEVOLVERÁ EL ELEMENTO QUE CONTIENE AQUEL ATRIBUTO DEFINIDO POR id="";
        CON SU VALOR ESPECIFICO. 
        CUYA ESENCIA ES: MANIPULAR U OBTENER INFORMACION CONCRETA DE UN ELEMENTO QUE 
        APUNTA AL DOCTYPE
*/

function funcionesMath(x,y) {
    /*
    objeto Math, integrado en el metalenguaje que permite realizar todo tipo de calculos algoritmicos
    sin olvidar que es un objeto de caracterista estática. - no se instancia el objeto -
    new Math() = variable
    */
var numero = 8; 
console.log(numero)
var noNumero = numero.toString();
console.log(noNumero)
document.getElementById('resultado').innerHTML=
'<label style=" color:red; font-weight:bold"> logaritmo: </label> ' + Math.log(100) + '<br>' +
'<label style=" color:red; font-weight:bold"> Exponencial:</label> ' + Math.exp(8) + '<br>' +
'<label style=" color:red; font-weight:bold"> Raiz Cuadrada: </label>  ' + Math.sqrt(numero) + '<br>' +
'<label style=" color:red; font-weight:bold"> Potencia de 2 elevado a 8: </label> ' + Math.pow(2,8) + '<br>' +
'<label style=" color:red; font-weight:bold"> Valores Absolutos: </label> ' + Math.abs(-122.08) + '<br>' +
'<label style=" color:red; font-weight:bold"> Redondeo Medio: </label> ' + Math.round(72.4542) + '<br>' +
'<label style=" color:red; font-weight:bold"> Redondeo alza. </label> ' + Math.ceil(72.8542) + '<br>' +
'<label style=" color:red; font-weight:bold"> Semilla: </label> ' + Math.random() + '<br>' +
'<label style=" color:red; font-weight:bold"> Semilla entre el 1 y el 10: </label> ' + Math.random()*10 + '<br>' +
'<label style=" color:red; font-weight:bold"> Valor Máximo: </label> ' + Math.max(2,8,6,9) + '<br>' +
'<label style=" color:red; font-weight:bold"> (Anidacion) coseno Pi: </label>  ' + Math.cos(Math.PI) + '<br>' +
/*Fuera del rango del objeto*/
'<label style=" color:red; font-weight:bold"> de numero a string: </label>  ' + noNumero + '<br>' +
''
}

function funcionString() {
/*
Métodos de configuracion, representacion,manipulacion....de las secuencias de caracteres
*/
    var texto = 'JavaScript estructuras de Cadena de Texto';
    document.getElementById('resultado').innerHTML=
    '<label style=" color:red; font-weight:bold"> Minisculas: </label> ' + texto.toLocaleLowerCase() + '<br>' +
    '<label style=" color:red; font-weight:bold"> Mayusculas: </label> ' + texto.toLocaleUpperCase() + '<br>' +
    '<label style=" color:red; font-weight:bold"> longitud del texto: </label> ' + texto.length + '<br>' +
    '<label style=" color:red; font-weight:bold"> Valores Unicodes: </label> ' + texto.indexOf('j') + '<br>' +
    ''
    
}

function funcionDate() {
/*
objeto Date, integrado en el metalenguaje que permite acceder y almacenar fechas, horas, ...asociado 
datos de calendario. Tendremos en ese instante acceso a un conjunto de métodos. 
Al ser un objeto dinamico. - se instancia el objeto - ed:
orientado a objeto ⇓
    var fecha = new Date()
*/

var fecha = new Date();
document.getElementById('resultado').innerHTML=
'<label style=" color:red; font-weight:bold"> Fecha: </label> ' +fecha.toLocaleDateString() + '<br>' +
'<label style=" color:red; font-weight:bold"> Hora: </label> ' +fecha.toLocaleTimeString() + '<br>' +
'<label style=" color:red; font-weight:bold"> Minutos: </label> ' +fecha.getMinutes() + '<br>' +
'<label style=" color:red; font-weight:bold"> Segundos: </label> ' +fecha.getSeconds() + '<br>' +
''
    
}
