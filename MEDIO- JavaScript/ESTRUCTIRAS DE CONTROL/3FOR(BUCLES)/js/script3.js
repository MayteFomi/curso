
function calculo(n1,n2) {
    var inputNumero = parseInt(numero.value);
    var final=document.getElementById('resultado');
    var contenedor = '';
    for (var i=1; i<=12;i++) {
        contenedor += inputNumero + '*' + i + '='+  i*inputNumero +'<br>'
}
final.innerHTML=contenedor;

}