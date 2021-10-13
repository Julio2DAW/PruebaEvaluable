/*
  Ejercicio 2
  Autor: Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
  Licencia: GPL v3 o superior.
  Año 2021
  Programa la función comprobarEdad para comprobar si la fecha introducida en el campo de fecha
  corresponde a alguien mayor de 18 años o no.
  La función mostrará un mensaje por consola indicando si es mayor de edad o no.
*/

'use strict'

function comprobarEdad(fechaNacimiento){
  let anio=new Date().getFullYear();
  let mes=new Date().getMonth()+1;
  let edad=anio-fechaNacimiento.substr(0,4);
  //Saber los años que tiene para comprobar si es mayor de edad
  if(fechaNacimiento.substr(5,2)<mes){
    edad--;
    //Saber si es mayor de edad o menor y mostrar el mensaje por consola
    if(edad>=18){
      console.log("Mayor de edad");
    }else{
      console.log("Menor de edad");
    }
  }
}
