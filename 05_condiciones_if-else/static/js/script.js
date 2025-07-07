script.js
//Ejercicios codiciones IF else 
console.log("Conexion de JS  establecida...");

/* Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o mas) o no.
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su edad: ")); // Input conversion string a numero
    //condicion IF - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " Aprobada para votar.");
    } else if (edad >= 0 && edad <= 18) {//&& compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("ingrese un valor válido");

    }

};

/* Contraseña valida 
Pide una contrseña prompt().
Si es igual 1 "1234", muestra un mensaje 
de acceso permitido. En caso contrario,
Muestra acceso denegado.
*/
function validarPassword() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña: ")
    //Condicion estructura if - else 
    if (pass == clave) {
        alert("Acceso Permitido...");
    } else {
        alert("Acceso Denegado");
    }
}


//Ejercicio tres
/*   
Pide un número por prompt().
Evalúa si el número es par o impar
y muestra el resultado con alert().
  */

function verificarParImpar() {
    let numero = parseInt(prompt("Ingresar Número"));
    if (numero % 2 == 0) {
        alert("Es par");
    } else {
        alert("Es impar");
    }
};

// Ejercicio cuatro
/*
Solicita la temperatura actual. Si es mayor o igual a 
30, muestra “Hace calor”, 
de lo contrario muestra “Clima agradable”.
*/

function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar Temperatura"));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace calor");
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable");
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace frio");
    } else {
        alert("Ingrese unvalor valido");
    }
}

//Ejercicio cinco
/*
Solicita dos números al usuario.
Compara ambos y muestra cuál 
es mayor o si son iguales
 */

function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar priemr número "));
    let num2 = parseInt(prompt("Ingresar segundo número "));
    if (num1 < num2) {
        alert(" El numero " + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert(" El numero " + num1 + " es igual que " + num2);
    }
    else {
        alert(" El numero " + num1 + " es mayor que " + num2);
    }
}
/*
Pide una nota entre 1 y 7.
Si es 4 o más, muestra “Aprobado”, 
si es menor, muestra “Reprobado”.
*/
function note() {
    let ingresa = parseInt(prompt("Ingresa tu nota: "))
    if (ingresa <= 4) {
        alert("Desaprovado");
    } else if (ingresa >= 4 && ingresa <= 7) {
        alert("Aprovado");
    } else {
        alert("por favor, ingresar valor valido");
    }
}
/*
Nombre de usuario válido
 Pide un nombre de usuario.
  Si el valor ingresado es "admin"
 , muestra “Bienvenido, administrador”.
  Si no, muestra “Usuario no reconocido”.*/

function usuarioAdmin() {
    let usu = prompt("Ingrese usuario")
    if (usu == "admin") {
    } else {
        alert("Usuario no reconocido");
    }
}

/*Verificar si una palabra empieza con "A"
 Pide una palabra al usuario
 . Verifica si empieza con la letra 
 “A” mayúscula y muestra un
  mensaje acorde.*/

function palabraMayuscula() {
    let letra = prompt("Ingresar palabra")
    let letraA = "A";
    if (letra[0] == letraA) {
        alert("la palabra comienza con a mayuscula");
    } else {
        alert(" la palabra no comienza con a mayuscula ");
    }
}
/*Precio con descuento
 Solicita el precio de un producto. 
 Si el precio es mayor a 10000, 
 muestra que aplica descuento. 
 Si no, indica precio normal.*/


function precioDescuento() {
    let precio = prompt("Ingresar precio");
    if (precio > 10000) {
        alert("Descuento");
    } else {
        alert("precio normal");
    }
}
/*Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia
 (por ejemplo, respondiendo "sí" o "no"). 
 Si tiene 18 o más y respondió que tiene 
 licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”.*/

function ingresarUsuario(){
    let = edad = parseInt(prompt("¿Cual estu edad?"));
    let = tienenLicencia = prompt("¿Tienes licencia de conducir?");
    if (edad >= 18 && tieneLicencia == "si") {
        alert("puede conducir");
    } else {
        alert("No puede conducir");
    }
}




































