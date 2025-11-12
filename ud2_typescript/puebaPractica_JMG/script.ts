function realizar_accion() {
    let seleccion: HTMLSelectElement = document.getElementById("opt") as HTMLSelectElement;
    let parrafo: HTMLParagraphElement = document.getElementById("parrafo") as HTMLParagraphElement;
    let nombre: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let apellido: HTMLInputElement = document.getElementById("apellido") as HTMLInputElement;
    let edad: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let tlf: HTMLInputElement = document.getElementById("tlf") as HTMLInputElement;
    let url: HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let anio: HTMLInputElement = document.getElementById("fechaNac") as HTMLInputElement;
    let ano = anio.valueAsDate?.getFullYear();
    switch (seleccion.value) {
        case "1":

            console.log(nombre.value);
            let nombreLi = nombre.value.toUpperCase();
            let array: string[] = nombreLi.split("") as string[];
            console.log(nombreLi);
            let nombreNuevo: string = "";
            for (let index = 1; index <= nombreLi.length; index++) {
                nombreNuevo += array[nombreLi.length - index];
                console.log(nombreNuevo);
            }

            nombreNuevo += ano;
            parrafo.textContent = nombreNuevo;


            break;
        case "2":

            break;
        case "3":
            let hoy: Date = new Date;
            let miAno = Number(anio.valueAsDate?.getFullYear());
            let edad = hoy.getFullYear() - miAno;

            parrafo.textContent = "Tienes " + edad + " Años";

            break;
        case "4":
            let cookieNombre: string = "nombre=";
            cookieNombre += nombre.value;
            
            let cookieApellido: string = "Apellido=";
            cookieApellido += apellido.value;
            
            let cookieEdad: string = "edad=";
                
            
            let cookieTelefono: string = "tlf=";
            cookieTelefono += tlf.value;
            
            let cookiefecha: string = "fechaNac=";
            cookiefecha += anio.value;
            
            let cookieurl: string = "url=";
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