
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
function muestra_potencia(){
    var num= 2* Math.pow(10,-9);
    console.log("El valor de 2 por 10^-9 es: " + num);
}