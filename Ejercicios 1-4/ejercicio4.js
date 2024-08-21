/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo.  */

const readline = require('readline');

// Crear la interfaz para la entrada y salida del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que determina el número mayor
function obtenerMayor(numero1, numero2) {
    if (numero1 > numero2) {
      return numero1;
    } else if (numero2 > numero1) {
      return numero2;
    } else if (numero1 == numero2){
      return "Ambos números son iguales";
    }
  }
  
  // Solicitar al usuario que ingrese los dos números
  rl.question('Ingrese el primer número entero: ', (num1) => {
    rl.question('Ingrese el segundo número entero: ', (num2) => {
      // Convertir las entradas a enteros
      num1 = parseInt(num1);
      num2 = parseInt(num2);
  
      // Llamar a la función y mostrar el resultado
      let mayor = obtenerMayor(num1, num2);
      console.log("El número mayor es: " + mayor);
  
      // Cerrar la interfaz de readline
      rl.close();
    });
  });