
/** Ejercicio de Calculadora (Suma, Resta, Multiplicación, Divición) */

/*const btn=document.getElementById("button");
function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    switch (op){
        case "1":
            let sum=num1+num2;
            alert(`El numero 1 es ${num1}, el numero 2 es ${num2}, la suma de estos dos es ${sum}`);
        break;
        case "2":
            let res=num1-num2;
            alert(`El numero 1 es ${num1}, el numero 2 es ${num2}, la resta de estos dos es ${res}`);
        break;
        case "3":
            let mul=num1*num2;
            alert(`El numero 1 es ${num1}, el numero 2 es ${num2}, la multiplicación de estos dos es ${mul}`);
        break;
        case "4":
            let div=num1/num2;
            alert(`El numero 1 es ${num1}, el numero 2 es ${num2}, la divición de estos dos es ${div}`);
        break;
        default:
            alert('Elije la operación');
        break;
    }
}
btn.addEventListener('click',calcular);*/






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/** Ejercicio de suma y resta agregandole una imagen al texto desde JavaScript */


const ops = document.getElementById('ops');
ops.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log(e.target.id); Mostrar id especifico de los elementos a escuchar, en este caso ops, target obtiene varias propiedades.
    id = e.target.id;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    const rta = document.getElementById('respuesta');
    
    if  (id == 'suma'){
        //console.log(`Sumatoria : ${num1+num2}`);
        const img = ` <img src="../img/Correcto.png"><p>La suma corresponde a ${num1+num2}</p>`;
        rta.innerHTML = img;
    }
    else if (id == 'resta'){
        //console.log(`Resta : ${num1-num2}`)
        const img = `<img src="../img/Incorrecto.png"></i><p>La resta corresponde a ${num1-num2}</p>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '3rem');
    }
})

/** 
const ops=document.getElementById("ops");
ops.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    if(e.target.id=="suma"){
        let texto=´<p>
        La suma corresponde a ${num1+num2}
        </p>´
    }
})*/






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/** Ejercicio de asociacion de caracteres */

//terminar el ejercicio de asociacion de nombres, apellidos y materias que dicta cada instructor con resultado correcto o incorrecto segun coresponda



