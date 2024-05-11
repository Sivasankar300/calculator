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
console.log(operate(10,'add',2))
console.log(operate(10,'sub',2))
console.log(operate(10,'mul',2))
console.log(operate(10,'div',2))

