/** 
//Invocar la función
lanzarmoneda();





//Declara la función por declaración
function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2) + 1);
    console.log(`El lanzamiento fue ${moneda}`);
}*/



//funcion de valor de retorno
function lanzarmoneda() {
    let moneda = Math.floor((Math.random() * 2) + 1);
    return moneda
}
//Invocar la función con valor de retorno
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento = lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);

/** 
//Función con parametros
function ganar(saldo,apuesta){
    saldo=saldo+apuesta;
    return saldo;
}
function perder(saldo,apuesta){
    saldo=saldo-apuesta;
    return saldo;
}*/

/** 
//Invocar la función y enviar argumentos según corresponda
ganar(saldo,apuesta);
perder(saldo,apuesta);*/

//Juego moneda aleatoria con apuesta
/** 
let seguir=true;
let saldo=0;
let jugador=prompt(`Ingresa el nombre del jugador`);
saldo=parseInt(prompt("Cuanto desea recargar para jugar"));
while(seguir==true){
    let eleccion=prompt(`${jugador} Elige 1. Cara 2. Sello`);
    let apuesta=parseInt(prompt(`De su saldo actual ${saldo} ¿Cuanto desea apostar?`));
    let lanzamiento=lanzarmoneda();
    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue Cara, escogiste Cara Tú ganas!!!, Tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue Sello, escogiste Sello Tú ganas!!!, Tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue Cara, escogiste Sello perdiste!!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue Sello, escogiste Cara perdiste!!!, tu nuevo saldo es ${saldo}`);
    }
    seguir==confirm("Desea jugar otra vez");
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** 
//funcion por expresión 

function lanzarmoneda() {
    let moneda = Math.floor((Math.random() * 2) + 1);
    return moneda
}

//Invocar la función
let lanzamiento1=lanzarmoneda();
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Funcion anonima
/** 
//Función con parametros
let ganar= function(saldo,apuesta){
    saldo=saldo+apuesta;
    return saldo;
}
//Invocar la función
 ganar(saldo,apuesta);*/


 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //Función Flecha (Arrow)
/** 
 //funcion con parametros
 let perder=(saldo,apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
 }
 //invocar la función
 perder(saldo,apuesta);*/







//OBJETOS JS

//Creación del objeto animal, con 3 propiedades y 1 método
const animal={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
        console.log("El gato está comiendo")
    }
}
//mostrar objeto completo
console.log(animal);

