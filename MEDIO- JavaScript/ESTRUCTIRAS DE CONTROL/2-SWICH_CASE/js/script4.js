function promocion() {
    //1º.Recogida de datos
    var cupon = document.getElementById('opcion').value;
    //2º.Suelto los datos
    var respuesta = document.getElementById('resultado');
    //3º.Gestionar y definir el comportamiento de la variable
    //4º. Variables secundarias
    var dto = 0
    var precio = 10.99
    var precioFinal = 0;
    switch (cupon.toUpperCase() ) {
        case 'PLATIUM':
            dto=2
            precioFinal = precio-dto;
            respuesta.innerHTML= '<p class = "text-danger">' + ' Descuento de :' +dto + '€' +  '<br>' +'Abono exclusivo de : ' + precioFinal +'€';
            break;
            case 'DELUXE':
                dto=3
                precioFinal = precio-dto;
                respuesta.innerHTML= '<p class = "text-danger">' + ' Descuento de :' +dto+ '€'  + '<br>' +'Abono exclusivo de : ' + precioFinal +'€';
            break;
            case 'PLUSORO':
                dto=5
                precioFinal = precio-dto;
                respuesta.innerHTML= '<p class = "text-danger">' + ' Descuento de :' + dto  + '€' +  '<br>' +'Abono exclusivo de : ' + precioFinal +'€';
            break;
    
        default:
            swal('No ha intoducido ningún código promocional o error de código, inténtelo de nuevo');
            break;
    }
    
}