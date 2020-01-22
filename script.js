class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    };

    clear () {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    };

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1);   
    };

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    chooseOperation(operation) {
        this.previousOperand = this.currentOperand
    };

    compute() {

    };

    getDisplayNumber(number) {
        
    };

    updateDisplay() {
        this.currentOperandText.innerHTML = this.currentOperand;
        this.previousOperandText.innerHTML = this.previousOperand;
    };

};



const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButton.forEach(button => {
    button.addEventListener( "click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

allClearButton.addEventListener( "click", () => {
        calculator.clear();
        calculator.updateDisplay();
    });

deleteButton.addEventListener( "click", () => {
    calculator.delete();
    calculator.updateDisplay();
});

operationButton.forEach(button => {
    button.addEventListener( "click", () => {
        calculator.appendNumber(button.innerText);
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});





