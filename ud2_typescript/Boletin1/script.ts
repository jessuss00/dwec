//Ejercicio 1
function ej1(): void {
    let hora: Date = new Date();
    console.log("Hoy es: " + hora.getDate() + "/" + (hora.getMonth() + 1) + "/" + hora.getFullYear() + " y son las " + hora.getHours() + ":" + hora.getMinutes());
    console.log("Hora posterior: " + (hora.getHours() + 1) + ":" + hora.getMinutes());
    console.log("Hora anterior: " + (hora.getHours() - 1) + ":" + hora.getMinutes() + " hola");
}
//ejercicio 2
function ej2(){    
    const regExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$"); //Con fallos (hay que corregir)
    
    //Aplico la validacion de la expresion regular
    if(regExp.test($inputValue("email"))){
        //Si test devuelve true quiere decir que el texto "email" cumple la expresion reg.
        $writeNode("ok","El email es valido") //Aquí escribo
        $writeNode("error",""); //Aquí escribo tambien (lo que pasa que borra)
    }else{
        //Si es false quiere decir que el texto "email" no cumple la expresion regular.
        $writeNode("ok","") //Aquí escribo (borrando el contenido)
        $writeNode("error", "El email no cumple la expresion") //Aqui tambien escribo
    }
}

//Helpers
function $inputValue(id: string) : string{
    const input = document.getElementById(id) as HTMLInputElement; //Lectura
    let result = "";

    if(input){
        result = input.value; //Recojo el valor (aqui es donde leo)
    }

    return result;
}
function $writeNode (id: string, msg: string) : void {
    const nodo = document.getElementById(id) as HTMLElement; //Escritura

    if(nodo){
        nodo.textContent = msg;
    }

}
function suma (a: number, b: number) : number{
   return a+b;
}
const suma2 = (a:number, b:number) => a+b;

//Ejercicio 3
function ej3(){
     let ventanaNueva = window.open("https://www.google.com");
     //ventanaNueva?.document.write("Hola");
}
//Ejercicio 4

function ej4(){
    const regExp = new RegExp ("^https:\/\/");
    const url = $inputValue("url");
    if(regExp.test(url)){
        window.location.href = url;
    }else{
        $writeNode("error2", "Por favor introduzca una URL valida")
        //Ej5
        setTimeout(()=> $writeNode("error2",""),5000);
    }
    
}
