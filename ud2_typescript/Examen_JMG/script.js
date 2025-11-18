var contador = 0;
window.onload = function () {
    var h1 = document.getElementById("nombre");
    var valorNombre = $getCookieByKey3("Nombre");
    contador++;
    if (valorNombre == "") {
        pedirNombre();
    }
    else {
        h1.textContent = monstrarNombre(valorNombre);
    }
};
function pedirNombre() {
    var h1 = document.getElementById("nombre");
    var nombre = prompt("Introduzca el nombre");
    var cookieNombre = "Nombre=" + nombre;
    document.cookie = cookieNombre;
    h1.textContent = monstrarNombre(nombre);
}
function monstrarNombre(nombre) {
    return "Bienvenidol dashboard de " + nombre + " Has visitado el sitio" + contador;
}
function crear_tarjeta() {
    var id = document.getElementById("id");
    var descripcion = document.getElementById("descripcion");
    var seleccion = document.getElementById("tipo");
    var tarjeta = document.createElement("div");
    var tarjetero = document.getElementById("tarjetas");
    var fecha = new Date;
    tarjeta.textContent = "ID: " + id.value + "\n DESCRIPCION: " + descripcion.value + "\n TIPO: " + seleccion.value + "fecha" + fecha;
    if (seleccion.value == "incidencia") {
        tarjeta.style.backgroundColor = "red";
    }
    if (seleccion.value == "evento") {
        tarjeta.style.backgroundColor = "green";
    }
    if (seleccion.value == "tarea") {
        tarjeta.style.backgroundColor = "blue";
    }
    tarjetero.appendChild(tarjeta);
}
function borrar_tarjetas() {
    var tarjetero = document.getElementById("tarjetas");
    tarjetero.textContent = "";
}
//helpers
function $getCookieByKey3(key) {
    var arrayCookie = document.cookie.split(";");
    var result = "";
    for (var i = 0; i < arrayCookie.length; i++) {
        var clave = arrayCookie[i].split("=")[0];
        var valor = arrayCookie[i].split("=")[1];
        if (clave.trim() == key) {
            result = valor;
        }
    }
    return result;
}
