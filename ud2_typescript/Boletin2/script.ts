window.onload = () => {
    cuadricula();
    ej1_cookie();
}

function $inputValuee(id: string): string {
    const input = document.getElementById(id) as HTMLInputElement; //Lectura
    let result = "";

    if (input) {
        result = input.value; //Recojo el valor (aqui es donde leo)
    }

    return result;
}

function cambiar_titulo() {
    let titulo = prompt("Introduce un nuevo titulo") as string;
    console.log(titulo);
    let nodoTitulo: HTMLHeadElement = document.getElementById("titulo") as HTMLHeadElement;
    nodoTitulo.textContent = titulo;
}
function cambiar_modo() {
    let body: HTMLBodyElement = document.body as HTMLBodyElement;

    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }


}
function analiza_edad() {

    //Recojo el valor numerico desde el input con la edad del usuario
    let input: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let edad: number = Number(input.value);
    console.log(edad);

    //Creo el nodo <ol> raíz que contendra los elementos de la lista y modifico su estilo
    let lista: HTMLOListElement = document.getElementById("resultado") as HTMLOListElement;
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";

    //a. Compruebo si es mayor o menor de edad
    let mayorMenor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";

    //b. Compruebo si la edad es o no par
    let parImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    parImpar.textContent = edad % 2 == 0 ? "La edad es par" : "La edad es impar";

    //c. Calcular divisores de la edad
    let divisores: string = "";

    for (let i = 1; i <= edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }

    divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)

    let listaDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    listaDivisores.textContent = divisores;

    //d. Clasifica edad
    let rangoEdad = "";
    switch (true) {
        case edad >= 0 && edad < 15:
            rangoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            rangoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            rangoEdad = "Adulto";
            break;
        case edad >= 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
    }

    let edadTexto: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    edadTexto.textContent = rangoEdad;

    //Añado cada elemento, a, b, c....
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}

function pedir_nombre() {
    const anterior = document.getElementById("nombre-mostrado");
    if (anterior) anterior.textContent = "";
    let nombre = prompt("Introduce tu nombre") as string;
    let nombreNuevo: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
    nombreNuevo.id = "nombre-mostrado";
    nombreNuevo.textContent = "Hola " + nombre;
    document.body.appendChild(nombreNuevo);
    console.log(nombreNuevo)

    let select: HTMLSelectElement = document.getElementById("colores") as HTMLSelectElement;

    select.addEventListener("change", () => {
        nombreNuevo.style.color = select.value;
    })

}

function ver_menu() {
    let idioma = navigator.language;
    console.log("Idioma", idioma)
    let nombre = navigator.userAgent;
    console.log("Nombre", nombre)
    if (navigator.cookieEnabled) {
        console.log("tiene cookies");
    } else {
        console.log("no tiene cookies")
    }
    let largo = document.documentElement.clientWidth;
    let alto = document.documentElement.clientHeight;
    console.log(largo + "x" + alto);
}

function ir_url() {
    const url = $inputValuee("url");
    const regExp = /^https:\/\//;

    if (regExp.test(url)) {
        window.location.href = url;
    } else {
        alert("Por favor, introduzca una URL válida que empiece por https://");
    }
}

function jugar_lista(): void {
    let seleccion = Number(
        prompt(
            "Seleccione una opción:\n" +
            "1. Cuente el número de nodos o elementos\n" +
            "2. Obtén el texto del primer y último elemento\n" +
            "3. Duplica (colocando al final) un elemento dado según su número\n" +
            "4. Modifica el valor de un elemento de la lista dado según su número\n" +
            "5. Muestra todos los elementos\n" +
            "6. Añade un nuevo nodo\n" +
            "7. Elimina el nodo indicado por el número que ocupa según su posición\n" +
            "8. Ordena todos los nodos alfabéticamente"
        )
    );
    let lista: HTMLOListElement = document.getElementById("listado") as HTMLOListElement;
    let item = lista.children;

    switch (seleccion) {
        case 1:
            console.log(item.length);

            break;
        case 2:
            console.log(item[0].textContent);
            console.log(item[item.length - 1].textContent);

            break;
        case 3:
            let numLI = Number(
                prompt(
                    "Que numero clonamos"
                )
            );
            let nuevoSobri: HTMLLIElement = document.createElement("li") as HTMLLIElement;
            nuevoSobri.textContent = item[numLI - 1].textContent;
            lista.appendChild(nuevoSobri);


            break;
        case 4:
            numLI = Number(
                prompt(
                    "Que numero cambiamos"
                )
            );
            let newText = prompt("Dame la nueva frase") as string;
            item[numLI - 1].textContent = newText;


            break;
        case 5:
            for (let index = 0; index < item.length; index++) {
                console.log("nodo" + index + "=" + item[index].textContent)
            }

            break;
        case 6:
            let content = prompt("Frase nueva") as string;

            let nuevoSobrino: HTMLLIElement = document.createElement("li") as HTMLLIElement;
            nuevoSobrino.textContent = content;
            lista.appendChild(nuevoSobrino);

            break;
        case 7:
            numLI = Number(
                prompt(
                    "Que numero eliminamos"
                )
            );
            lista.removeChild(item[numLI - 1]);

            break;
        case 8:

            break;

        default:
            break;
    }

}

function cuadricula() {
    let divs: HTMLDivElement = document.getElementById("contenedor") as HTMLDivElement;
    let notas: string[] = ["Javier", "Limpio","Alvaro","Fran","Elite","Franfli","Xexu"];
    for (let index = 0; index < notas.length; index++) {
        
        divs.appendChild(crea_ficha(notas[index]));
    } 
}

function crea_ficha(alumno: string): HTMLDivElement {
    let ficha: HTMLDivElement = document.createElement("div") as HTMLDivElement ;
    ficha.textContent = alumno;
    ficha.style.background
    return ficha;
}

function crear_nuevoAlum():void{
    let nombre: string = prompt("Introduce el nombre del nuevo alumno") as string;
    let divs: HTMLDivElement = document.getElementById("contenedor") as HTMLDivElement;

}

function ej1_cookie(){
    let cookie: string = "lang=ES;";
    let cookier: string = "mon=€;";
    document.cookie =cookie;
    document.cookie =cookier; 
}

