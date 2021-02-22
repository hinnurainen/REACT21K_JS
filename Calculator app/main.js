let firstNumber = '';
let secondNumber = '';
let operation = '';

document.getElementById('result').addEventListener('click', performCalculation);

document.getElementById('clear').addEventListener('click', clearDisplay);

document.querySelectorAll('.operators > div').forEach(button => {
  button.addEventListener('click', event => {
    updateSelectedOperation(event);
    updateDisplay();
  });
})

document.querySelectorAll('.numbers > div:not(#clear)').forEach(button => {
  button.addEventListener('click', event => {
    updateSelectedNumber(event);
    updateDisplay();
  });
})

function clearDisplay() {
  document.getElementById('input').innerText = '';
}

function updateDisplay() {
  document.getElementById('input').innerText = `${secondNumber}${operation}${firstNumber}`;
}

function updateSelectedNumber() {
  if (this.event.target.innerText === '.' && firstNumber.indexOf('.') > -1) {
    return;
  }

  firstNumber += this.event.target.innerText;
}

/**
 * @return {void}
 */

function updateSelectedOperation() {
  secondNumber = firstNumber;
  firstNumber = '';

  switch (this.event.target.innerText) {
    case '+':
      operation = '+';
      break;
    case '-':
      operation = '-';
      break;
    case '×':
      operation = '×';
      break;
    case '÷':
      operation = '÷';
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
  let result = 0;

  if (operation === '+') {
    result = _secondNumber + _firstNumber;
  } else if (operation === '-') {
    result = _secondNumber - _firstNumber;
  } else if (operation === '×') {
    result = _secondNumber * _firstNumber;
  } else if (operation === '÷') {
    result = _secondNumber / _firstNumber;
  } else {
    console.log('Whaat?')
  }

  firstNumber = "" + result;
  secondNumber = '';
  operation = '';
  updateDisplay();
}

