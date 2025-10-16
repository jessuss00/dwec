//Ejercicio 1
function ej1() {
    var hora = new Date();
    console.log("Hoy es: " + hora.getDate() + "/" + (hora.getMonth() + 1) + "/" + hora.getFullYear() + " y son las " + hora.getHours() + ":" + hora.getMinutes());
    console.log("Hora posterior: " + (hora.getHours() + 1) + ":" + hora.getMinutes());
    console.log("Hora anterior: " + (hora.getHours() - 1) + ":" + hora.getMinutes() + " hola");
}
//ejercicio 2
function ej2() {
    console.log("Validando formulario...");
    var exReg = new RegExp("lo_que_sea");
    if (document.getElementById("email") != null) {
        var mensajOk = document.createElement("span");
        var email = document.getElementById("email");
        if (email && exReg.test(email.value)) {
            mensajOk.textContent = "Email correcto";
        }
        else {
            mensajOk.textContent = "Email incorrecto";
        }
    }
}
