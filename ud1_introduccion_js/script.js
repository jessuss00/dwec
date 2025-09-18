
//Ejercicio 1
function saludar() {
    var edad = window.prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        console.log("Eres mayor de edad, teniendo " + edad + " años");
    } else {
        console.log("Eres menor de edad, teniendo " + edad + " años");
    }
}
//Ejercicio 2
function pintar_ruta() {
    console.log("El acceso a la ruta C:\\usuario\\ tarda 1,23 segundos, algo considerado \"lento\" en la actualidad.");
}

//Ejercicio 3
function pintar_ruta_V2() {
    var substring = "El acceso a la ruta C:\\usuario\\ tarda 1,23";
    var substring2 = " considerado \"lento\" en la actualidad.";
    console.log(substring + substring2);
}
//Ejercicio 4
function muestra_potencia(){
    var num= 2* Math.pow(10,-9);
    console.log("El valor de 2 por 10^-9 es: " + num);
}
//Ejercicio 5
function muestra_n_distintas_bases(num){
    var numDecimal= num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
    var numDecimal= num.toString(10);
    console.log("El número " + num + " en decimal es: " + numDecimal);
    var numHexadecimal= num.toString(16);
    console.log("El número " + num + " en hexadecimal es: " + numHexadecimal);
    var numOctal= num.toString(8);
    console.log("El número " + num + " en octal es: " + numOctal);
}
//Ejercicio 6
function divide_suma(num1){
    var numeroDividido= num1/0;
    console.log("El número " + num1 + " dividido entre 0 es: " + numeroDividido);
    var sumaInfinito= numeroDividido + 23;
    console.log("La suma de " + numeroDividido + " más 23 es: " + sumaInfinito);
}
//Ejercicio 7
function Nam(num1){
    var numeroDividido= num1/0;
    console.log("El número " + num1 + " dividido entre 0 es: " + numeroDividido);
}
//Ejercicio 8
function maxValue(){
    var maxValor= Number.MAX_VALUE;
    console.log("El valor máximo que puede tener un número en JavaScript es: " + maxValor);
    BigInt(maxValor);
    console.log("El valor máximo que puede tener un número en JavaScript como BigInt es: " + BigInt(maxValor));
}
//Ejercicio 10
function check_ambito_variables(){
    let prueba= 5;
    console.log("El valor de la variable prueba es: " + prueba);
    {
        let prueba2= 10;
        console.log("Insisto, el valor de la variable prueba es: " + prueba);
        console.log("El valor de la variable prueba2 es: " + prueba2);
    }
    console.log("El valor de la variable prueba2 es: " + prueba2);
}

//Ejercicio 11
function definir_y_mostrar_array(){
    let array= ["Alberto", "Ana", "Antonio", "Beatriz", "Carmen"];
    /* for(let i=0; i<array.length; i++){
        console.log("El nombre en la posición " + i + " es: " + array[i]);
    } */
    console.table(array);
}
//Ejercicio 12
function contar_y_temorizar(){
    let valor=0;
    let initTime= new Date();
    for(let i=0; i<=1000000000; i++){
        valor+=10;
    }
    let endTime= new Date();
    console.log("Valor acumulado: " + valor);
    console.log("Tiempo transcurrido: " + (endTime - initTime) + " ms");
}