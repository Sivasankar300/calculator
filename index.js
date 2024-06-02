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

/*  
    - Make it so that when a second operator is pressed before the 'equal', It should perform the first
    operation first
    - remove the commas from the display values
      */

let displayValue;
let operation;
let result;
let secondValue = [];
let secondValueDisplay;
let firstValue = [];
let firstValueDisplay;
let firstValueNum;
let secondValueNum;

// To check if the input should be stored as the first or second value
let secondValueboolan;


/* Figure out how to repeat this function till all commas are moved */
function removeCommas(array){
  const index = array.indexOf(',');
  if (index > -1) { // only splice array when item is found
  return array.splice(index, 1); // 2nd parameter means remove one item only
}
}

one.addEventListener("click", keyOne);

function keyOne() {
  if (secondValueboolan == true) {
    secondValue.push("1");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
    
  } else {
    firstValue.push("1");
    firstValueNum = Number(firstValue.join(""));
    display.textContent = firstValueNum;
  }
}

two.addEventListener("click", keyTwo);
function keyTwo() {
  if (secondValueboolan == true) {
    secondValue.push("2");
  
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("2");
    firstValueNum = Number(firstValue.join(""));
    display.textContent = firstValueNum;
  }
}

three.addEventListener("click", keyThree);
function keyThree() {
  if (secondValueboolan == true) {
    secondValue.push("3");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("3");
    firstValueNum = Number(firstValue.join(""));

    display.textContent = firstValueNum;
  }
}

four.addEventListener("click", keyFour);
function keyFour() {
  if (secondValueboolan == true) {
    secondValue.push("4");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("4");
    firstValueNum = Number(firstValue.join(""));

    display.textContent = firstValueNum;
  }
}

five.addEventListener("click", keyFive);
function keyFive() {
  if (secondValueboolan == true) {
    secondValue.push("5");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("5");
    firstValueNum = Number(firstValue.join(""));

    display.textContent = firstValueNum;
  }
}

six.addEventListener("click", keySix);
function keySix() {
  if (secondValueboolan == true) {
    secondValue.push("6");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("6");
    firstValueNum = Number(firstValue.join(""));

    display.textContent = firstValueNum;
  }
}

seven.addEventListener("click", keySeven);
function keySeven() {
  if (secondValueboolan == true) {
    secondValue.push("7");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("7");
    firstValueNum = Number(firstValue.join(""));
    
    display.textContent = firstValueNum;
  }
}

eight.addEventListener("click", keyEight);
function keyEight() {
  if (secondValueboolan == true) {
    secondValue.push("8");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("8");
    firstValueNum = Number(firstValue.join(""));

    display.textContent = firstValueNum;
  }
}

nine.addEventListener("click", keyNine);
function keyNine() {
  if (secondValueboolan == true) {
    secondValue.push("9");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("9");
    firstValueNum = Number(firstValue.join(""));

    display.textContent = firstValueNum;
  }
}

zero.addEventListener("click", keyZero);
function keyZero() {
  if (secondValueboolan == true) {
    secondValue.push("0");
    secondValueNum = Number(secondValue.join(""));
    display.textContent = secondValueNum;
  } else {
    firstValue.push("0");
    firstValueNum = Number(firstValue.join(""));

    display.textContent = firstValueNum;
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

  display.textContent = " ";

  if(operation!==undefined){
    const event = new Event("click");
    equal.dispatchEvent(event);
  }

  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
  
  operation = "add";
}

subtraction.addEventListener("click", keySub);
function keySub() {
  display.textContent = " ";

  if(operation!==undefined){
    const event = new Event("click");
    equal.dispatchEvent(event);
  }
  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
  operation = "sub";

}

multiplication.addEventListener("click", keyMul);
function keyMul() {
  display.textContent = " ";
  if(operation!==undefined){
    const event = new Event("click");
    equal.dispatchEvent(event);
  }
  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
  operation = "mul";

}

divison.addEventListener("click", keyDiv);
function keyDiv() {
  display.textContent = " ";
  if(operation!==undefined){
    const event = new Event("click");
    equal.dispatchEvent(event);
  }
  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
  operation = "div";

}

equal.addEventListener("click", keyEqual);
function keyEqual() {
  firstValueNum = Number(firstValue.join(""));
  secondValueNum = Number(secondValue.join(""));

  operate(firstValueNum, operation, secondValueNum);
  display.textContent = result;

  operation = undefined;
  firstValue = [];
  secondValue = [];
  firstValue.push(result);

  firstValueNum = 0;
  secondValueNum = 0;
}


//Keyboard functionality using key code
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