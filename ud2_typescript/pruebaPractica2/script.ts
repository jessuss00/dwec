window.onload = () => {
    cargarDatos();
}
function realizar_accion() {
    let respuesta: HTMLInputElement = $inputById2("opt")
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
            guardarCookies()
            break;

        default:
            break;
    }
}

function nombreReves(): void {
    let nombre: HTMLInputElement = $inputById2("nombre");
    let anio: HTMLInputElement = $inputById2("fechaNac");
    let parrafo: HTMLParagraphElement = document.getElementById("parrafo") as HTMLParagraphElement;
    let nombreAlreves: string = "";
    for (let i: number = nombre.value.length - 1; i >= 0; i--) {
        nombreAlreves += nombre.value[i];
    }
    parrafo.textContent = nombreAlreves.toUpperCase() + anio.valueAsDate?.getFullYear();
}
function irRedSocial(): void {
    let url: HTMLInputElement = $inputById2("url");
    let inputApellido: HTMLInputElement = $inputById2("apellido");
    let regExp: RegExp = new RegExp("^https:\/\/");
    if(regExp.test(url.value)){
        let apellido: string = inputApellido.value.split(" ")[0];
        let direccion: string = url.value + "/search?q="+ apellido;
        window.location.href=direccion;
    }else{
        mensajeError();
    }
}
function calculaEdad(): void{
    let anioActual: Date = new Date;
    let parrafo: HTMLParagraphElement = document.getElementById("parrafo") as HTMLParagraphElement;
    let anioNacimiento: HTMLInputElement = $inputById2("fechaNac");
    let fechaNac: Date = anioNacimiento.valueAsDate as Date;
    parrafo.textContent = "Tienes" + (anioActual.getFullYear()-fechaNac.getFullYear()) + "años";
}
function guardarCookies(): void {
    document.cookie = "nombre="+$inputById2("nombre").value;
    document.cookie = "apellido="+$inputById2("apellido").value;
    document.cookie = "edad="+$inputById2("edad").value;
    document.cookie = "tlf="+$inputById2("tlf").value;
    document.cookie = "fechaNac="+$inputById2("nombre").value;
    document.cookie = "url="+$inputById2("url").value;
}

function cargarDatos(): void{
    $inputById2("nombre").placeholder = $getCookieByKey2("nombre");
    $inputById2("apellido").placeholder = $getCookieByKey2("apellido");
    $inputById2("edad").placeholder = $getCookieByKey2("edad");
    $inputById2("tlf").placeholder = $getCookieByKey2("tlf");
    $inputById2("fechaNac").placeholder = $getCookieByKey2("fechaNac");
    $inputById2("url").placeholder = $getCookieByKey2("url");

}
//hELPES
function $inputById2(id: string): HTMLInputElement {
    return document.getElementById(id) as HTMLInputElement;
}
function mensajeError(): void{
    const result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
    result.textContent = "";
    let errorParagraph: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    errorParagraph.textContent = "Debe incluir la cabecera https";
    errorParagraph.style.color = "red";
    errorParagraph.style.fontWeight = "bold";
    result.appendChild(errorParagraph);
}
function $getCookieByKey2(key: string): string{
    let arrayCookie = document.cookie.split(";");
    let result = "";
    for(let i = 0; i < arrayCookie.length; i++){
        let clave = arrayCookie[i].split("=")[0];
        let valor = arrayCookie[i].split("=")[1];
        if(clave.trim() == key){
            result = valor;
        }
    }

    return result;
}
function actualizarWeb(): void{
    window.location.reload();
}