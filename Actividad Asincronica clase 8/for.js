// Pregunta 19
var palabras = ["Hola", "Mundo", "JavaScript", "es", "genial"];
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

// Pregunta 20
for (var i = 0; i < palabras.length; i++) {
    var palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    alert(palabraModificada);
}

// Pregunta 21
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence.trim());

// Pregunta 22
var arrayVacio = [];
for (var i = 0; i < 10; i++) {
    arrayVacio.push(i);
}
console.log(arrayVacio);
