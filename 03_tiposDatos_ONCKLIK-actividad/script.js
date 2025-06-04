// Declaración de variables
let Anio = 1990;
let numeroEuler = 2.15;
let malChiste = "una sandia fantasma";
let valorPregunta = true;
let arregloDatos = [1, 2, 3, ""];
let objetoNombresyedades= { nombre: "Ana", edad: 30 };
let valorSindefinir;
let valorMalo = null;
const fechas = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarAnio() {
  alert("Año de Nacimiento: " + Anio);
}

function mostrarEuler() {
  alert("Número Euler: " + numeroEuler);
}

function mostrarMalchiste() {
  alert("Cadena de texto: " + malChiste);
}

function mostrarPregunta() {
  alert("Valor Pregunta: " + valorPregunta);
}

function mostraDatos() {
  alert("Arreglo de números: " + arregloDato);
}

function mostrNombresyedades() {
  alert("Objeto persona: " + JSON.stringify(objetoNombresyedades));
}

function mostrarSindefinir() {
  alert("Valor indefinido: " + valorSindefinir);
}

function mostrarMalo() {
  alert("Valor nulo: " + valorMalo);
}

function mostrarfechas() {
  alert("Constante mes: " + valorMalo);
}