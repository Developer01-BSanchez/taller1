/*let onces=['arepa','pan','tinto'];
onces[1];
onces.length;
let ultimo=onces.length-1;*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** primer ejercicio array
let ArtesMarciales=['mma','taekwondo','kickboxing','judo','karate'];
let posicion=ArtesMarciales[2];
let longitud=ArtesMarciales.length;
let ultimo=ArtesMarciales.length-1;
console.log(`posicion: ${posicion}`);
console.log(`Logitud: ${longitud}`);
console.log(`Ultimo elemento: ${ArtesMarciales[ultimo]}`);

ArtesMarciales.push('Kung-fu'); //agregar un nuevo elemento al final del array
console.log(ArtesMarciales);

//array mejorado
ArtesMarciales.forEach(function(elemento,index,array){
    console.log(`posicion ${index} elemento ${elemento}`);
})

ArtesMarciales.unshift('boxeo'); //agrega un nuevo elemento al principio del array
console.log(ArtesMarciales);
ArtesMarciales.shift(); //elimina el primer elemento del array
console.log(ArtesMarciales);
ArtesMarciales.splice(0,1); // elimina a partir de parametros de posicion 
console.log(ArtesMarciales);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** segundo ejercicio while, arrays y filtros

let aprendices=[];
let seguir=true;
while (seguir==true) {
    aprendices.push(prompt('Ingrese el nombre del aprendiz'));

    seguir=confirm('¿Desea seguir?');
}
console.log(aprendices);
let filtro=aprendices.filter(aprendices=>aprendices=="Brandon"); //permite filtar la informacion que se desea ver
alert(`${filtro}`);

let filtro2=aprendices.find(aprendices=>aprendices=="Yesid"); //permite filtar el primer dato que coincida
alert(`${filtro2}`);

let orden=aprendices.sort(); //arreglo que ordena los datos ingresados alfanumericamente
alert(orden)*/

/** Arrays de objetos con propiedades, valores */

let aprendices=[
    {primernombre:"Brandon",primerapellido:"Sanchez"},
    {primernombre:"Yeimer",primerapellido:"Sanchez"}
]
let nombrecompleto=aprendices.map(function(elemento,index,array) {
    return `${elemento.primernombre} ${elemento.primerapellido}`
}
)