window.onload = function () {
    verTabla();
};
var clasificacionLiga = [
    ["Real Madrid", 0, 0, 0, 0, 0, 0, 0],
    ["FC Barcelona", 0, 0, 0, 0, 0, 0, 0],
    ["Atlético de Madrid", 0, 0, 0, 0, 0, 0, 0],
    ["Sevilla", 0, 0, 0, 0, 0, 0, 0],
    ["Real Betis", 0, 0, 0, 0, 0, 0, 0],
    ["Real Sociedad", 0, 0, 0, 0, 0, 0, 0],
    ["Villarreal", 0, 0, 0, 0, 0, 0, 0],
    ["Athletic Club", 0, 0, 0, 0, 0, 0, 0],
    ["Valencia", 0, 0, 0, 0, 0, 0, 0],
    ["Osasuna", 0, 0, 0, 0, 0, 0, 0],
    ["Celta de Vigo", 0, 0, 0, 0, 0, 0, 0],
    ["Rayo Vallecano", 0, 0, 0, 0, 0, 0, 0],
    ["Alavés", 0, 0, 0, 0, 0, 0, 0],
    ["RCD Espanyol", 0, 0, 0, 0, 0, 0, 0],
    ["Elche", 0, 0, 0, 0, 0, 0, 0],
    ["Getafe", 0, 0, 0, 0, 0, 0, 0],
    ["Mallorca", 0, 0, 0, 0, 0, 0, 0],
    ["Levante UD", 0, 0, 0, 0, 0, 0, 0],
    ["Real Oviedo", 0, 0, 0, 0, 0, 0, 0],
    ["Girona", 0, 0, 0, 0, 0, 0, 0]
];
//Para el mesnaje de error
var form = document.getElementById("formPartido");
var parrafoErro = document.createElement('p');
//Para mostrar la tabla
var tablaCuerpo = document.getElementById('tabla-cuerpo');
function verTabla() {
    tablaCuerpo.textContent = "";
    for (var i = 0; i < clasificacionLiga.length; i++) {
        var filas = document.createElement("tr");
        for (var j = 0; j < clasificacionLiga[i].length; j++) {
            var celdas = document.createElement("td");
            celdas.textContent = clasificacionLiga[i][j].toString();
            filas.appendChild(celdas);
        }
        tablaCuerpo.appendChild(filas);
    }
}
//Sumar los resultados
function procesarPartido() {
    parrafoErro.textContent = "";
    var local = document.getElementById("equipoLocal").value;
    var visitante = document.getElementById("equipoVisitante").value;
    var golesLocal = Number(document.getElementById("golesLocal").value);
    var golesVisitante = Number(document.getElementById("golesVisitante").value);
    if (local === visitante) {
        parrafoErro.textContent = "No puede jugar un equipo contra si mismo";
        parrafoErro.style.color = "red";
        form.appendChild(parrafoErro);
    }
    else {
        var equipoLocal = 0;
        var equipoVisitante = 0;
        for (var i = 0; i < clasificacionLiga.length; i++) {
            if (clasificacionLiga[i][0] === local) {
                equipoLocal = i;
            }
            if (clasificacionLiga[i][0] === visitante) {
                equipoVisitante = i;
            }
        }
        // Partidos 
        clasificacionLiga[equipoLocal][2] = Number(clasificacionLiga[equipoLocal][2]) + 1;
        clasificacionLiga[equipoVisitante][2] = Number(clasificacionLiga[equipoVisitante][2]) + 1;
        // Goles a favor
        clasificacionLiga[equipoLocal][6] = Number(clasificacionLiga[equipoLocal][6]) + golesLocal;
        clasificacionLiga[equipoVisitante][6] = Number(clasificacionLiga[equipoVisitante][6]) + golesVisitante;
        // Goles en contra
        clasificacionLiga[equipoLocal][7] = Number(clasificacionLiga[equipoLocal][7]) + golesVisitante;
        clasificacionLiga[equipoVisitante][7] = Number(clasificacionLiga[equipoVisitante][7]) + golesLocal;
        // Resultado
        if (golesLocal > golesVisitante) {
            // local gana
            clasificacionLiga[equipoLocal][3] = Number(clasificacionLiga[equipoLocal][3]) + 1;
            clasificacionLiga[equipoVisitante][5] = Number(clasificacionLiga[equipoVisitante][5]) + 1;
            clasificacionLiga[equipoLocal][1] = Number(clasificacionLiga[equipoLocal][1]) + 3;
        }
        else if (golesLocal < golesVisitante) {
            // visitante gana
            clasificacionLiga[equipoVisitante][3] = Number(clasificacionLiga[equipoVisitante][3]) + 1;
            clasificacionLiga[equipoLocal][5] = Number(clasificacionLiga[equipoLocal][5]) + 1;
            clasificacionLiga[equipoVisitante][1] = Number(clasificacionLiga[equipoVisitante][1]) + 3;
        }
        else {
            // empates
            clasificacionLiga[equipoLocal][4] = Number(clasificacionLiga[equipoLocal][4]) + 1;
            clasificacionLiga[equipoVisitante][4] = Number(clasificacionLiga[equipoVisitante][4]) + 1;
            clasificacionLiga[equipoLocal][1] = Number(clasificacionLiga[equipoLocal][1]) + 1;
            clasificacionLiga[equipoVisitante][1] = Number(clasificacionLiga[equipoVisitante][1]) + 1;
        }
        clasificacionLiga.sort(function (a, b) {
            var puntosA = a[1];
            var puntosB = b[1];
            var golesA = a[6];
            var golesB = b[6];
            if (puntosB !== puntosA) {
                return puntosB - puntosA;
            }
            return golesB - golesA;
        });
        verTabla();
    }
}
