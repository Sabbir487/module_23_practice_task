// get max number between 7 numbers

function getMax(num1, num2, num3, num4, num5, num6, num7){
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 && num1 > num6 && num1 > num7){
        return 'here num 1 is ultimate hero', num1;
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 && num2 > num6 && num2 > num7){
        return 'here num 2 is ultimate hero', num2;
    }
    else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 && num3 > num6 && num3 > num7){
        return 'here num 3 is ultimate hero', num3;
    }
    else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 && num4 > num6 && num4 > num7){
        return 'here num 4 is ultimate hero', num4;
    }
    else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4 && num5 > num6 && num5 > num7){
        return 'here num 5 is ultimate hero', num5;
    }
    else if (num6 > num1 && num6 > num2 && num6 > num3 && num6 > num4 && num6 > num5 && num6 > num7){
        return 'here num 6 is ultimate hero', num6;
    }
    else {
        return 'here num 7 is ultimate hero', num7;
    }
}

const numbers = getMax(45, 23, 7, 83, 99, 21, 9);
console.log(numbers);