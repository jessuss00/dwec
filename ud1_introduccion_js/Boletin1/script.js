
//Ejercicio 1
function saludar() {
    var edad = window.prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        console.log("Eres mayor de edad, teniendo " + edad + " años");
    } else {
        console.log("Eres menor de edad, teniendo " + edad + " años");
    }
}
//Ejercicio 2
function pintar_ruta() {
    console.log("El acceso a la ruta C:\\usuario\\ tarda 1,23 segundos, algo considerado \"lento\" en la actualidad.");
}

//Ejercicio 3
function pintar_ruta_V2() {
    var substring = "El acceso a la ruta C:\\usuario\\ tarda 1,23";
    var substring2 = " considerado \"lento\" en la actualidad.";
    console.log(substring + substring2);
}
//Ejercicio 4
function muestra_potencia() {
    var num = 2 * Math.pow(10, -9);
    console.log("El valor de 2 por 10^-9 es: " + num);
}
//Ejercicio 5
function muestra_n_distintas_bases(num) {
    var numDecimal = num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
    var numDecimal = num.toString(10);
    console.log("El número " + num + " en decimal es: " + numDecimal);
    var numHexadecimal = num.toString(16);
    console.log("El número " + num + " en hexadecimal es: " + numHexadecimal);
    var numOctal = num.toString(8);
    console.log("El número " + num + " en octal es: " + numOctal);
}
//Ejercicio 6
function divide_suma(num1) {
    var numeroDividido = num1 / 0;
    console.log("El número " + num1 + " dividido entre 0 es: " + numeroDividido);
    var sumaInfinito = numeroDividido + 23;
    console.log("La suma de " + numeroDividido + " más 23 es: " + sumaInfinito);
}
//Ejercicio 7
function Nam(num1) {
    var numeroDividido = num1 / 0;
    console.log("El número " + num1 + " dividido entre 0 es: " + numeroDividido);
}
//Ejercicio 8
function maxValue() {
    var maxValor = Number.MAX_VALUE;
    console.log("El valor máximo que puede tener un número en JavaScript es: " + maxValor);
    BigInt(maxValor);
    console.log("El valor máximo que puede tener un número en JavaScript como BigInt es: " + BigInt(maxValor));
}
//Ejercicio 10
function check_ambito_variables() {
    let prueba = 5;
    console.log("El valor de la variable prueba es: " + prueba);
    {
        let prueba2 = 10;
        console.log("Insisto, el valor de la variable prueba es: " + prueba);
        console.log("El valor de la variable prueba2 es: " + prueba2);
    }
    console.log("El valor de la variable prueba2 es: " + prueba2);
}

//Ejercicio 11
function definir_y_mostrar_array() {
    let array = ["Alberto", "Ana", "Antonio", "Beatriz", "Carmen"];
    /* for(let i=0; i<array.length; i++){
        console.log("El nombre en la posición " + i + " es: " + array[i]);
    } */
    console.table(array);
}
//Ejercicio 12
function contar_y_temorizar() {
    let valor = 0;
    let initTime = new Date();
    for (let i = 0; i <= 1000000000; i++) {
        valor += 10;
    }
    let endTime = new Date();
    console.log("Valor acumulado: " + valor);
    console.log("Tiempo transcurrido: " + (endTime - initTime) + " ms");
}
//Ejercicio 13
function error_ningun_valor() {
    console.log("No se ha encontrado ningún valor");
}
//Ejercicio 14
//function boton_eliminar(){

//Ejercicio 15 
function pedir_nombre_usuario() {
    let seguir = true;

    while (seguir) {
        let nombre = window.prompt("Por favor, introduce tu nombre de usuario:");
        console.log("El nombre de usuario es: " + nombre);
        seguir = window.confirm("¿Desea continuar el programa?");
        console.log("Has decidido: " + seguir);
    }
    console.log("Fin del programa");
}
//Ejercicio 16
function comprobaciones() {



    let nombre = prompt("Por favor, introduce tu nombre de usuario:");
    let edad = prompt("Por favor, introduce tu edad:");
    let tlf = prompt("Por favor, introduce tu número de teléfono:");
    let direccion = prompt("Por favor, introduce tu dirección:");
    let ciudad = prompt("Por favor, introduce tu ciudad:");

    if (edad ** 5 == tlf || ciudad.toUpperCase() === "Mairena del alcor".toUpperCase()) {
        console.log("Enorabuena");
    }
}
//Ejercicio 17
function contar_cifras() {
    let numero = Math.abs(Number(prompt("Por favor, introduce un número:")));
    let contador = 0;
    for (let i = numero; i >= 1; i = i / 10) {
        contador++;
    }
    console.log("El número " + numero + " tiene " + contador + " cifras.");
}

//Ejercicio 18
function clasificar_edad() {
    let edad = document.getElementById("edad").value;
    switch (true) {
        case (edad >= 0 && edad <= 16):
            pintar_mensaje("Eres un niño.", true);
            break;
        case (edad >= 17 && edad <= 25):
            pintar_mensaje("Eres un joven.", true);
            break;
        case (edad >= 26 && edad <= 60):
            pintar_mensaje("Eres un adulto.", true);
            break;
        case (edad >= 65):
            pintar_mensaje("Eres un senior.", true);
        default:
            pintar_mensaje("Edad no válida.", false);
            break;
    }
}
function pintar_mensaje(mensaje, isOk) {
    let aviso = document.getElementById("aviso");
    aviso.textContent = mensaje;
    if (isOk) {
        aviso.style.color = "green";
    } else {
        aviso.style.color = "red";
    }
}
//Ejercicio 19
function numero_aleatorio() {
    let numero = Math.trunc(Math.random() * 10) + 1;
    let intentos = 0;
    let acertado = false;

    while (!acertado) {
        let respuesta = Number(prompt("Adivina el número (entre 1 y 10):"));
        intentos++;
        if (respuesta === numero) {
            acertado = true;
            console.log("¡Correcto! El número era " + numero);
        } else {
            console.log("Incorrecto. Intenta de nuevo.");
        }
    }
    console.log("Número de intentos: " + intentos);
}
function numero_aleatorio2() {
    let numero = Math.trunc(Math.random() * 10) + 1;
    let contador = 0;
    alert("Se ha calculado un número aleatorio entre 1 y 10. Intenta adivinarlo.");
    do {
        contador++;
        var intento = Number(prompt("Intento:" + contador));
    }while (intento !== numero);
    console.log("¡Correcto! El número era " + numero + ". Lo has conseguido en " + contador + " intentos.");

}
//Ejercicio 20
function imprimir_multiplo(){
    let n = Number(prompt("Introduce un número:"));
    let multiplos = 0 ;
    const max =100;
    for(let i = n+1; i <= max; i++){
        if(i % n === 0){
            multiplos++;
            console.log( "multiplos " + i);
        }
    }
    console.log("El número de múltiplos de " + n + " entre 1 y " + max + " es: " + multiplos);
}