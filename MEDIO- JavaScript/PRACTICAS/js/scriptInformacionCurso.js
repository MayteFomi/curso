var correo = "pepitoperez@gmail.com"
var telefono ="6544444444"
function email() {
    
    document.getElementById("mensajetexto").innerHTML=''
    document.getElementById("mensajecorreo").innerHTML = 'por correo electronico a:' + correo
    
}
  function whatssapp() {
    document.getElementById("mensajecorreo").innerHTML=''
    document.getElementById("mensajetexto").innerHTML='por whatssapp a:' + telefono

}
