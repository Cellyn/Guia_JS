/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende 
de lo siguiente: 
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const porcentajeExamen = 0.20;
    const porcentajeTareas = 0.40;
    const porcentajeAsistencia = 0.10;
    const porcentajeInvestigacion = 0.30;

    const notaFinal = (examen * porcentajeExamen) +
                      (tareas * porcentajeTareas) +
                      (asistencia * porcentajeAsistencia) +
                      (investigacion * porcentajeInvestigacion);

    console.log("Datos del Alumno:");
    console.log("Nombre:", nombre);
    console.log("Carnet:", carnet);
    console.log("Nota Final:", notaFinal.toFixed(2)); // Mostrar la nota final con 2 decimales
}

calcularNotaFinal("Celina Guerreroo", "GH12001", 9.5, 7.5, 9.0, 8.0);
