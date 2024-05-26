function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

let firstNo;
let secondNo;
let operator;

function operate(a, op, b) {
  switch (op) {
    // The results are rounded to their nearest two decimals, Not a perfect solution.
    case "add":
      return (result = Math.round(add(a, b) * 100) / 100);
    case "sub":
      return (result = Math.round(sub(a, b) * 100) / 100);
    case "mul":
      return (result = Math.round(mul(a, b) * 100) / 100);
    case "div":
      return (result = Math.round(div(a, b) * 100) / 100);
  }
}

const display = document.querySelector(".display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const addition = document.querySelector(".add");
const subtraction = document.querySelector(".sub");
const multiplication = document.querySelector(".mul");
const divison = document.querySelector(".div");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

const calculator = document.querySelector(".calculator");

/*  - Fix the bug where the operations fail after the first clear (FIXED)
    - Results with long intergers are now rounded up to the nearest two decimals(FIXED)
    - Make it so that when a second operator is pressed before the 'equal', It should perform the first
    operation first (Put off)
    - Keyboard support
      */

let displayValue;
let operation;
let result;
let secondValue = [];
let firstValue = [];
let firstValueNum;
let secondValueNum;

// To check if the input should be stored as the first or second value
let secondValueboolan;

window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.code) {
    case "Digit1":
    case "Numpad1":
      keyOne();
      break;
    case "Digit2":
    case "Numpad2":
      keyTwo();
      break;
    case "Digit3":
    case "Numpad3":
      keyThree();
      break;
    case "Digit4":
    case "Numpad4":
      keyFour();
      break;
    case "Digit5":
    case "Numpad5":
      keyFive();
      break;
    case "Digit6":
    case "Numpad6":
      keySix();
      break;
    case "Digit7":
    case "Numpad7":
      keySeven();
      break;
    case "Digit8":
    case "Numpad8":
      keyEight();
      break;
    case "Digit9":
    case "Numpad9":
      keyNine();
      break;
    case "Digit0":
    case "Numpad0":
      keyZero();
      break;
    case "NumpadAdd":
      keyAdd()
      break;
    case "NumpadSubtract":
    case "Minus":
      keySub();
      break;
    case "NumpadMultipy":
      keyMul();
      break;
    case "NumpadDivide":
      keyDiv();
      break;
    case "Equal":
    case "NumpadEqual":
    case "NumpadEnter":
      keyEqual();
      break;
    case "Escape":
      keyClear();
      break;


    
  }
});

one.addEventListener("click", keyOne);
function keyOne() {
  if (secondValueboolan == true) {
    secondValue.push("1");
    display.textContent = secondValue;
  } else {
    firstValue.push("1");
    display.textContent = firstValue;
  }
}

two.addEventListener("click", keyTwo);
function keyTwo() {
  if (secondValueboolan == true) {
    secondValue.push("2");
    display.textContent = secondValue;
  } else {
    firstValue.push("2");
    display.textContent = firstValue;
  }
}

three.addEventListener("click", keyThree);
function keyThree() {
  if (secondValueboolan == true) {
    secondValue.push("3");
    display.textContent = secondValue;
  } else {
    firstValue.push("3");
    display.textContent = firstValue;
  }
}

four.addEventListener("click", keyFour);
function keyFour() {
  if (secondValueboolan == true) {
    secondValue.push("4");
    display.textContent = secondValue;
  } else {
    firstValue.push("4");
    display.textContent = firstValue;
  }
}

five.addEventListener("click", keyFive);
function keyFive() {
  if (secondValueboolan == true) {
    secondValue.push("5");
    display.textContent = secondValue;
  } else {
    firstValue.push("5");
    display.textContent = firstValue;
  }
}

six.addEventListener("click", keySix);
function keySix() {
  if (secondValueboolan == true) {
    secondValue.push("6");
    display.textContent = secondValue;
  } else {
    firstValue.push("6");
    display.textContent = firstValue;
  }
}

seven.addEventListener("click", keySeven);
function keySeven() {
  if (secondValueboolan == true) {
    secondValue.push("7");
    display.textContent = secondValue;
  } else {
    firstValue.push("7");
    
    display.textContent = firstValue;
  }
}

eight.addEventListener("click", keyEight);
function keyEight() {
  if (secondValueboolan == true) {
    secondValue.push("8");
    display.textContent = secondValue;
  } else {
    firstValue.push("8");
    display.textContent = firstValue;
  }
}

nine.addEventListener("click", keyNine);
function keyNine() {
  if (secondValueboolan == true) {
    secondValue.push("9");
    display.textContent = secondValue;
  } else {
    firstValue.push("9");
    display.textContent = firstValue;
  }
}

zero.addEventListener("click", keyZero);
function keyZero() {
  if (secondValueboolan == true) {
    secondValue.push("0");
    display.textContent = secondValue;
  } else {
    firstValue.push("0");
    display.textContent = firstValue;
  }
}

clear.addEventListener("click", keyClear);
function keyClear() {
  displayValue = " ";
  display.textContent = " ";
  firstValue = [];
  secondValue = [];
  firstValueNum = 0;
  secondValueNum = 0;
  operation = undefined;
  secondValueboolan = false;
}

addition.addEventListener("click", keyAdd);
function keyAdd() {
  operation = "add";
  display.textContent = " ";

  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
}

subtraction.addEventListener("click", keySub);
function keySub() {
  operation = "sub";
  display.textContent = " ";
  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
}

multiplication.addEventListener("click", keyMul);
function keyMul() {
  operation = "mul";
  display.textContent = " ";
  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
}

divison.addEventListener("click", keyDiv);
function keyDiv() {
  operation = "div";
  display.textContent = " ";
  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
}

equal.addEventListener("click", keyEqual);
function keyEqual() {
  firstValueNum = Number(firstValue.join(""));
  console.log(firstValueNum);

  secondValueNum = Number(secondValue.join(""));
  console.log(secondValueNum);

  operate(firstValueNum, operation, secondValueNum);
  display.textContent = result;

  operation = undefined;
  firstValue = [];
  secondValue = [];
  firstValue.push(result);

  firstValueNum = 0;
  secondValueNum = 0;
}
