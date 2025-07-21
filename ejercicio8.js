function replazarVocalPorNumero(cadena) {
  let resultado = "";

    // Itera sobre cada letra de la cadena
  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i];

    // Reemplaza las vocales por su correspondiente número

    /* if (letra === "A" || letra === "a") {
       resultado += "4";
     } else if (letra === "E" || letra === "e") {
       resultado += "3";
     } else if (letra === "I" || letra === "i") {
       resultado += "1";
     } else if (letra === "O" || letra === "o") {
       resultado += "0";
     } else if (letra === "U" || letra === "u") {
       resultado += "2";
     } else {
       resultado += letra;
     }
      */

    // Pasar a switch - max 3 if else
    
    // Convertimos la letra a minúscula SOLO para la comparación en el switch
    // Esto permite que el switch maneje 'A' y 'a' de la misma forma,
    // pero si la letra no es una vocal, se agregará al resultado en su case original.

    switch (letra.toLowerCase()) {
      case "a":
        resultado += "4";
        break;
      case "e" :
        resultado += "3";
        break;
      case "i":
        resultado += "1";
        break;
      case "o":
        resultado += "0";
        break;
      case "u":
        resultado += "2";
        break;
      default:
        resultado += letra; // Si no es vocal, se agrega la letra original
        break;
    }
  }
  return resultado;
}


console.log(replazarVocalPorNumero("Jenni"));    
console.log(replazarVocalPorNumero("Academy"));
console.log(replazarVocalPorNumero("Ursula"));
    