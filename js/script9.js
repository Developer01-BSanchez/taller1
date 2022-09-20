//Esta es para nombre y apellido ^[a-zA-ZÁ-ÿ\s]{1,40}
//Regla para el Numero de documento y telefono ^\d{7,10}$
//Regla correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//Regla password ^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$

const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, //SOLO LETRAS
    numeros:/^\d{7,10}$/, //SOLO NUMEROS
    correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORRREO
    password:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //CONTRASEÑA
}

const inputs={
    numdoc:false,
    nombre:false,
    apellido:false,
    correo:false,
    coreo:false,
    telefono:false,
    password:false
}

//Acceder al formulario
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");

//Agregar Listener de evento submit al formulario que se envia
form.addEventListener('submit',e=>{
    e.preventDefault() //evitar que se envie el formulario para realizar las validaciones
})


const validarInput=(regla,input,grupo)=>{
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-check');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visibility');
    }else{
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visibility');
        inputs[grupo]=true;
    }
    }


const validarCampos=(e)=>{
    console.log("Se genero un evento sobre el input"+e.target.name);
    switch(e.target.name){
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "nombre":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "correo":
            validarInput(reglas.correo,e.target,e.target.name);
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "password":
            validarInput(reglas.password,e.target,e.target.name);
        break;
        default:
            alert("No se a recibido un evento sobre el input");
        break;
    }
}

campos.forEach((campo)=>{
    campo.addEventListener("keyup",validarCampos);
    campo.addEventListener("blur",validarCampos);
})

form.addEventListener('submit',e=>{
    e.preventDefault();
    const terminos= document.getElementById("terminos");
    if(inputs.numdoc && inputs.nombre && inputs.apellido && 
    inputs.correo && inputs.telefono && inputs.password &&
    terminos.checked){
        alert("El usuario ha sido registrado");
        form.reset();
        document.querySelectorAll('.success').forEach(icono=>{
            icono.classList.remove('success');
        });
    }
    else{
        document.querySelectorAll('.success').forEach(icono=>{
            icono.classList.add('error');
        })
    }
})