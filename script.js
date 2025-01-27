const display = document.querySelector('.display input'); // Pantalla de la calculadora
const numberButtons = document.querySelectorAll('.btn-numbers button'); // 0-9
const operatorButtons = document.querySelectorAll('.btn-operators button'); // +, -, *, /
const clearAllButton = document.querySelector('.btn-clear button:nth-child(1)'); // AC
const deleteButton = document.querySelector('.btn-clear button:nth-child(2)'); // DE
const equalButton = document.querySelector('.btn-operators button:last-child'); // =

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent.trim();
    });
}); // Agregar el número al display

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const lastChar = display.value.slice(-1);
        const operators = ['+', '-', '*', '/'];
        
        if (display.value && !operators.includes(lastChar)) {
            display.value += button.textContent.trim();
        }
    });
}); // Agregar el operador al display

clearAllButton.addEventListener("click", () => {
    display.value = '';
}); // Limpiar el display AC

deleteButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
}); // Borrar el último caracter DE

equalButton.addEventListener('click', () => {
    try {
        const result = evaluateExpression(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch {
        display.value = 'Error';
    }
}); // Calcular el resultado = 

function evaluateExpression(expression) {
    // Reemplaza los operadores para evitar problemas de seguridad
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    return Function(`'use strict'; return (${sanitizedExpression})`)();
}


