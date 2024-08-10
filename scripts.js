function add(a,b) {
    return Math.round((a + b) * 1000)/ 1000;
}

function substract(a,b) {
    return Math.round((a - b) * 1000)/ 1000;
}

function division(a,b) {
    if (b == 0) {
        return 'AAARRGGHH'
    }
    else {
        return Math.round((a / b) * 1000)/ 1000;
    }
    
}

function multiply(a,b) {
    return Math.round((a * b) * 1000)/ 1000;
}

let firstNum = 0;
let operator = '';
let secondNum = 0;

function operate(firstNum,operator,secondNum) {
    if (operator === '+') {
        let results = add(firstNum,secondNum);
        display.textContent = results;
        return parseFloat(results);
    }
    else if (operator === '-') {
        let results = substract(firstNum,secondNum);
        display.textContent = results;
        return parseFloat(results);
    }
    else if (operator === '/') {
        let results = division(firstNum,secondNum);
        display.textContent = results;
        return parseFloat(results);
    }
    else if (operator === 'x') {
        let results = multiply(firstNum,secondNum);
        display.textContent = results;
        return parseFloat(results);
    }
}

const display = document.querySelector('.display');
const numberButton = document.querySelectorAll('.number-button');
const operateButton = document.querySelectorAll('.operation-button');

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', function() {
    if(numberButton['10'].textContent.includes('.') == true) {
        numberButton['10'].disabled = true;
    }
    else if(numberButton['10'].textContent.includes('.')) {
        numberButton['10'].disabled = false;
    }
});

function NumToDisplay() {   
    for (let i=0;i<=(numberButton.length - 1);i++) {
        numberButton[i].addEventListener('click',function () {
            if (operator == '') {
                if (display.textContent.length <= 12) {
                    if (firstNum == 0) {
                        firstNum = Number(display.textContent = numberButton[i].textContent);
                    }
                    else {
                        return firstNum = Number(display.textContent = display.textContent + numberButton[i].textContent);
                    }
                }
            }
            else {
                if (display.textContent.length <= 13) {
                    if (secondNum == 0) {
                        return secondNum = Number(display.textContent = numberButton[i].textContent);
                    }
                    else {
                        return secondNum = Number(display.textContent = display.textContent + numberButton[i].textContent);
                    }
                }
            }
        }
    )}
}

function operatorClicked() {
    for (let i=0;i<=(operateButton.length-1);i++) {
        operateButton[i].addEventListener('click',function() {
            if (operator == '') {
                if (operateButton[i].textContent != '=' && operateButton[i].textContent != 'c') {
                    numberButton['10'].disabled = false;
                    return operator = operateButton[i].textContent;
                }
            }
            else {
                console.log(firstNum,operator,secondNum);
                results = operate(firstNum,operator,secondNum);
                operator = operateButton[i].textContent;
                console.log(results);
                firstNum = results;
                secondNum = 0;
                numberButton['10'].disabled = false;
            }
        })
    }
}

const equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    if (operator == '') {
        operator = '+';
    }
    results = operate(firstNum,operator,secondNum);
    firstNum = results;
    operator = '';
    secondNum = 0;
    numberButton['10'].disabled = false;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click',function () {
    firstNum = 0;
    operator = '';
    secondNum = 0;
    display.textContent = '0';
    numberButton['10'].disabled = false;
});

NumToDisplay();
operatorClicked();