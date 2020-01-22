class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    };

    clear () {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    };

    delete() {
        this.currentOperand = this.currentOperand.tostring() - number.toString()
    };

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()
    };

    chooseOperation(operation) {

    };

    compute() {

    };

    getDisplayNumber(number) {
        
    };

    updateDisplay() {
        this.currentOperandText.innerHTML = this.currentOperand
    };

};



const numberButton = document.querySelectorAll('[data-number]')
const deleteButton = document.querySelectorAll('[data-delete]')
const dataButton = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const equalsButton = document.querySelectorAll('[data-equals]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandText, currentOperandText)

numberButton.forEach(button => {
    button.addEventListener( "click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    });
});

deleteButton.addEventListener( "click", () => {
        calculator.clear()
    });






