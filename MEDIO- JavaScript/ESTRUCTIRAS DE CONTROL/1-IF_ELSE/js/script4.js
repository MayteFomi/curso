function calidad(x,y) {
   var trazabilidad = parseInt(prompt('Introduce nº de trazabilidad ✔:'));
   if (trazabilidad %2 == 0) {
       swal(' URGENTE, ENVIAR A: Departamento de Administracion #Error de Caducidad#');
   } else {
       swal ('Continua en produccion: Responsable Dep. de Logistica');
   }
}