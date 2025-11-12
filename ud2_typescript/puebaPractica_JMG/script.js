function realizar_accion() {
    var _a, _b;
    var seleccion = document.getElementById("opt");
    var parrafo = document.getElementById("parrafo");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var edad = document.getElementById("edad");
    var tlf = document.getElementById("tlf");
    var url = document.getElementById("url");
    var anio = document.getElementById("fechaNac");
    var ano = (_a = anio.valueAsDate) === null || _a === void 0 ? void 0 : _a.getFullYear();
    switch (seleccion.value) {
        case "1":
            console.log(nombre.value);
            var nombreLi = nombre.value.toUpperCase();
            var array = nombreLi.split("");
            console.log(nombreLi);
            var nombreNuevo = "";
            for (var index = 1; index <= nombreLi.length; index++) {
                nombreNuevo += array[nombreLi.length - index];
                console.log(nombreNuevo);
            }
            nombreNuevo += ano;
            parrafo.textContent = nombreNuevo;
            break;
        case "2":
            break;
        case "3":
            var hoy = new Date;
            var miAno = Number((_b = anio.valueAsDate) === null || _b === void 0 ? void 0 : _b.getFullYear());
            var edad_1 = hoy.getFullYear() - miAno;
            parrafo.textContent = "Tienes " + edad_1 + " Años";
            break;
        case "4":
            var cookieNombre = "nombre=";
            cookieNombre += nombre.value;
            var cookieApellido = "Apellido=";
            cookieApellido += apellido.value;
            var cookieEdad = "edad=";
            var cookieTelefono = "tlf=";
            cookieTelefono += tlf.value;
            var cookiefecha = "fechaNac=";
            cookiefecha += anio.value;
            var cookieurl = "url=";
            cookieurl += url.value;
            document.cookie = cookieApellido;
            document.cookie = cookieTelefono;
            document.cookie = cookiefecha;
            document.cookie = cookieurl;
            document.cookie =
                document.cookie = cookieNombre;
            break;
        default:
            break;
    }
}
