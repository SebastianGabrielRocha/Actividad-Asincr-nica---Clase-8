// Pregunta 10
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4], meses[10]);

// Pregunta 11
console.log(meses.sort());

// Pregunta 12
meses.unshift("Inicio");
meses.push("Final");
console.log(meses);

// Pregunta 13
meses.shift();
meses.pop();
console.log(meses);

// Pregunta 14
console.log(meses.reverse());

// Pregunta 15
console.log(meses.join("-"));

// Pregunta 16
var mesesCopiados = meses.slice(4, 11);
console.log(mesesCopiados);
