const buttons = document.querySelectorAll(".btn-num");
const operators = document.querySelectorAll(".operator-btn");
const input = document.getElementById("searchInput");
const equalTo = document.getElementById("equal-to");
const clearAll = document.getElementById("C");
const clearEntry = document.getElementById("CE");
const deleteBtn = document.getElementById("delete");
const percentage = document.getElementById("percentage");

let currentInput = ""; 
let previousInput = ""; 
let operator = ""; 

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        input.value = currentInput;
    });
});

operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (currentInput) {
            previousInput = currentInput;
            currentInput = "";
            operator = operatorButton.textContent; 
        }
    });
});

equalTo.addEventListener("click", () => {
    if (currentInput && previousInput && operator) {
        const num1 = parseFloat(previousInput); 
        const num2 = parseFloat(currentInput);
        let result;

       
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "÷":
                result = num1 / num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            default:
                result = "Error";
        }


        input.value = result;
        currentInput = result.toString();
        previousInput = ""; 
        operator = ""; 
    }
});

clearAll.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    input.value = "";
});


clearEntry.addEventListener("click", () => {
    currentInput = ""; 
    input.value = "";
});

deleteBtn.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1); 
    input.value = currentInput; 
});

percentage.addEventListener("click", () => {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        input.value = currentInput;
    }
});
