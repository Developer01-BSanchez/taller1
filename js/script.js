// imprimir en pantalla
console.log("Hola mundo");

// declaracion de variable (se identifica el tipo de dato automaticamente)
let numero=25;

// imprimir en pantalla la variable previamente definida
console.log("El numero es ",numero);
// imprimir mediante plantillas literales o cadenas
console.log(`El numero es ${numero}`);

let nombre="Brandon";
console.log(`El nombre es ${nombre}`);

let variable=true;
console.log(`la variable de tipo booleano es: ${variable}`);

let res=numero+5;
console.log(`El resultado es `+res);
console.log(`El resultado es ${res}`);
console.log(`El resultado es ${numero+5}`);


/////////////////////////////////////////////////////////////////////////////


//Alertas
/*window.alert(`Esto es una alerta`);
window.confirm(`Esto es una aleta con opción`);

let estado=window.confirm("¿Estas seguro?");
console.log(`La ventana arrojo ${estado}`);

let num1=prompt(`Digite el primer número`);
let resultado=numero+parseInt(num1); //el parseInt es para cambiar a tipo de dato int
console.log(`El resultado es ${resultado}`);*/


//sumatoria mediante el ingreso de datos en una alerta

let num1=prompt(`Digite el primer número`);
let num2=prompt(`Digite el segundo número`);
/*let resultado=parseInt(num1)+parseInt(num2);
console.log(`El resultado es: ${resultado}`);*/


/////////////////////////////////////////////////////////////////////////////////////////


//Condicionales

/*
if(num1>num2){
    console.log(`El numero ${num1} es mayor que el numero ${num2}`);
}
else if(num1==num2){
    console.log(`Ambos numeros son iguales`);
}
else if(num1<num2){
    console.log(`El numero ${num1} es menor que el numero ${num2}`);
}*/

//condicional sencilla

/*
if(num1>num2){
    console.log(`El numero ${num1} es mayor que el numero ${num2}`);
}
else{
    console.log(`El numero ${num1} es menor que el numero ${num2}`);
}*/


//operador ternario: para operaciones sencillas de dos resultados sin necesidad de utilizar un if 

/*
let nummayor=(num1>num2)
? "EL numero mayor es el primero"
: "El numero mayor es el segundo"

console.log(nummayor);*/



///////////////////////////////////////////////////////////////////////////////////////////////////


//ejercicio de validacion de usuario 
/*
let nombreu=prompt(`Ingrese el nombre de usuario`);
let password=prompt(`Ingrese la contraseña`);

if(nombreu=="Brandon" & password=="12345"){
    window.alert(`Bienvenido`);
}
else if(nombreu=="Brandon" & password!="12345"){
    window.alert(`Verifique su contraseña`)
}
else if(nombreu!="Brandon" & password=="12345"){
    window.alert(`Verifique su usuario`)
}
else{
    window.alert(`Credenciales de acceso incorrectas`);
}*/


/////////////////////////////////////////////////////////////////////////////////////////


//Condicional multiple
let opcion=prompt(`¿Que operacion desea realizar?`);

switch(opcion){
    case 'suma':
        suma=parseInt(num1)+parseInt(num2);
        alert(`el resltado de la suma es: ${suma}`);
    break;
    case 'resta':
        resta=parseInt(num1)-parseInt(num2);
        alert(`el resltado de la resta es: ${resta}`);
    break;
    case 'multiplicación':
        multiplicación=parseInt(num1)*parseInt(num2);
        alert(`el resltado de la multiplicación es: ${multiplicación}`);
    break;
    case 'divición':
        divición=parseInt(num1)/parseInt(num2);
        alert(`el resltado de la divición es: ${divición.toFixed(2)}`); //el .toFixed() se utiliza para limitar las cifras decimales
    break;
    case 'potenciación':
        potenciación=Math.pow(num1,num2); //la funcion Math.pow(base,exponente) es para realizar potencias
        alert(`el resultado de la potencia es: ${potenciación.toFixed(2)}`);
    break;
    case 'raíz cuadrada':
        raiz1=Math.sqrt(num1); //la funcion Math.sqrt() devuelve la raiz cuadrada del dato dentro de los parametros (parentesis)
        raiz2=Math.sqrt(num2);
        alert(`La raíz cuadrada de ${num1} es: ${raiz1.toFixed(2)} y la raíz cuadrada de ${num2} es: ${raiz2.toFixed(2)}`);
    break;
    default:
        alert(`Los datos ingresados no son validos`);
    break;
}








