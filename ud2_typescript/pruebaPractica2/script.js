window.onload = function () {
    cargarDatos();
};
function realizar_accion() {
    var respuesta = $inputById2("opt");
    switch (respuesta.value) {
        case "1":
            nombreReves();
            break;
        case "2":
            irRedSocial();
            break;
        case "3":
            calculaEdad();
            break;
        case "4":
            guardarCookies();
            break;
        default:
            break;
    }
}
function nombreReves() {
    var _a;
    var nombre = $inputById2("nombre");
    var anio = $inputById2("fechaNac");
    var parrafo = document.getElementById("parrafo");
    var nombreAlreves = "";
    for (var i = nombre.value.length - 1; i >= 0; i--) {
        nombreAlreves += nombre.value[i];
    }
    parrafo.textContent = nombreAlreves.toUpperCase() + ((_a = anio.valueAsDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
}
function irRedSocial() {
    var url = $inputById2("url");
    var inputApellido = $inputById2("apellido");
    var regExp = new RegExp("^https:\/\/");
    if (regExp.test(url.value)) {
        var apellido = inputApellido.value.split(" ")[0];
        var direccion = url.value + "/search?q=" + apellido;
        window.location.href = direccion;
    }
    else {
        mensajeError();
    }
}
function calculaEdad() {
    var anioActual = new Date;
    var parrafo = document.getElementById("parrafo");
    var anioNacimiento = $inputById2("fechaNac");
    var fechaNac = anioNacimiento.valueAsDate;
    parrafo.textContent = "Tienes" + (anioActual.getFullYear() - fechaNac.getFullYear()) + "años";
}
function guardarCookies() {
    document.cookie = "nombre=" + $inputById2("nombre").value;
    document.cookie = "apellido=" + $inputById2("apellido").value;
    document.cookie = "edad=" + $inputById2("edad").value;
    document.cookie = "tlf=" + $inputById2("tlf").value;
    document.cookie = "fechaNac=" + $inputById2("nombre").value;
    document.cookie = "url=" + $inputById2("url").value;
}
function cargarDatos() {
    $inputById2("nombre").placeholder = $getCookieByKey2("nombre");
    $inputById2("apellido").placeholder = $getCookieByKey2("apellido");
    $inputById2("edad").placeholder = $getCookieByKey2("edad");
    $inputById2("tlf").placeholder = $getCookieByKey2("tlf");
    $inputById2("fechaNac").placeholder = $getCookieByKey2("fechaNac");
    $inputById2("url").placeholder = $getCookieByKey2("url");
}
//hELPES
function $inputById2(id) {
    return document.getElementById(id);
}
function mensajeError() {
    var result = document.getElementById("result");
    result.textContent = "";
    var errorParagraph = document.createElement("p");
    errorParagraph.textContent = "Debe incluir la cabecera https";
    errorParagraph.style.color = "red";
    errorParagraph.style.fontWeight = "bold";
    result.appendChild(errorParagraph);
}
function $getCookieByKey2(key) {
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
function actualizarWeb() {
    window.location.reload();
}
//helpers
function $inputById3(id) {
    return document.getElementById(id);
}
function $getCookieByKey(key) {
    var arrayCokie = document.cookie.split(";");
    var result = "";
    for (var index = 0; index < arrayCokie.length; index++) {
        var clave = arrayCokie[index].split("=")[0];
        var valor = arrayCokie[index].split("=")[1];
        if (clave.trim() == key) {
            result = valor;
        }
    }
    return result;
}
