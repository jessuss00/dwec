window.onload = () => {
    verTabla();
}


const clasificacionLiga = [
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
let form: HTMLFormElement = document.getElementById("formPartido") as HTMLFormElement;
var parrafoErro: HTMLParagraphElement = document.createElement('p') as HTMLParagraphElement;


const tablaCuerpo = document.getElementById('tabla-cuerpo') as HTMLTableSectionElement;

function verTabla(): void {
    tablaCuerpo.textContent = "";
    for (let i = 0; i < clasificacionLiga.length; i++) {
        let filas: HTMLTableRowElement = document.createElement("tr") as HTMLTableRowElement;
        for (let j = 0; j < clasificacionLiga[i].length; j++) {
            let celdas: HTMLTableCellElement = document.createElement("td") as HTMLTableCellElement;
            celdas.textContent = clasificacionLiga[i][j].toString();
            filas.appendChild(celdas);
        }
        tablaCuerpo.appendChild(filas);
    }
}


function procesarPartido(): void {
    parrafoErro.textContent="";
    let local: string = (document.getElementById("equipoLocal") as HTMLSelectElement).value;
    let visitante: string = (document.getElementById("equipoVisitante") as HTMLSelectElement).value;
    let golesLocal = Number((document.getElementById("golesLocal") as HTMLInputElement).value);
    let golesVisitante = Number((document.getElementById("golesVisitante") as HTMLInputElement).value);

    if (local === visitante) {
        parrafoErro.textContent = "No puede jugar un equipo contra si mismo";
        parrafoErro.style.color = "red";
        form.appendChild(parrafoErro);

    } else {

        let equipoLocal = 0;
        let equipoVisitante = 0;

        for (let i = 0; i < clasificacionLiga.length; i++) {
            if (clasificacionLiga[i][0] === local) {
                equipoLocal = i;
            }
            if (clasificacionLiga[i][0] === visitante) {
                equipoVisitante = i;
            }
        }

        // Partidos 
        clasificacionLiga[equipoLocal][2] = Number(clasificacionLiga[equipoLocal][2]) + 1; //sumamos 1 partido jugado
        clasificacionLiga[equipoVisitante][2] = Number(clasificacionLiga[equipoVisitante][2]) + 1; //sumamos 1 partido jugado

        // Goles a favor
        clasificacionLiga[equipoLocal][6] = Number(clasificacionLiga[equipoLocal][6]) + golesLocal; //--> Al equipo local sumamos los goles locales
        clasificacionLiga[equipoVisitante][6] = Number(clasificacionLiga[equipoVisitante][6]) + golesVisitante;//--> Al equipo visitante sumamos los goles visitantes

        // Goles en contra
        clasificacionLiga[equipoLocal][7] = Number(clasificacionLiga[equipoLocal][7]) + golesVisitante;//--> Al equipo local sumamos los goles del visitante
        clasificacionLiga[equipoVisitante][7] = Number(clasificacionLiga[equipoVisitante][7]) + golesLocal;//--> Al equipo visitante sumamos los goles del local

        // Resultado
        if (golesLocal > golesVisitante) {

            // local gana
            clasificacionLiga[equipoLocal][3] = Number(clasificacionLiga[equipoLocal][3]) + 1; //-->Sumamos 1 a partido ganados
            clasificacionLiga[equipoVisitante][5] = Number(clasificacionLiga[equipoVisitante][5]) + 1; //--> Sumamos 1 a partidos perdidos
            clasificacionLiga[equipoLocal][1] = Number(clasificacionLiga[equipoLocal][1]) + 3; // --> Sumamos los 3 puntos 
        }

        else if (golesLocal < golesVisitante) {

            // visitante gana
            clasificacionLiga[equipoVisitante][3] = Number(clasificacionLiga[equipoVisitante][3]) + 1; //-->Sumamos 1 a partido ganados
            clasificacionLiga[equipoLocal][5] = Number(clasificacionLiga[equipoLocal][5]) + 1;//--> Sumamos 1 a partidos perdidos
            clasificacionLiga[equipoVisitante][1] = Number(clasificacionLiga[equipoVisitante][1]) + 3;// --> Sumamos los 3 puntos 
        }

        else {

            // empates
            clasificacionLiga[equipoLocal][4] = Number(clasificacionLiga[equipoLocal][4]) + 1;// sumamos 1 a los partidos empatados
            clasificacionLiga[equipoVisitante][4] = Number(clasificacionLiga[equipoVisitante][4]) + 1;// sumamos 1 a los partidos empatados
            clasificacionLiga[equipoLocal][1] = Number(clasificacionLiga[equipoLocal][1]) + 1;// --> Sumamos el punto 
            clasificacionLiga[equipoVisitante][1] = Number(clasificacionLiga[equipoVisitante][1]) + 1;// --> Sumamos el punto 
        }
        verTabla();
    }
}