/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario */

function verificarEdad(edad) {
    return edad >= 18 ? "La persona es mayor de edad." : "La persona es menor de edad.";
}

console.log(verificarEdad(20));