class Calculator { 
     constructor(prevOperandTextElement, currOperandTextElement) {
          this.prevOperandTextElement = prevOperandTextElement;
          this.currOperandTextElement = currOperandTextElement;
          this.clear();
     }
   
     clear() {
          this.prevOperand = '';
          this.currOperand = '';
          this.operation = undefined;
     }
   
     delete() {
          this.currOperand = this.currOperand.toString().slice(0,-1);
     }
   
     appendNumber(number) {
          if (number === '.' && this.currOperand.includes('.')) return; 
          this.currOperand = this.currOperand.toString() + number.toString();
     }
   
     chooseOperation(operation) {
          if (this.currOperand === '') return;
          if (this.prevOperand !== '') {
               this.compute();
          }
          this.operation = operation;
          this.prevOperand = this.currOperand;
          this.currOperand = '';
     }
   
     compute() {
          let answer;
          const prev = parseFloat(this.prevOperand);
          const curr = parseFloat(this.currOperand);
          if (isNaN(prev) || isNaN(curr)) return;
          switch (this.operation) {
          case '+':
               answer = prev + curr;
               break;
          case '-':
               answer = prev - curr;
               break;
          case '*':
               answer = prev * curr;
               break;
          case '÷':
               answer = prev / curr;
               break;
          default:
               return;
          }
          this.currOperand = answer.toString();
          this.operation = undefined;
          this.prevOperand = '';
     }
   
     getDisplayNumber(number) {
          const stringNumber = number.toString();
          const integerDigits = parseFloat(stringNumber.split('.')[0]);
          const decimalDigits = stringNumber.split('.')[1];
          let integerDisplay;
          if (isNaN(integerDigits)) {
               integerDisplay = '';
          } else {
               integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
          }
          if (decimalDigits != null) {
               return `${integerDisplay}.${decimalDigits}`;
          } else {
               return integerDisplay;
          }
     }
   
     updateDisplay() {
          this.currOperandTextElement.innerText = this.getDisplayNumber(this.currOperand);
          if (this.operation != null) {
               this.prevOperandTextElement.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
          } else {
               this.prevOperandTextElement.innerText = '';
          }
     }
}
   
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const currOperandTextElement = document.querySelector('[data-curr-operand]');
const calculator = new Calculator(prevOperandTextElement, currOperandTextElement);
   
numberButtons.forEach(button => {
     button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText);
          calculator.updateDisplay();
     });
});

allClearButton.addEventListener('click', button => {
     calculator.clear();
     calculator.updateDisplay();
});
   
deleteButton.addEventListener('click', button => {
     calculator.delete();
     calculator.updateDisplay();
});

operationButtons.forEach(button => {
     button.addEventListener('click', () => {
          calculator.chooseOperation(button.innerText);
          calculator.updateDisplay();
     });
});

equalsButton.addEventListener('click', button => {
     calculator.compute();
     calculator.updateDisplay();
});
   
