
//1º Declaro variable
var nombre;
var apellidos;
var edad;
//2º Asignar valor
/*nombre = 'Toño'*/
//3º Asignarlo a trave´s de un método
nombre = window.prompt('Introduce tu nombre');
apellidos = prompt('Introduce tus apellidos');
edad = prompt('Introduce tu edad')
/*
 En ocasiones el propio sistema operativo del usuario contribuye  a la gestión y el buen
  funcionamiento de los recursos.
window.prompt()
*/

/*1º*/
document.write(
  '<h2>Acceso confirmado al curso Programación lenguajes de guion a:<h2> '+
  '<p> a :' + nombre + ' '
  + apellidos +
  'con una edad de :'
  + edad + 'años'
);
/*2º*/
console.log(
  'Aceso permitido a '+
  nombre +
  ' ' +
  apellidos+
  '\n'+
  ' con edad de: '+
  edad + 'años'
);

/*3º*/
swal({
  title: "ACCESO!",
  text: "Autorizado",
  icon: "success",
  button: "Continuar",
});


