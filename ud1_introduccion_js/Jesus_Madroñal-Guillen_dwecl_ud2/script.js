const max_extras = 3;
const lados = 6;
let tiradas = 0;
let puntos_totales = 0;
let max_valor = null;
let min_valor = null;


function tirarDados(nombre) {
    tiradas++;
    let dado1 = Math.floor(Math.random() * lados) + 1;
    let dado2 = Math.floor(Math.random() * lados) + 1;
    let resultado = dado1 + dado2;

    puntos_totales += resultado;
    console.log("Dado 1 = " + dado1 + "\nDado 2 = " + dado2 + "\nEl jugador " + nombre + " ha obtenido " + resultado + " en esta tirada");

    let extras = 0;
    if (max_valor == null || max_valor < resultado) {
        max_valor = resultado;
    }
    if (min_valor == null || min_valor > resultado) {
        min_valor = resultado;
    }

    for (let i = 0; i < max_extras; i++) {
        if (dado1 === dado2) {
            extras++;
            tiradas++;
            if (extras > max_extras) {
                console.error("Has sacado dobles más de 3 veces. Pierdes el turno.");
            }
            console.log("¡Dobles! Tirada extra #" + extras);

            dado1 = Math.floor(Math.random() * lados) + 1;
            dado2 = Math.floor(Math.random() * lados) + 1;
            let extraResultado = dado1 + dado2;

            console.log("Dado 1 = " + dado1 + "\nDado 2 = " + dado2 + "\nEl jugador " + nombre + " ha obtenido " + extraResultado + " en esta tirada");

            resultado += extraResultado;
            puntos_totales += extraResultado;

            if (max_valor == null || max_valor < resultado) {
                max_valor = resultado;
            }
            if (min_valor == null || min_valor > resultado) {
                min_valor = resultado;
            }
        } 
    }

    console.log("El jugador " + nombre + " ha obtenido " + resultado + " en total");
}

function mostrar_menu() {
    let opcion;
    let juego_iniciado = false;

    do {
        opcion = prompt("Selecciona una opción:\nA. Iniciar Juego\nB. Lanzar dados\nC. Mostrar estadísticas de juego\nD. Salir");

        switch (opcion) {
            case "A":
                console.log("Has deseado iniciar el juego");
                var nombre = prompt("Introduzca su nombre:");
                var edad = prompt("Introduzca su edad:");
                juego_iniciado = true;
                var tiempo_incio = Date.now();
                break;

            case "B":
                if (!juego_iniciado) {
                    console.error("Debes iniciar el juego primero");
                } else {
                    tirarDados(nombre);
                }
                break;

            case "C":
                console.log("Has deseado mostrar las estadísticas");
                console.log("Número total de tiradas: " + tiradas);
                console.log("Media de puntos " + (puntos_totales / tiradas));
                console.log("Maximo de puntos " + max_valor);
                console.log("Minimo de puntos " + min_valor);
                break;

            case "D":
                let tiempo_fin = Date.now();
                console.log("Fin del juego. Has estado jugando " + (tiempo_fin-tiempo_incio )/1000 +" segundos" );
                break;

            default:
                console.log("Opción no válida");
        }
    } while (opcion != "D");
}
