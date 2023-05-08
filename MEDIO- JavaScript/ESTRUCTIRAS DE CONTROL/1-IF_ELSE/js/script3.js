
function confirmacion() {
    //declarado variable y recogido dato
    var identificacion= prompt('¿Cual es tu email? 🔑');
    /*botones asociado siempre al  aceptar, cancelar
    aceptar + campo vacio = null
    cancelar = false
    acepta = true
    */
if (identificacion !=null && identificacion !=false) {
    //detecto el valor que establece el usuario
    alert('acceso a : ' + identificacion);
//detecta no ingresa el valor
} else {
    alert('No te has identificado ⚠');
}
    
}

