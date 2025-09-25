let colores = ["#FFD1DC", "#FFE5B4", "#FFFACD", "#BFD8B8", "#AEC6CF", "#CBAACB", "#E3E4FA", "#AAF0D1", "#FF7F50", "#FFD8B1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function() {
    for(let i = 0; i < ejercicios.length; i++){
        let colorAleatorio = Math.random() * colores.length;
        console.log(colorAleatorio);
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
}

function calcular_Fibonacci(){
    let numero = Number(prompt("Introduce un número:"));
    console.log("El valor fib(" + numero + ") es: " + fibonacci(numero));
}
function fibonacci(n){
    if(n === 0){
        return 0;
    } else if(n === 1){
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function calcular_factorial(isRec){
    let numero = Number(prompt("Introduce un número:"));
    let resultado;
    if(isRec){
        resultado = factorial_recursiva(numero);
    } else {
        resultado = calcular_tradicional(numero);
    }
    console.log("El valor " + numero + "! es: " + resultado);
}
function factorial_recursiva(n){
    if(n === 0){
        return 1;
    } else {
        return n * factorial_recursiva(n-1);
    }
}
function calcular_tradicional(numero){
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *= i;
    }
    console.log("El valor " + numero + "! es: " + factorial);
}