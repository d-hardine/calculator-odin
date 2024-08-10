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

let firstNum = 0;
let operator = '';
let secondNum = 0;

function operate(firstNum,operator,secondNum) {
    if (operator === '+') {
        let results = add(firstNum,secondNum);
        display.textContent = results;
        return results;
    }
    else if (operator === '-') {
        let results = substract(firstNum,secondNum);
        display.textContent = results;
        return results;
    }
    else if (operator === '/') {
        let results = division(firstNum,secondNum);
        display.textContent = results;
        return results;
    }
    else if (operator === 'x') {
        let results = multiply(firstNum,secondNum);
        display.textContent = results;
        return results;
    }
}

const display = document.querySelector('.display');
const numberButton = document.querySelectorAll('.number-button');
const operateButton = document.querySelectorAll('.operation-button');

function NumToDisplay() {
    for (let i=0;i<=(numberButton.length - 1);i++) {
        numberButton[i].addEventListener('click',function () {
            if (operator == '') {
                if (display.textContent.length != 14) {
                    if (display.textContent == 0) {
                        return firstNum = Number(display.textContent = numberButton[i].textContent);
                    }
                    else {
                        return firstNum = Number(display.textContent = display.textContent + numberButton[i].textContent);
                    }
                }
            }
            else {
                if (display.textContent.length != 14) {
                    if (display.textContent == 0) {
                        return secondNum = Number(display.textContent = numberButton[i].textContent);
                    }
                    else {
                        return secondNum = Number(display.textContent = display.textContent + numberButton[i].textContent);
                    }
                }
            }
        });
    }
}

function operatorClicked() {
    for (let i=0;i<=(operateButton.length-1);i++) {
        operateButton[i].addEventListener('click',function() {
            if (operateButton[i].textContent != '=') {
                display.textContent = 0;
                return operator = operateButton[i].textContent;
            }
        })
    }
}

const equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    operate(firstNum,operator,secondNum);
});

NumToDisplay();
operatorClicked();