function findMin(numbers){
    let minNumber = numbers[0];
    for (const number of numbers){
        if (number < minNumber){
            minNumber = number;
        }
    }
    return minNumber;
}

const numbers = [56, 12, 87, 23, 99];
const result = findMin(numbers);
console.log(result);