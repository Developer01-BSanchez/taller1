let opciones=document.getElementById("opciones");
let resp=document.getElementById("respuesta");
opciones.addEventListener('click',(e)=>{

    e.preventDefault();
    if(e.target.id=="opcion1"){
        resp.innerHTML=`Opcion Incorecta`;
        resp.classList.remove("correcto");
        resp.classList.add("incorrecto");
    }else if(e.target.id=="opcion2"){
        resp.innerHTML=`Opcion Incorecta`;
        resp.classList.remove("correcto");
        resp.classList.add("incorrecto");
    }else if(e.target.id=="opcion3"){
        resp.innerHTML=`Opcion Correcta`;
        resp.classList.remove("incorrecto");
        resp.classList.add("correcto");
    }else if(e.target.id=="opcion4"){
        resp.innerHTML=`Opcion Incorecta`;
        resp.classList.remove("correcto");
        resp.classList.add("incorrecto");
    }
})