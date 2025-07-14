function suma2MasChicos(arr) {
  // Filtra solo los números positivos
  let positivos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivos.push(arr[i]);
    }
  }

  // Busca los dos menores manualmente
  let min1 = positivos[0];
  let min2 = positivos[1];

  if (min2 < min1) {
    let guardadoTemporalmente = min1;
    min1 = min2;
    min2 = guardadoTemporalmente;
  }
    // Recorre el resto del array para encontrar los dos menores
  for (let i = 2; i < positivos.length; i++) {
    // Si el número actual es menor que el menor encontrado
    if (positivos[i] < min1) {
        // Actualiza los dos menores
      min2 = min1;
      min1 = positivos[i];
    } else if (positivos[i] < min2) { // Si es menor que el segundo menor
        // Actualiza el segundo menor
      min2 = positivos[i];
    }
  }
    // Retorna la suma de los dos menores
  return min1 + min2;
}

console.log(suma2MasChicos([1, 3, 5, 1])); // 2
console.log(suma2MasChicos([-1, -5, 100, 1])); // 101
console.log(suma2MasChicos([10, 20, 10])); // 20
