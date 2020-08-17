import "./styles.css";

const display = document.querySelector(".display");
const numberBtn = document.querySelectorAll(".number_btn");

let penddingValue;
let newValue;
let operator;

function getValueButton(event) {
  const value = event.target.lastChild.nodeValue;
  if (display.innerText === "0") {
    display.innerText = value;
  } else if (display.innerText === String(penddingValue)) {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function setValue() {
  penddingValue = display.innerText;
}

function getOperatorValue(value) {
  let operatorValue = value?.target?.lastChild?.nodeValue;
  setValue();
  if (newValue === undefined) {
    newValue = +penddingValue;
    display.innerText = newValue;
    setValue();
    operator = operatorValue;
  } else if (operatorValue !== operator) {
    switchBtn(operator);
    operator = operatorValue;
  } else if (operatorValue === "+" || value === "+") {
    newValue += +penddingValue;
    display.innerText = newValue;
    setValue();
    operator = operatorValue;
  } else if (operatorValue === "*" || value === "*") {
    newValue *= +penddingValue;
    display.innerText = newValue;
    setValue();
    operator = operatorValue;
  } else if (operatorValue === "-" || value === "-") {
    newValue -= +penddingValue;
    display.innerText = newValue;
    setValue();
    operator = operatorValue;
  } else if (operatorValue === "/" || value === "/") {
    newValue /= +penddingValue;
    display.innerText = newValue;
    setValue();
    operator = operatorValue;
  }
}

function switchBtn(value) {
  if (value === "+") {
    newValue += +penddingValue;
    display.innerText = newValue;
    setValue();
  } else if (value === "*") {
    newValue *= +penddingValue;
    display.innerText = newValue;
    setValue();
  } else if (value === "-") {
    newValue -= +penddingValue;
    display.innerText = newValue;
    setValue();
  } else if (value === "/") {
    newValue /= +penddingValue;
    display.innerText = newValue;
    setValue();
  }
}

function equalValue() {
  getOperatorValue(operator);
  newValue = undefined;
}

function clearBtn(event) {
  display.innerText = "0";
  penddingValue = undefined;
  newValue = undefined;
}

function getButton() {
  Array.from(numberBtn).forEach((value) =>
    value.addEventListener("click", getValueButton)
  );

  equal.addEventListener("click", equalValue);
  clear.addEventListener("click", clearBtn);
  plus.addEventListener("click", getOperatorValue);
  minus.addEventListener("click", getOperatorValue);
  multiply.addEventListener("click", getOperatorValue);
  division.addEventListener("click", getOperatorValue);
}

function init() {
  getButton();
}

init();
