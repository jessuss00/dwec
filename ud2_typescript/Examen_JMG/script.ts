let contador: number = 0;
window.onload = () => {
    let h1: HTMLBodyElement = document.getElementById("nombre") as HTMLBodyElement;
    let valorNombre: string = $getCookieByKey3("Nombre");
    contador++;
    if (valorNombre == "") {
        pedirNombre();
    } else {
    h1.textContent = monstrarNombre(valorNombre);
    }

}

function pedirNombre(): void {
    let h1: HTMLBodyElement = document.getElementById("nombre") as HTMLBodyElement;
    let nombre: string = prompt("Introduzca el nombre") as string;
    let cookieNombre: string = "Nombre=" + nombre;
    document.cookie = cookieNombre;
    h1.textContent = monstrarNombre(nombre);
}
function monstrarNombre(nombre: string): string {
    return "Bienvenidol dashboard de " + nombre + " Has visitado el sitio" + contador;
}
function crear_tarjeta(): void {

    let id: HTMLInputElement = document.getElementById("id") as HTMLInputElement;
    let descripcion: HTMLInputElement = document.getElementById("descripcion") as HTMLInputElement;
    let seleccion: HTMLInputElement = document.getElementById("tipo") as HTMLInputElement;
    let tarjeta: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let tarjetero: HTMLDivElement = document.getElementById("tarjetas") as HTMLDivElement;
    let fecha: Date = new Date;
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

function borrar_tarjetas(): void {
    let tarjetero: HTMLDivElement = document.getElementById("tarjetas") as HTMLDivElement;
    tarjetero.textContent = ""
}

//helpers
function $getCookieByKey3(key: string): string {
    let arrayCookie = document.cookie.split(";");
    let result = "";
    for (let i = 0; i < arrayCookie.length; i++) {
        let clave = arrayCookie[i].split("=")[0];
        let valor = arrayCookie[i].split("=")[1];
        if (clave.trim() == key) {
            result = valor;
        }
    }

    return result;
}