// Pregunta 23
function suma(a, b) {
    return a + b;
}
var resultado = suma(5, 10);
console.log(resultado);

// Pregunta 24
function sumaValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    return a + b;
}
var resultado = sumaValidada(5, "10");
console.log(resultado);

// Pregunta 25
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log(validateInteger(10));
console.log(validateInteger(10.5));

// Pregunta 26
function sumaValidadaConEnteros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    if (!validateInteger(a)) {
        alert("El primer número no es entero, redondeando");
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert("El segundo número no es entero, redondeando");
        b = Math.round(b);
    }
    return a + b;
}
var resultado = sumaValidadaConEnteros(5.5, 10.7);
console.log(resultado);

// Pregunta 27
function validateAndRound(num) {
    if (!validateInteger(num)) {
        alert("El número no es entero, redondeando");
        return Math.round(num);
    }
    return num;
}
function sumaValidadaConEnterosYFuncion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    a = validateAndRound(a);
    b = validateAndRound(b);
    return a + b;
}
var resultado = sumaValidadaConEnterosYFuncion(5.5, 10.7);
console.log(resultado);
