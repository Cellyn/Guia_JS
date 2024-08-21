/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente: 
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%. */

function calcularDescuento(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
    
    // Obtener el modelo seleccionado
    const destino = document.getElementById('destino').value;
    let descuento = 0;

    // Determinar el descuento basado en el modelo
    switch (destino) {
        case 'La Costa del Sol':
            descuento = 5;
            break;
        case 'Panchimalco':
            descuento = 10;
            break;
        case 'Puerto el Triunfo':
            descuento = 15;
            break;
        default:
            descuento = 0;
    }

    // Mostrar el resultado en HTML
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ` <p>El destino Seleccionado: ${destino}</p>
                              <p>Tiene el descuento del: ${descuento}%</p>`;
}