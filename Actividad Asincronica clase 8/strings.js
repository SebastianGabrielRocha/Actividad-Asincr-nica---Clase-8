// Pregunta 4
var str = "javascript es divertido";
var strMayuscula = str.toUpperCase();
console.log(strMayuscula);

// Pregunta 5
var str = "javascript";
var primeros5 = str.substring(0, 5);
console.log(primeros5);

// Pregunta 6
var str = "javascript";
var ultimos3 = str.substring(str.length - 3);
console.log(ultimos3);

// Pregunta 7
var str = "javascript";
var capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalized);

// Pregunta 8
var str = "Hola Mundo";
var espacio = str.indexOf(" ");
console.log(espacio);

// Pregunta 9
var str = "javascript lenguaje";
var indexEspacio = str.indexOf(" ");
var palabra1 = str.substring(0, indexEspacio);
var palabra2 = str.substring(indexEspacio + 1);
var resultado = palabra1.charAt(0).toUpperCase() + palabra1.slice(1).toLowerCase() + " " + palabra2.charAt(0).toUpperCase() + palabra2.slice(1).toLowerCase();
console.log(resultado);
