function calculadora(num1, operador, num2) {
    // Verifica que los parámetros sean números 
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: Los valores deben ser números";
  }

    // Verifica que el operador sea uno de los válidos
  // if (operador === "+") {
  //   return num1 + num2;
  // } else if (operador === "-") {
  //   return num1 - num2;
  // } else if (operador === "*") {
  //   return num1 * num2;
  // } else if (operador === "/") {
  //   // Verifica que no se intente dividir por cero
  //   if (num2 === 0) return "Error: División por cero";
  //   return num1 / num2;
  // } else {
  //   return "Error: Operador inválido";
  // }

  /* NO USAR MAS DE 3 IF --> USAR SIWTCH */

  // Pasar a switch: 
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) return "Error: División por cero";
      return num1 / num2;
    default:
      return "Error: Operador inválido";
  }
}

// Ejemplos de uso:
console.log(calculadora(2, "+", 2)); // 4
console.log(calculadora(2, "*", 2)); // 4
console.log(calculadora(4, "/", 2)); // 2
console.log(calculadora(4, "/", 0)); // Error: División por cero
console.log(calculadora(4, "x", 2)); // Operador inválido
console.log(calculadora(4, "*", 2)); // 8