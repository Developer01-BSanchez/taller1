let id=document.getElementById("features");
console.log(document.getElementById("features"));// getElementById: solo id
console.log(document.querySelector("h1")); // querySelector: cuaquier elemento 
console.log(document.querySelector(".feature")); // . para buscar clases
console.log(document.querySelector("#features")); // # para buscar id 
console.log(document.querySelectorAll("p")[0]); // querySelectorAll busca solo un elemento
console.log(document.querySelector("a").getAttribute("href")); //acceder a un atributo
document.querySelector("a").setAttribute("href","http://www.youtube.com"); //cambiar propiedades 
const $mi=document.querySelector("#features"); // Guardan una sección en una varible

//Editar estilo con la variable definida $mi
$mi.style.setProperty("color","#FF0000");
$mi.style.setProperty("background-color","blue");
$mi.style.setProperty("width","500px");

const $mic=document.querySelector(".miclase");

let text=`<p>
    El dom es bla bla
</p>
<p>
Se puede acceder y modificar
</p>`
$mic.textContent=text; //agrega cadena de texto de texto sencilla
$mic.innerHTML=text; //agrega cadena de texto junto con etiquetas HTML


const img = document.createElement("img"); //Crear un elemento img 
img.src ="https://image.shutterstock.com/image-vector/vector-creative-illustration-cosmonaut-spacesuit-260nw-1680589189.jpg";  //direccion del elemento
document.body.appendChild(img); //agregarlo en una parte específica del HTML 

const $caja=document.createElement("div");
$caja.innerHTML="<img src='../img/roca.jpg'>";

$mic.appendChild($caja);

/**  remover elemento
$caja.remove();*/