function findNumber(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return [min, max];    
}

console.log(findNumber([10, 2, 30, 4, 5])); // [1, 5]
console.log(findNumber([2334454, 5]));    // [5, 2334454]
console.log(findNumber([1, 1]));            // [1, 1]
