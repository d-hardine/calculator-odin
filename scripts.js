function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function division(a,b) {
    return a/b;
}

function multiply(a,b) {
    return a*b;
}

function operate(firtNum,operator,secondNum) {
    if (operator === '+') {
        return add(firtNum,secondNum);
    }
    else if (operator === '-') {
        return substract(firtNum,secondNum);
    }
    else if (operator === '/') {
        return division(firtNum,secondNum);
    }
    else if (operator === '*') {
        return multiply(firtNum,secondNum);
    }
}

operate(2,'+',3);