function pintar_ruta() {
    console.log("El acceso a la ruta C:\\usuario\\ tarda 1,23 segundos, algo considerado \"lento\" en la actualidad.");
}

function saludar() {
    var edad = window.prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        console.log("Eres mayor de edad, teniendo " + edad + " años");
    } else {
        console.log("Eres menor de edad, teniendo " + edad + " años");
    }
}

function pintar_ruta_V2() {
    var substring = "El acceso a la ruta C:\\usuario\\ tarda 1,23";
    var substring2 = " considerado \"lento\" en la actualidad.";
    console.log(substring + substring2);
}