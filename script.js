// Números de las entradas
function obtenerNumeros() {
    const num1 = document.querySelector(".number1").value;
    const num2 = document.querySelector(".number2").value;
    return { num1, num2 };
}

// Mostrar el resultado
function mostrarResultado(resultado) {
    document.getElementById("result").textContent = resultado;
}

// Validar input
function validateInput(num) {
    return !isNaN(num) && num.trim() !== ''; // Verificar que no sea NaN y que no esté vacío
}

// Calcular el resultado
document.getElementById("calculate").addEventListener("click", () => {
    const { num1, num2 } = obtenerNumeros();
    const operation = document.getElementById("operation").value;

    // Validar entradas
    if (!validateInput(num1) || !validateInput(num2)) {
        alert("Solo se permite la utilización de números");
        return;
    }

    // Convertir a números después de la validación
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let resultado;
    switch (operation) {
        case 'add':
            resultado = number1 + number2;
            break;
        case 'subtract':
            resultado = number1 - number2;
            break;
        case 'multiply':
            resultado = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                resultado = "Error: División por cero";
            } else {
                resultado = number1 / number2;
            }
            break;
    }

    mostrarResultado(resultado);
});