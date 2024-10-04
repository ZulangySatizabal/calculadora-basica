//1. Funciones matemáticas
function suma(a,b){
    return a + b;
}
function resta(a,b){
    return a - b;
}
function multiplicacion(a,b){
    return a * b;
}
function division(a,b){
    if(b == 0){
        alert("No se puede dividir entre cero.")
    }else {
        return a / b;
    }
}

//3. Pedir números y operador al usuario
function solicitarDatosYCalcular() {
    
    const num1 = parseInt(prompt("Ingrese el primer número:"));
    const num2 = parseInt(prompt("Ingrese el segundo número:"));
    const operador = prompt("Ingrese el operador (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Valores ingresados no son números");
        return;
    }
    
    const resultado = calculadora(num1, num2, operador);

    console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);


}

//2. Función calculadora
function calculadora (a , b, operador){
    
    switch(operador){
        case "+":
            return suma(a,b);
        case "-":
            return resta(a,b);
        case "*":
            return multiplicacion(a,b);
        case "/":
            return division(a,b);
        default:
            alert("Ingrese un operador aritmético valido. (+,-,*,/)");
    }
}

solicitarDatosYCalcular();
