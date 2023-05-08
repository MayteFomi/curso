function identificacion(x, y) {
    var sexo = prompt('Define tu percepcion identitaria:')

    switch (sexo.toLocaleLowerCase()) {
        case 'hombre':
            swal('desgrabación de 8%');
            break;
        case 'mujer':
            swal('acceso a bonificacion de +6%');

            break;
        case 'transgenero':
            swal('planificacion a diversos planes de bonificacion + desgrabacion');

            break;
        case 'binario':
            swal('Conjuno de subvencionas asociadas al 2% del salario anual')

            break;
        case 'no binario':
            swal('Conjuno de subvencionas asociadas al 2% del salario anual')

            break;
        case 'pansexual':
            swal('Abonos asociados al colectivo adscrito 10%')

            break;
        case 'fluido':
            swal('Abonos asociados a circunscripcion entornos de desarrollos al 16%')
            break;

        default:
            swal('identificacion no contemplada' + sexo)

            break;
    }
}