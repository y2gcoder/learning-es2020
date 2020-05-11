const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const calculateButton = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

let temp;
let operator;

plusButton.addEventListener("click", () => {
  if (numberInput.value) {
    temp = numberInput.value;
    operator = "+";
    numberInput.value = null;
  }
});

clearButton.addEventListener("click", () => {
  numberInput.value = null;
  temp = null;
  operator = null;
});

resultInput.addEventListener("click", () => {
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        resultInput.value = temp + numberInput.value;
      } else if (operator === "-") {
        resultInput.value = temp - numberInput.value;
      } else if (operator === "*") {
        resultInput.value = temp * numberInput.value;
      } else if (operator === "/") {
        resultInput.value = temp / numberInput.value;
      }
    }
  } else {
    if (numberInput.value) {
      resultInput.value = temp;
    }
  }
});
