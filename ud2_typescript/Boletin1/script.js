//Ejercicio 1
function ej1() {
    var hora = new Date();
    console.log("Hoy es: " + hora.getDate() + "/" + (hora.getMonth() + 1) + "/" + hora.getFullYear() + " y son las " + hora.getHours() + ":" + hora.getMinutes());
    console.log("Hora posterior: " + (hora.getHours() + 1) + ":" + hora.getMinutes());
    console.log("Hora anterior: " + (hora.getHours() - 1) + ":" + hora.getMinutes() + " hola");
}
//ejercicio 2
function ej2() {
    var regExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$"); //Con fallos (hay que corregir)
    //Aplico la validacion de la expresion regular
    if (regExp.test($inputValue("email"))) {
        //Si test devuelve true quiere decir que el texto "email" cumple la expresion reg.
        $writeNode("ok", "El email es valido"); //Aquí escribo
        $writeNode("error", ""); //Aquí escribo tambien (lo que pasa que borra)
    }
    else {
        //Si es false quiere decir que el texto "email" no cumple la expresion regular.
        $writeNode("ok", ""); //Aquí escribo (borrando el contenido)
        $writeNode("error", "El email no cumple la expresion"); //Aqui tambien escribo
    }
}
//Helpers
function $inputValue(id) {
    var input = document.getElementById(id); //Lectura
    var result = "";
    if (input) {
        result = input.value; //Recojo el valor (aqui es donde leo)
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
function suma(a, b) {
    return a + b;
}
var suma2 = function (a, b) { return a + b; };
//Ejercicio 3
function ej3() {
    var ventanaNueva = window.open("https://www.google.com");
    //ventanaNueva?.document.write("Hola");
}
//Ejercicio 4
function ej4() {
    var regExp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regExp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Por favor introduzca una URL valida");
        //Ej5
        setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
