//Ejercicio Alcancia

/*let dinero, ahorro=0, cont=0;
let resp=true;

while (resp==true) {
    dinero=prompt("Ingrese la cantidad que desea guardar:");
    ahorro=ahorro+parseInt(dinero);
    alert(`El dinero acumulado es: ${ahorro}`);
    resp=confirm("¿Desea continuar?");
    cont=cont+1;
}
alert(`El numero de veces que usted ingreso es: ${cont}`);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////


//Ejercicio moneda aleatoria 

let resp1=confirm("¿Desea jugar?"),resp2=0,resp3=0,resp4,moneda,total;
resp2=prompt("Ingrese la cantidad general a apostar:");

while (resp1==true) {
    resp3=prompt("¿Cuanto desea apostar en esta ronda?");
    resp4=prompt("¿Cara o Sello?")
    moneda= Math.round(Math.random()*1);
    if(resp4=="Cara"){
        resp4=1;
        alert("Cayo, Cara!");
        if(moneda==resp4){
            resp3=parseInt(resp3)+parseInt(resp3);
            resp2=parseInt(resp2)+parseInt(resp3);
            alert(`Usted a ganado, su total es de: ${resp2}`);
        }if (moneda!=resp4) {
            
        } else {
            
        }
    }
}

