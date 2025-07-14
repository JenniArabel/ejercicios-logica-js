function cuantoFalta(fecha) {
    const fechaActual = new Date();
    const fechaFutura = new Date(fecha);
    const diferencia = fechaFutura - fechaActual;

    if (diferencia < 0) {
        return "La fecha ya ha pasado.";
    }

    // Usando parseInt para truncar los decimales
    const diasFaltantes = parseInt(diferencia / (1000 * 60 * 60 * 24));
    
    return `Faltan ${diasFaltantes} días para la fecha ${fecha}.`;
}

console.log(cuantoFalta("2024-12-31"));
console.log(cuantoFalta("2025-12-31"));
console.log(cuantoFalta("2026-05-04"));
