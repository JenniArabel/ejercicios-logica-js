function contarCaracterJS(caracter, cadena) {
  let numCaracter = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      numCaracter++;
    }
  }
  return numCaracter;
}

console.log(contarCaracterJS('a', 'banana')); 
console.log(contarCaracterJS('b', 'banana')); 
console.log(contarCaracterJS('n', 'banana')); 