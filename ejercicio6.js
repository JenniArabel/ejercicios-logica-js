function convertirTemperatura(temperatura) {
  // Verifica si la cadena tiene al menos 2 caracteres
  if (temperatura.length < 3) {
    return "Error";
  } 

  // Obtiene la unidad (últimos 2 caracteres)
  let unidad = temperatura[temperatura.length - 1];
  let simbolo = temperatura[temperatura.length - 2];
  let numero = temperatura.slice(0, temperatura.length - 2);

  // Verifica formato y realiza la conversión

  // Si la unidad es "C" o y el símbolo es "°", pasar a Fahrenheit
  if (simbolo === "°" && unidad === "C") {
    // Convierte la temperatura ingresada a numero float
    let textToNumber = parseFloat(numero);

    // Verifica si la conversión fue exitosa
    if (isNaN(textToNumber)) {
        return "Error";
    } 

    // Realiza la conversión a Fahrenheit
    let fahrenheit = Math.round((textToNumber * 9 / 5) + 32);
    return fahrenheit + "°F";
  }

    // Si la unidad es "F" o y el símbolo es "°", pasar a Celsius
  if (simbolo === "°" && unidad === "F") {

   // Convierte la temperatura ingresada a numero float
    let textToNumber = parseFloat(numero);

    // Verifica si la conversión fue exitosa
    if (isNaN(textToNumber)) {
        return "Error";
    } 

    let celsius = Math.round((textToNumber - 32) * 5 / 9);
    return celsius + "°C";
  }
  return "Error";
}


console.log(convertirTemperatura("25°C")); // 77°F
console.log(convertirTemperatura("77°F")); // 25°C
