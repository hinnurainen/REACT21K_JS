let firstNumber = '';
let secondNumber = '';
let operation = '';

document.getElementById('result').addEventListener('click', performCalculation);
document.getElementById('clear').addEventListener('click', clearDisplay);

document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', function () {
        updateSelectedOperation();
        updateDisplay();
    });
})

document.querySelectorAll('.numbers > div:not(#clear)').forEach(button => {
    button.addEventListener('click', function () {
        updateSelectedNumber();
        updateDisplay();
    });
})

function clearDisplay() {
    document.getElementById('input').innerText = '';
}

function updateDisplay() {
    document.getElementById('input').innerText = `${firstNumber} ${operation} ${secondNumber}`;
}

function updateSelectedNumber() {
    if (this.innerText === '.' && firstNumber.indexOf('.') > -1) {
        return;
    }

    firstNumber += this.innerText;
}

/**
 * @return {void}
 */

function updateSelectedOperation() {
    secondNumber = firstNumber;
    firstNumber = '';

    switch (this.innerText) {
        case '+':
            operation = 'plus';
            break;
        case '-':
            operation = 'minus';
            break;
        case '×':
            operation = 'multiply';
            break;
        case '÷':
            operation = 'divide';
            break;
        default:
            console.log('Oops?');
            break;
    }
}

/**
 * @return {number} result of the calculation
 */

function performCalculation() {
    const _firstNumber = Number(firstNumber);
    const _secondNumber = Number(secondNumber);

    if (operation === 'plus') {
        return _firstNumber + _secondNumber;
    } else if (operation === 'minus') {
        return _firstNumber + _secondNumber;
    } else if (operation === '&times;') {
        return _firstNumber * _secondNumber;
    } else if (operation === '$divide;') {
        return _firstNumber / _secondNumber;
    } else {
        console.log('Whaat?');
    }
}



