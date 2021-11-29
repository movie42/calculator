import "./styles.css";

const display = document.querySelector(".display");
const numberBtn = document.querySelectorAll("button");

function _isObject(obj) {
  return typeof obj === "object" && !!obj;
}

function _keys(obj) {
  return _isObject(obj) ? Object.keys(obj) : [];
}

function _each(list, iter) {
  var keys = _keys(list);
  for (let i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]]);
  }
  return list;
}

function _map(list, mapper) {
  let new_list = [];
  _each(list, function (val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

function _curry(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}

const _get = _curry(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

const text = _map(numberBtn, function (node) {
  return node.textContent;
});

function handleNode(node) {
  return node;
}

_each(numberBtn, function (val) {
  return val.addEventListener("click", function (e) {
    display.innerText += handleNode(e.target);
  });
});

// let penddingValue;
// let newValue;
// let operator;

// function getValueButton(event) {
//   const value = event.target.lastChild.nodeValue;
//   if (display.innerText === "0") {
//     display.innerText = value;
//   } else if (display.innerText === String(penddingValue)) {
//     display.innerText = value;
//   } else {
//     display.innerText += value;
//   }
// }

// function setValue() {
//   penddingValue = display.innerText;
// }

// function getOperatorValue(value) {
//   let operatorValue = value?.target?.lastChild?.nodeValue;
//   setValue();
//   if (newValue === undefined) {
//     newValue = +penddingValue;
//     display.innerText = newValue;
//     setValue();
//     operator = operatorValue;
//   } else if (operatorValue !== operator) {
//     switchBtn(operator);
//     operator = operatorValue;
//   } else if (operatorValue === "+" || value === "+") {
//     newValue += +penddingValue;
//     display.innerText = newValue;
//     setValue();
//     operator = operatorValue;
//   } else if (operatorValue === "*" || value === "*") {
//     newValue *= +penddingValue;
//     display.innerText = newValue;
//     setValue();
//     operator = operatorValue;
//   } else if (operatorValue === "-" || value === "-") {
//     newValue -= +penddingValue;
//     display.innerText = newValue;
//     setValue();
//     operator = operatorValue;
//   } else if (operatorValue === "/" || value === "/") {
//     newValue /= +penddingValue;
//     display.innerText = newValue;
//     setValue();
//     operator = operatorValue;
//   }
// }

// function switchBtn(value) {
//   if (value === "+") {
//     newValue += +penddingValue;
//     display.innerText = newValue;
//     setValue();
//   } else if (value === "*") {
//     newValue *= +penddingValue;
//     display.innerText = newValue;
//     setValue();
//   } else if (value === "-") {
//     newValue -= +penddingValue;
//     display.innerText = newValue;
//     setValue();
//   } else if (value === "/") {
//     newValue /= +penddingValue;
//     display.innerText = newValue;
//     setValue();
//   }
// }

// function equalValue() {
//   getOperatorValue(operator);
//   newValue = undefined;
// }

// function clearBtn(event) {
//   display.innerText = "0";
//   penddingValue = undefined;
//   newValue = undefined;
// }

// function getButton() {
//   Array.from(numberBtn).forEach((value) =>
//     value.addEventListener("click", getValueButton)
//   );

//   equal.addEventListener("click", equalValue);
//   clear.addEventListener("click", clearBtn);

//   plus.addEventListener("click", getOperatorValue);
//   minus.addEventListener("click", getOperatorValue);
//   multiply.addEventListener("click", getOperatorValue);
//   division.addEventListener("click", getOperatorValue);
// }

// function init() {
//   getButton();
// }

// init();
