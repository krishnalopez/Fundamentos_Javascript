//ejemplo
function usarString() {
    let nombre = prompt("Krishna");  // Variable tipo texto
// U so de length --> Largo fr una variable
    let primeraLetra = nombre[0]; // Asignamos valor a primera letra con posición cero de nombre

    let ultimaLetra = nombre[nombre.length - 1];

    alert("Primera letra es:" + primeraLetra +
   "\nÚltima letra es:" + ultimaLetra
);  //Mostrar resultado
}

//Tarea: imprimir segunda letra 
//penultima letra del apellido



function manipularApellido(){
    let apellido = prompt("Hernández");
    //segumda letra del apellido
    let segundaLetraApellido = apellido[1]
    //Penúltima letra del apellido
    let penultimaLetradelApellido = apellido[apellido.length - 2]
 
  alert("Segunda letra del apellido  es:" + segundaletradelapellido +
   "\nPenúltima letra del apellido es" + penultimaLetradelApellido
);  //Mostrar resultado
}
