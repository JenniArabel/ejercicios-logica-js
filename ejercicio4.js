function ordenNumsDesc(num) {
    let numToSring = num.toString().split('');

    //1ro: ordenar los numeros de mayor a menor
    for (let i = 0; i < numToSring.length - 1; i++) {
        
        //2do: comparar los numeros, cada digito con el siguiente
        for (let j = 0; j < numToSring.length - i - 1; j++) {

            //3ro: si el numero actual es menor que el siguiente, intercambiarlos
            // (esto  hace que los numeros se ordenen de mayor a menor)
            if (numToSring[j] < numToSring[j + 1]) {
                // Intercambiar los numeros
                let aux = numToSring[j];
                numToSring[j] = numToSring[j + 1];
                numToSring[j + 1] = aux;
            }
        }
    }
    return parseInt(numToSring.join(''));
}

console.log(ordenNumsDesc(159)); //951
