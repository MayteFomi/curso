function calcular(x,y) {
    //1º. Declarar variables
    var peso;
    var altura;
    /*Recogida con método()
    peso = document,getElementById('calculoPeso').value */
    //Recogida sin método
    peso = parseFloat(calculoPeso.value);
    altura = parseFloat(calculoAltura.value);
    //2º. Variable de apoyo/Secundaria
    var imc = 0 ;
    //3º Formula de IMC (imc = peso/altura al cuadrddo)
    imc = (peso/(Math.pow(altura,2))).toFixed(2);
    console.log(imc);
    //4º. Concentraremos en una variable respuesta
    var respuesta = document.getElementById('resultado');
    
    /*6º. Definición de condiciones
        - Menor o ifual de 18.5 extrema delgadez
        - menores e iguales de 24,9 peso óptimo
        - menores e iguales 29,9 Sobrepeso
        - Mas de 30.01 obesidad */
    if (imc<=18.5) {
        respuesta.innerHTML= '<p class="text-warning"> Su I.M.C es de ' + imc + '<br>' +  '<br>' +'Usted está en extrema delgadez'
        
    } else { if (imc<=24.9) {
        respuesta.innerHTML='<p class="text-warning"> Su I.M.C es de  ' + imc + '<br>'  + '<br>' + 'Usted está en un peso óptimo'
        
    } else { if (imc>30) {
        respuesta.innerHTML='<p class="text-danger">Su I.M.C es de ' + imc + '<br>' + '<br>'+ 'Usted está en Sobrepeso'
        
    } else { 
        respuesta.innerHTML='<p class="text-dark">Su I.M.C es de ' + imc + '<br>' + '<br>'+ 'Usted tiene Obesidad'
        
    }
        
    }
        
    }
}