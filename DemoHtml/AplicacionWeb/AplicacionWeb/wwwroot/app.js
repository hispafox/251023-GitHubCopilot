alert("Hola Mundo desde app.js"); 

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (!Number.isInteger(numero) || numero <= 0) {
        throw new Error("La entrada debe ser un entero positivo.");
    }
    if (numero === 1) return false; // 1 no es primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Función para filtrar números primos de una lista
function filtrarPrimos(lista) {
    if (!Array.isArray(lista)) {
        throw new Error("La entrada debe ser un arreglo.");
    }
    return lista.filter((numero) => {
        try {
            return esPrimo(numero);
        } catch {
            return false; // Ignorar entradas no válidas
        }
    });
}

// Ejemplos de uso
console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false
console.log(esPrimo(1)); // false

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(filtrarPrimos(numeros)); // [2, 3, 5, 7, 11]

// Manejar el evento del botón para procesar números
const procesarBtn = document.getElementById("procesarBtn");
const numeroInput = document.getElementById("numeroInput");
const resultadoLista = document.getElementById("resultadoLista");

procesarBtn.addEventListener("click", () => {
    // Obtener los números del campo de entrada
    const numerosTexto = numeroInput.value;
    const numeros = numerosTexto.split(",").map((num) => parseInt(num.trim(), 10));

    // Limpiar la lista de resultados
    resultadoLista.innerHTML = "";

    // Filtrar los números primos
    const primos = filtrarPrimos(numeros);

    // Mostrar los resultados en la lista
    primos.forEach((primo) => {
        const listItem = document.createElement("li");
        listItem.textContent = primo;
        listItem.classList.add("list-group-item");
        resultadoLista.appendChild(listItem);
    });
});