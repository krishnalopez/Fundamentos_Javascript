/*&& sirve para agregar condiciones y unirlas
if es una condición.
.length es el largo de la palabra
en español length significa el largo.
let arreglo = [1, 2345, 4, 5];
arreglo.length; //3
se empieza a contar es desde el 0 ejemplo
longuitud cuenta todos los datos [1, 2345, 4, 5] = 4 datos en total
arreglo es cuando cuenta desde el 0 ejemplo [1, 2345, 4, 5] = 3
para aceder al primer arreglo al 1 arreglo[0]; si quiero haceder al 4 tiene que estar arreglo[2];

EJEMPLO:

El espacio igual se cuenta
let nombre = "Matias Rios";
nombre.length; 11
nombre[7];


promt es para guardar datos de te indica el usuario
*/

/* Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o más) o no.


parseInt sirve para números enteros 
parseFloat sirve para numeros decimales
*/

function edadVotar() {
  let edad = parseInt(prompt("Ingrese su Edad: "));
  // Input conversión string a número
  //Condición if - else if - else
  if (edad >= 18) {
    alert("Su edad " + edad + " aprobada para votar.");
  } else if (edad >= 0 && edad < 18) {
    //&& compuerta AND
    alert("Su edad " + edad + "no esta aprobada para votar.");
  } else {
    alert("Ingrese un valor válido");
  }
}

/* Contraseña válida
  Pide una contraseña con prompt().
  Si es igual a "1234", muestra un mensaje
  de acceso permitido. En caso contrario,
  muestra acceso denegado.
*/
function validarPassword() {
  let clave = "1234";
  let pass = prompt("Ingrese su contraseña: ");
  // Condición estructura if - else
  if (pass == clave) {
    alert("Acceso Permitido...");
  } else {
    alert("Acceso Denegado");
  }
}

/*
Verificar par o impar
Pide un número por prompt(). Evalúa si el número
es par o impar y muestra el resultado con alert().*/
// ejemplo de MOD --> modulo de división = resto
function parImpar() {
  let numero = parseInt(prompt("Ingresar Numero"));
  if (numero % 2 == 0) {
    //numero / 2 = resto;
    alert("Es par");
  } else {
    alert("Es impar");
  }
}
/*
Temperatura ambiental
Solicita la temperatura actual. Si es mayor o
igual a 30, muestra “Hace calor”, de lo contrario
muestra “Clima agradable”.
*/
function temperaturaAmbiental() {
  let temperatura = parseInt(prompt("Ingresar Temperatura"));
  if (temperatura >= 30 && temperatura <= 50) {
    alert("Hace Calor");
  } else if (temperatura >= 15 && temperatura < 30) {
    alert("Agradable");
  } else if (temperatura >= -5 && temperatura <= 15) {
    alert("Hace frío");
  } else {
    alert("Ingrese un valor válido");
  }
}

/*Comparar dos números
 Solicita dos números al usuario.
  Compara ambos y muestra cuál es mayor o si son iguales.


 */

function compararNumeros() {
  let num1 = parseInt(prompt("ingresar primer numero"));
  let num2 = parseInt(prompt("ingresar segundo numero"));
  if (num1 < num2) {
    alert("el numero " + num1 + " es menor que " + num2);
  }
  else if (num1 == num2) {
    alert("el numero " + num1 + " es igual que " + num2);
  }
  else {
    alert("el numero " + num1 + " es mayor que " + num2);
  }
}
/* Calificación escolar: Pide una nota entre 1 y 7. Si
es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”. */

function note() {
  let ingresa = parseInt(prompt("ingresa tu nota:"));

  if (ingresa < 4) {
    alert("desaprobado");
  } else if (ingresa >= 4 && ingresa <= 7) {
    alert("aprobado");
  } else {
    alert("por favor, ingresar valor valido");
  }
};

// Pide un nombre de usuario. Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. Si no, muestra “Usuario no reconocido”.

function usuarioAdmin() {
  let usu = prompt("Ingrese usuario")
  if (usu == "admin") {
    alert("Bienvenido, Administrador")
  } else {
    alert("Usuario no reconocido")
  }
}

//  Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.

function palabraMayuscula() {
  let letra = prompt("Ingresa palabra");
  let letraA = "A";
  if (letra[0] == letraA) {
    alert("la palabra comienza con a mayuscula");
  } else {
    alert("la palabra no comienza con a mayuscula");
  }
}

function precio() { // Creación de la función
  //Añadir un porcentaje de descuento e IVA y mostrar.
  const iva = 0.19;
  let descuento = parseFloat(prompt("Ingrese el valor de descuento: Ejemplo 20"));
  descuento /= 100; // operación para llevar a decimal
  let precio = parseFloat(prompt("Ingrese el precio del producto"));
  if (precio > 10000) {
    alert(`El valor ingresado fue: ${precio}\n
          IVA: ${precio * iva}\n
          Precio Total:${precio * 1.19}\n
          `);
  } else {
    alert("Precio normal");
  }
}


/* 10 Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia 
 (por ejemplo, respondiendo "sí" o "no"). 
 Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”. */


function licenciaEdad() {
  let edad = parseInt(prompt("Ingrese su Edad: "));
  if (edad >= 18 && edad < 100) {
    let licencia = prompt("Indica si tienes licencia si/no");
    if (licencia == "si") {
      alert("Usted puede conducir!");

    } else if (licencia == "no") {
      alert("No puede conducir!")
    } else {
      alert("Ingrese valores válidos!")
    }
  } else {
    alert("Ingrese valores válidos");
  }
}

/*11.- Comparar la longitud de dos palabras
Solicita dos palabras con prompt(). 
Compara cuántas letras tiene cada una y muestra cuál es más larga o si tienen el mismo largo.*/
function encontrarPalabraLarga() {
  let pal1 = prompt("Ingrese primera palabra");
  let pal2 = prompt("ingrese segunda palabra");
  if (pal1 == "" && pal2 == "") {
    alert("Ingrese un valor para trabajar...")
  }
  else if (pal1.length < pal2.length) {
    alert(`La palabra más larga es ${pal2} con ${pal2.length} carácteres`)
  } else if (pal1.length == pal2.length) {
    alert(`Las palabras  ${pal2} y ${pal1} tienen el mismo largo con :\n
      ${pal1.length} caracteres`)
  } else {
    alert(`La palabra más larga es ${pal1} con ${pal1.length} carácteres`)
  }
}

/*12.- Validar correo electrónico
Pide al usuario que ingrese un correo. Verifica si el texto contiene el símbolo @. 
Si lo tiene, muestra "Correo válido", si no, "Correo inválido"*/

function validarCorreo() {
  /*variable */
  let email = prompt("Por favor, ingresar correo:")
  /*si */
  if (email.includes("@")) {
    /*${}me permite incluir cosas adentro de javascript, solo funciona con comillas invertidas */
    alert(`El correo ${email} es valido`);
    /*no */
  } else {
    alert(`El correo ${email} es inválido`);
  }

}



/*13.- Verificar si un número es positivo o negativo
Solicita un número. Muestra si es positivo, negativo o cero.
*/
let verificarNumero() {
  let numero = parseInt(prompt("ingresar numero:"));
  if (numero > 0){
    alert(`el ${numero} es positivo`);
  } else if(numero ==0){
    alert(`el ${numero} no tiene signo`);
  }
}





















































