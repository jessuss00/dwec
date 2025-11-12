var clasificacionLiga = [
    ["Real Madrid", 0, 0, 0, 0, 0, 0, 0],
    ["Girona", 0, 0, 0, 0, 0, 29, 14],
    ["Barcelona", 27, 12, 8, 3, 1, 26, 12],
    ["Atlético de Madrid", 25, 11, 8, 1, 2, 27, 12],
    ["Athletic Club", 21, 12, 6, 3, 3, 22, 16],
    ["Real Sociedad", 20, 12, 5, 5, 2, 19, 13],
    ["Real Betis", 19, 12, 5, 4, 3, 16, 15],
    ["Valencia", 18, 12, 5, 3, 4, 17, 16],
    ["Rayo Vallecano", 17, 12, 4, 5, 3, 13, 14],
    ["Villarreal", 12, 12, 3, 3, 6, 17, 22],
    ["Sevilla", 11, 12, 2, 5, 5, 17, 18],
    ["Osasuna", 11, 12, 3, 2, 7, 13, 21],
    ["Mallorca", 9, 12, 1, 6, 5, 12, 18],
    ["Celta de Vigo", 8, 12, 1, 5, 6, 14, 20],
    ["Alavés", 8, 12, 2, 2, 8, 10, 19],
    ["Cádiz", 8, 12, 1, 5, 6, 9, 21],
    ["Granada", 7, 12, 1, 4, 7, 16, 29],
    ["Las Palmas", 7, 12, 2, 1, 9, 8, 22],
    ["Getafe", 6, 12, 1, 3, 8, 10, 24],
    ["Almería", 3, 12, 0, 3, 9, 11, 31]
];
var tablaCuerpo = document.getElementById('tabla-cuerpo');
function verTabla() {
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
window.onload = function () {
    verTabla();
};
