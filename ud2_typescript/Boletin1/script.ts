//Ejercicio 1
function ej1(): void {
    let hora: Date = new Date();
    console.log("Hoy es: " + hora.getDate() + "/" + (hora.getMonth() + 1) + "/" + hora.getFullYear() + " y son las " + hora.getHours() + ":" + hora.getMinutes());
    console.log("Hora posterior: " + (hora.getHours() + 1) + ":" + hora.getMinutes());
    console.log("Hora anterior: " + (hora.getHours() - 1) + ":" + hora.getMinutes() + " hola");
}
//ejercicio 2
function ej2(): void {
    console.log("Validando formulario...");
    let exReg: RegExp = new RegExp("lo_que_sea");
    if(document.getElementById("email") != null){
        let mensajOk = document.createElement("span");
        let email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
        if(email && exReg.test(email.value)){
            mensajOk.textContent = "Email correcto";
        }else{
            mensajOk.textContent = "Email incorrecto";
        }
    }
}