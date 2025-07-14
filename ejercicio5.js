function esCodigoPostalValido(codigoPostal) {
  // Verifica que el código postal tenga exactamente 4 dígitos
  if (codigoPostal.length !== 4) {
    return false;
  }
  
  // Verifica que todos los caracteres sean dígitos
  for (let i = 0; i < codigoPostal.length; i++) {
    if (codigoPostal[i] === '') {
      return false; 
    }
    if (codigoPostal[i] < '0' || codigoPostal[i] > '9') {
      return false;
    }
  }
  return true;
}

console.log(esCodigoPostalValido(5500)); //false
console.log(esCodigoPostalValido('5500')); //true
console.log(esCodigoPostalValido('550')); //false

