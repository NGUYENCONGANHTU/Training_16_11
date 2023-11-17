var resultInput = document.getElementById("output");
resultInput.style.color="white";
var currentExpression = "";

function appendNumber(number) {
  currentExpression += number;
  updateResult();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateResult();
}

function appendDecimal() {
  currentExpression += ".";
  updateResult();
}

function clearResult() {
  currentExpression = "";
  updateResult();
}

function calculateResult() {
  var result = eval(currentExpression);
  currentExpression = result.toString();
  updateResult();
}

function updateResult() {
  resultInput.value = currentExpression;
}