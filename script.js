// Función para obtener números de las entradas
function obtenerNumeros() {
    const num1 = parseFloat(document.querySelector(".number1").value);
    const num2 = parseFloat(document.querySelector(".number2").value);
    return { num1, num2 };
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
    document.getElementById("result").textContent = resultado;
}

// Validar input
function validateInput(num) {
    return !isNaN(num) && num !== '';
}

// Calcular el resultado basado en la operación seleccionada
document.getElementById("calculate").addEventListener("click", () => {
    const { num1, num2 } = obtenerNumeros();
    const operation = document.getElementById("operation").value;

    // Validar entradas
    if (!validateInput(num1) || !validateInput(num2)) {
        alert("Solo se permite la utilización de números");
        return;
    }

    let resultado;
    switch (operation) {
        case 'add':
            resultado = num1 + num2;
            break;
        case 'subtract':
            resultado = num1 - num2;
            break;
        case 'multiply':
            resultado = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultado = "Error: División por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
    }

    mostrarResultado(resultado);
});