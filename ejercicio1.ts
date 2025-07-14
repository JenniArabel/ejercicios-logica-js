function contarCaracter(caracter: string, cadena: string) {
  let numCaracter: number = 0;
  for (let i: number = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      numCaracter++;
    }
  }
  return numCaracter;
}

console.log(contarCaracter('a', 'banana')); 
console.log(contarCaracter('b', 'banana')); 
console.log(contarCaracter('n', 'banana')); 