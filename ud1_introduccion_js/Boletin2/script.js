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

function calcular_Fibonacci() {
    let numero = Number(prompt("Introduce un número:"));
    console.log("El valor fib(" + numero + ") es: " + fibonacci(numero));
}
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function calcular_factorial(isRec) {
    let numero = Number(prompt("Introduce un número:"));
    let resultado;
    if (isRec) {
        resultado = factorial_recursiva(numero);
    } else {
        resultado = calcular_tradicional(numero);
    }
    console.log("El valor " + numero + "! es: " + resultado);
}
function factorial_recursiva(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial_recursiva(n - 1);
    }
}
function calcular_tradicional(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

function transformar_dias_horas() {
    let dias = Number(prompt("Introduce una cantidad de dias:"));
    let horas = dias * 24;
    let minutos = horas * 60;
    let segundos = horas * 3600;
    console.log(dias + " dias son " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos.");
}

function resolver_ecuacion() {
    let a = Number(prompt("Introduce el valor de a:"));
    let b = Number(prompt("Introduce el valor de b:"));
    let c = Number(prompt("Introduce el valor de c:"));
    let result1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    let result2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    console.log("La solucion de " + a + "x**2 + " + b + "x + " + c + " = 0 es: (" + result1 + ", " + result2 + ")");
}

function menu_opciones() {
    let opcion;
    do {
        opcion = Number(prompt("Selecciona una opción:\n1. Calcular el área de un rectángulo\n2. Calcular el área de un círculo\n3. Calcular el área de un triángulo\n4. Salir"));
        switch (opcion) {
            case 1:
                let base = Number(prompt("Introduce la base del rectángulo:"));
                let altura = Number(prompt("Introduce la altura del rectángulo:"));
                calcular_area_rectangulo(base, altura);
                break;
            case 2:
                let radio = Number(prompt("Introduce el radio del círculo:"));
                calcular_area_circulo(radio);
                break;
            case 3:
                let baseT = Number(prompt("Introduce la base del triángulo:"));
                let alturaT = Number(prompt("Introduce la altura del triángulo:"));
                calcular_area_triangulo(baseT, alturaT);
                break;
            case 4:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida");
        }
    } while (opcion !== 4);
}
function calcular_area_rectangulo(base, altura) {
    let area = base * altura;
    console.log("El área del rectángulo es: " + area);
}

function calcular_area_circulo(radio) {
    let area = Math.PI * radio ** 2;
    console.log("El área del círculo es: " + area);
}

function calcular_area_triangulo(base, altura) {
    let area = (base * altura) / 2;
    console.log("El área del triángulo es: " + area);
}

function calcular_letra_dni() {
    let numero_dni = Number(prompt("Introduce numero DNI"));
    let letrasDNI = [
        "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
        "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
    ];
    console.log("Tu letra es:" + letrasDNI[numero_dni%23])
}