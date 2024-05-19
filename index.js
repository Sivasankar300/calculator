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
        return add(a,b)
    case 'sub':
        return sub(a,b)
    case 'mul':
        return mul(a,b)
    case 'div':
        return div(a,b)
}

}

let calculator = document.querySelector('calculator');
const display = document.querySelector('display');
const one = document.querySelector('one');
const two = document.querySelector('two');
const three = document.querySelector('three');
const four = document.querySelector('four');
const five = document.querySelector('five');
const six = document.querySelector('six');
const seven = document.querySelector('seven');
const eight = document.querySelector('eight');
const nine = document.querySelector('nine');
const zero = document.querySelector('zero');
const addition = document.querySelector('add');
const subtraction = document.querySelector('sub');
const multipy = document.querySelector('multi');
const divison = document.querySelector('divide');

const keys = document.querySelectorAll('.keys')
const fifthRow = document.querySelector('fifthRow')

let storedValue = [];


