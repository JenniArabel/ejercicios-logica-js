function digitoMasAlto(numero) {
    let numToSring = numero.toString();
    let maxDigit = numToSring[0];

    for (let i = 1; i < numToSring.length; i++) {
        let stringToNumber = parseInt(numToSring[i]);
        if (stringToNumber > maxDigit) {
            maxDigit = stringToNumber;
        }
    }
    return maxDigit;   
}

console.log(digitoMasAlto(189)); // 9
