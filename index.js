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
    case "add":
      return (result = add(a, b));
    case "sub":
      return (result = sub(a, b));
    case "mul":
      return (result = mul(a, b));
    case "div":
      return (result = div(a, b));
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

/* -How to listen to a elements (SOLVED)
   -How to display elements one over data and store them individually (SOLVED)
    -How to know which number to assign if all the listeners are grouped then
    are executed based on which one was pressed (Decided to do it individually)
    -How to erase the display value upon pressing clear (SOLVED
    -How to make equal display the result of the operation on the display (SOLVED)
    -How to store the first and second values in a way numbers larger than a single digit
    can still work unlike using an array (SOLVED)
    -  */

let displayValue;
let operation;
let result;
let secondValue = [];
let firstValue = [];
let firstValueNum;
let secondValueNum;
let secondValueboolan;

one.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("1");
    display.textContent = secondValue;
  } else {
    firstValue.push("1");
    display.textContent = firstValue;
  }
});

two.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("2");
    display.textContent = secondValue;
  } else {
    firstValue.push("2");
    display.textContent = firstValue;
  }
});

three.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("3");
    display.textContent = secondValue;
  } else {
    firstValue.push("3");
    display.textContent = firstValue;
  }
});

four.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("4");
    display.textContent = secondValue;
  } else {
    firstValue.push("4");
    display.textContent = firstValue;
  }
});

five.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("5");
    display.textContent = secondValue;
  } else {
    firstValue.push("5");
    display.textContent = firstValue;
  }
});

six.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("6");
    display.textContent = secondValue;
  } else {
    firstValue.push("6");
    display.textContent = firstValue;
  }
});

seven.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("7");
    display.textContent = secondValue;
  } else {
    firstValue.push("7");
    display.textContent = firstValue;
  }
});

eight.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("8");
    display.textContent = secondValue;
  } else {
    firstValue.push("8");
    display.textContent = firstValue;
  }
});

nine.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("9");
    display.textContent = secondValue;
  } else {
    firstValue.push("9");
    display.textContent = firstValue;
  }
});

zero.addEventListener("click", () => {
  if (secondValueboolan == true) {
    secondValue.push("0");
    display.textContent = secondValue;
  } else {
    firstValue.push("0");
    display.textContent = firstValue;
  }
});

clear.addEventListener("click", () => {
  displayValue = " ";
  display.textContent = " ";
  firstValue = [];
  secondValue = [];
  firstValueNum = 0;
  secondValueNum = 0;
  operation = undefined;


});

addition.addEventListener("click", () => {
  operation = "add";
  display.textContent = " ";
  if (firstValue != []) {
    secondValueboolan = true;
  } else {
    secondValueboolan = false;
  }
});

subtraction.addEventListener("click", () => {
    operation = "sub";
    display.textContent = " ";
    if (firstValue != []) {
      secondValueboolan = true;
    } else {
      secondValueboolan = false;
    }
});

multiplication.addEventListener("click", () => {
    operation = "mul";
    display.textContent = " ";
    if (firstValue != []) {
      secondValueboolan = true;
    } else {
      secondValueboolan = false;
    }
});

divison.addEventListener("click", () => {
    operation = "div";
    display.textContent = " ";
    if (firstValue != []) {
      secondValueboolan = true;
    } else {
      secondValueboolan = false;
    }
});

equal.addEventListener("click", () => {
  

  firstValueNum = Number(firstValue.join(""));
  console.log(firstValueNum);

  secondValueNum = Number(secondValue.join(""));
  console.log(secondValueNum);

  operate(firstValueNum ,operation, secondValueNum);
  display.textContent = result;

  operation = undefined;
  firstValue = [];
  secondValue = [];
  firstValue.push(result);

  firstValueNum = 0;
  secondValueNum = 0;
});

