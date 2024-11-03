function findMax(numbers){
    let maxNumber = numbers[0];
    for (const number of numbers){
        if (number > maxNumber){
            maxNumber = number;
        }
    }
    return maxNumber;
}

const numbers = [56, 12, 87, 23, 99];
const result = findMax(numbers);
console.log(result);