// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const display = document.querySelector(".display");

const objectButton = {
  seven: document.getElementById("seven"),
  eight: document.getElementById("eight"),
  nine: document.getElementById("nine"),
  four: document.getElementById("four"),
  five: document.getElementById("five"),
  six: document.getElementById("six"),
  one: document.getElementById("one"),
  two: document.getElementById("two"),
  three: document.getElementById("three"),
  zero: document.getElementById("zero"),
  equal: document.getElementById("equal"),
  clear: document.getElementById("clear"),
  plus: document.getElementById("plus"),
  minus: document.getElementById("minus"),
  multiply: document.getElementById("multiply"),
  division: document.getElementById("division")
};

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

function getButton({ ...value }) {
  seven.addEventListener("click", getValueButton);
  eight.addEventListener("click", getValueButton);
  nine.addEventListener("click", getValueButton);
  four.addEventListener("click", getValueButton);
  five.addEventListener("click", getValueButton);
  six.addEventListener("click", getValueButton);
  one.addEventListener("click", getValueButton);
  two.addEventListener("click", getValueButton);
  three.addEventListener("click", getValueButton);
  zero.addEventListener("click", getValueButton);
  equal.addEventListener("click", equalValue);
  clear.addEventListener("click", clearBtn);
  plus.addEventListener("click", getOperatorValue);
  minus.addEventListener("click", getOperatorValue);
  multiply.addEventListener("click", getOperatorValue);
  division.addEventListener("click", getOperatorValue);
}

function init() {
  getButton({ ...objectButton });
}

init();
