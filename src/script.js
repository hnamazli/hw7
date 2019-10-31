let firstNum = 0;
let secondNum = 0;
let operator = '';
let isSecond = false;
let isSecOperator = false;
let input = document.getElementById('screen');

const showValue = value => {
    input.value = value;
}

const calculator = () => {
    let result = 0;

    switch (operator) {
        case '/':
            result = secondNum ? firstNum / secondNum : 'Cannot divide by zero';
            break;
        case 'x':
            result = firstNum * secondNum;
            break;
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        default:
            result = 0;
            break;
    }
    
    if (isSecOperator) {    
        firstNum = result;
        isSecond = true;
        return showValue(result);
    } 

    firstNum = 0;
    secondNum = 0;
    operator = '';

    return showValue(result);
}

const clickOperator = value => {
    if (!isSecOperator) {
        operator = value;
        isSecond = true;
        isSecOperator = true;
    } else {
        calculator();
        operator = value;
    }
}

const allClear = () => {
    showValue(0);

    firstNum = 0;
    secondNum = 0;
    operator = '';
    isSecOperator = false;
}

const clickKey = value => {
    if (isSecond) {
        showValue(0);
        isSecond = false;
    }

    let result = input.value + value;
    let num = parseFloat(result);

    showValue(num);

    if (!operator) {
        firstNum = num;
    } else {
        secondNum = num;
    }
}