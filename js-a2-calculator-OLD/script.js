class Calculator {
     constructor(prevOperandTextElement, currOperandTextElement) {
          this.prevOperandTextElement = prevOperandTextElement;
          this.currOperandTextElement = currOperandTextElement;
          this.clear();
     }

     clear() {
          this.currOperand = '';
          this.prevOperand = '';
          this.operation = undefined;
     }

     delete () {

     }

     appendNumber(number) {
          if (number == '.' && this.currOperand.includes('.')) return;
          this.currOperand = this.currOperand.toString() + number.toString();


     }

     chooseOperation(operation) {
          this.operation = operation;
          this.prevOperand = this.currOperand;
          this.currOperand = '';

     }

     compute() {

     }

     updateDisplay() {
          this.currOperandTextElement.innerText = this.currOperand;
          this.prevOperandTextElement.innerText = this.prevOperand;

     }


}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const currOperandTextElement = document.querySelector('[data-curr-operand]');

const calculator = new Calculator(prevOperandTextElement, currOperandTextElement);

numberButtons.forEach(button => {
     button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()

     })
})

operationButtons.forEach(button => {
     button.addEventListener('click', () => {
          calculator.chooseOperations(button.innerText)
          calculator.updateDisplay()

     })
})


