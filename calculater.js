let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendValue(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = '';
  }
  displayValue += value;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

updateDisplay();
