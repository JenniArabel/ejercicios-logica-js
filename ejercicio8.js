function replazarVocalPorNumero(cadena) {
  let resultado = "";

    // Itera sobre cada letra de la cadena
  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i];

    // Reemplaza las vocales por su correspondiente número
    if (letra === "A" || letra === "a") {
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
  }
  return resultado;
}


console.log(replazarVocalPorNumero("Jenni"));    
console.log(replazarVocalPorNumero("Academy"));
console.log(replazarVocalPorNumero("Ursula"));
    