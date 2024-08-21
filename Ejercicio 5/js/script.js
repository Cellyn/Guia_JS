/* EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
aplicara en base a lo que selecciono el usuario */

function calcularDescuento(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
    
    // Obtener el modelo seleccionado
    const modelo = document.getElementById('modelo').value;
    let descuento = 0;

    // Determinar el descuento basado en el modelo
    switch (modelo) {
        case 'Ford Fiesta':
            descuento = 5;
            break;
        case 'Ford Focus':
            descuento = 10;
            break;
        case 'Ford Escape':
            descuento = 20;
            break;
        default:
            descuento = 0;
    }

    // Mostrar el resultado en HTML
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ` <p>El coche Seleccionado: ${modelo}</p>
                              <p>Tiene el descuento del: ${descuento}%</p>`;
}