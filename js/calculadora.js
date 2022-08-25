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