function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
}

let firstNo;
let secondNo;
let operator;

function operate(a,op,b){

switch(op){
    case 'add':
        return result = add(a,b)
    case 'sub':
        return result = sub(a,b)
    case 'mul':
        return result = mul(a,b)
    case 'div':
        return result = div(a,b)
}

}


const display = document.querySelector('.display');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.sub');
const multiplication = document.querySelector('.mul');
const divison = document.querySelector('.div');
const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")

/* -How to listen to a elements (SOLVED)
   -How to display elements one over data and store them individually (SOLVED)
    -How to know which number to assign if all the listeners are grouped then
    are executed based on which one was pressed (Decided to do it individually)
    -How to erase the display value upon pressing clear (SOLVED
    -How to make equal display the result of the operation on the display (SOLVED)
    -How to store the first and second values in a way numbers larger than a single digit
    can still work unlike using an array (UNSOLVED) */

   let storedValue = []
   let displayValue;
   let operation;
   let result;
   let firstValue;
   let secondValue

one.addEventListener("click", () => {
    storedValue.push(1);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})

two.addEventListener("click", () => {
    storedValue.push(2);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})

three.addEventListener("click", () => {
    storedValue.push(3);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})


four.addEventListener("click", () => {
    storedValue.push(4);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})


five.addEventListener("click", () => {
    storedValue.push(5);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})


six.addEventListener("click", () => {
    storedValue.push(6);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
    console.log(storedValue)
})


seven.addEventListener("click", () => {
    storedValue.push(7);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})


eight.addEventListener("click", () => {
    storedValue.push(8);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})


nine.addEventListener("click", () => {
    storedValue.push(9);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})


zero.addEventListener("click", () => {
    storedValue.push(0);
    displayValue = storedValue.join('')
    display.textContent = displayValue;
})

clear.addEventListener("click", () =>{
    displayValue = " "
    display.textContent = " "
    storedValue = []
})

addition.addEventListener("click",()=> {
    operation = 'add';
    display.textContent = " ";

})

subtraction.addEventListener("click ",()=> {
    operation = 'sub'
    display.textContent = " "
})

multiplication.addEventListener("click ",()=> {
    operation = 'mul'
    display.textContent = " "
})

divison.addEventListener("click ",()=> {
    operation = 'div'
    display.textContent = " "
    
})

equal.addEventListener("click",()=> {
    let n = storedValue.length;
    operate(parseInt(storedValue[n-2]),operation,parseInt(storedValue[n-1]))
    display.textContent = result;
    storedValue.push(result);
})




