/*
  Ejercicio 3
  Autor: Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
  Licencia: GPL v3 o superior.
  Año 2021
  Crea las clases del diagrama de clases anexo.
  Los constructores de cada clase deben inicializar los atributos del objeto.
*/

'use strict'

//Declara aquí las clases
class Vehiculo {
  constructor() {

  }
}
class Coche {
  constructor() {

  }
}
class Bicicleta {
  constructor() {

  }
}
//Programa de Prueba
const coche = new Coche(new Date(1995, 11, 17), 'BA-1234-YZ', 'Diesel')
if (coche.fechaFabricacion.valueOf() !== (new Date(1995, 11, 17)).valueOf())
  console.error('Fallo 1: ' + coche.fechaFabricacion)
if (coche.matricula !== 'BA-1234-YZ')
  console.error('Fallo 2: ' + coche.matricula)
if (coche.combustible !== 'Diesel')
  console.error('Fallo 3: ' + coche.combustible)
if (!coche.esNuevo)
  console.error('Fallo 4: ' + coche.esNuevo)
if (coche.propietario)
  console.error('Fallo 5: ' + coche.propietario)

coche.vender('Pepe')
if (coche.propietario !== 'Pepe')
  console.error('Fallo 6: ' + coche.propietario)
if (coche.esNuevo)
  console.error('Fallo 7: ' + coche.esNuevo)

const bici = new Bicicleta(new Date(2000, 11, 17), 'rojo')
if (bici.fechaFabricacion.valueOf() !== (new Date(2000, 11, 17)).valueOf())
  console.error('Fallo 8: ' + bici.fechaFabricacion)
if (bici.propietario)
  console.error('Fallo 9: ' + bici.propietario)
if (bici.color !== 'rojo')
  console.error('Fallo 10: ' + bici.color)
