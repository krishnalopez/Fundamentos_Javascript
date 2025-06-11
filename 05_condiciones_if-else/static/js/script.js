//ejercicos codiciones if-Else

console.log("conexión con js establecida...")

/*n 1 Edad para votar
 Solicita la edad del usuario mediante prompt(). Muestra con alert() si puede votar (18 años o más) o no. */

function edadVotar() {
    let edad = parseInt(prompt("Ingrese su edad.")); //ingreso o input tipo conversion string a numero
    //Condición if - else if  - else--IF es si - ELSE IF es si no- ELSE es 
    //solo el else no tine()

    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.");
    } else if (edad >= 0 && edad < 18) { //&& compuerta AND
        alert("Su edad" + edad + "no esta aprobada para votar.");
    } else {
        alert("Ingrese un valor válido");
    }
};


/*  2 Contraseña válida
 Pide una contraseña con prompt(). Si es igual a "1234", muestra un mensaje de acceso permitido. En caso contrario, 
 muestra acceso denegado.
 */

function contraseñaValida() {
    let clave = "1234";
    let contraseña = prompt("Ingresar contraseña");
    //Condición estructura if - else
    if (contraseña == clave) {
        alert("Acceso permitido...")
    } else {
        alert("Acceso denegado")
    }
}



/*  3 Verificar par o impar
 Pide un número por prompt(). Evalúa si el número es par o impar 
 y muestra el resultado con alert().
*/

function parImpar() {
    let numero = prseInt(prompt("Ingrasar Numero"));
    if (numero % 2 == 0) {//numero / 2 = resto
        alert("Es par");
    } else {
        alert("Es impar")
    }

};

/* 4 Temperatura ambiental
 Solicita la temperatura actual. Si es mayor o igual a 30, muestra “Hace calor”, de lo contrario muestra “Clima agradable”.
 */
function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Imgresar temperatura"));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace calor");
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable")
    }
    else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace frío")
    } else {
        alert("Ingresar un  valor válido")
    }
};


/* 5 Comparar dos números
 Solicita dos números al usuario. 
 Compara ambos y muestra cuál es mayor o si son iguales.
 */

function comparaNumeros() {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    if (num1 < num2) {
        alert("el numero" + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert("el numero " + num1 + " es igual que " + num2);
    }
    else {
        alert("elnumero" + num1 + "es mayor que " + num2);
    }



}

/* 6 Calificación escolar
 Pide una nota entre 1 y 7. Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”.*/




/* 7 Nombre de usuario válido
Pide un nombre de usuario. Si el valor ingresado es "admin", muestra “Bienvenido,
 administrador”. Si no, muestra “Usuario no reconocido”.*/

function usuarioAdmin() {
    let usu = prompt("Ingrese usuario")
    if (usu == "admin") {
        alert("Bienvenido, A dministrador")
    } else {
        alert("Usuario no reconocido")
    }
}



/* 8 Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.*/





 /* 8 Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.*/






























