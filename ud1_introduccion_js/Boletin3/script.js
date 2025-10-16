let colores = ["#FFD1DC", "#FFE5B4", "#FFFACD", "#BFD8B8", "#AEC6CF", "#CBAACB", "#E3E4FA", "#AAF0D1", "#FF7F50", "#FFD8B1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function () {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.random() * colores.length;
        console.log(colorAleatorio);
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
}
//Ejercicio 1
function contar_cifras() {
    let numero = Number(prompt("Introduce un número entero:"));
    let contador = 0;
    while (numero >= 1) {
        numero = (numero / 10);
        contador++;
    }


    alert("El número tiene " + contador + " cifras.");

}

//Ejercicio 2
function pintar_triangulo() {
    let altura = Number(prompt("Introduce la altura del triángulo:"));
    let resultado = "";
    for (let i = 1; i <= altura; i++) {
        resultado += " ".repeat(altura - i);
        resultado += "* ".repeat(i);
        resultado += "\n";
    }
    console.log(resultado);
    }

//Ejercicio 3
let numeros = [];

function mostrar_menu() {
    let opcion;
    do {
        opcion = prompt(
            "Selecciona una opción:\n" +
            "a. Introducir nuevo número\n" +
            "b. Calcular máximo\n" +
            "c. Calcular mínimo\n" +
            "d. Calcular media\n" +
            "e. Salir"
        );

        switch (opcion) {
            case "a":
                introducir_numero();
                break;
            case "b":
                calcular_maximo();
                break;
            case "c":
                calcular_minimo();
                break;
            case "d":
                calcular_media();
                break;
            case "e":
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== "e");
}

function introducir_numero() {
    let numero = Number(prompt("Introduce un número:"));
        numeros.push(numero); 
        console.log("Número " + numero + " añadido.");
   
}

function calcular_maximo() {
    let maximo = 0;
    if (numeros.length === 0) {
        alert("No hay números introducidos.");
        return;
    }
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    alert("El número máximo es: " + maximo);
}

function calcular_minimo() {
   let minimo = 0;
    if (numeros.length === 0) {
        alert("No hay números introducidos.");
        return;
    }
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }
    alert("El número mínimo es: " + minimo);
}

function calcular_media() {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let media = suma / numeros.length;
    alert("La media es: " + media);
}
