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
