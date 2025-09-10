

const formacion =document.getElementById("building-left");
const proyectos = document.getElementById("building-right")
const nombre = document.getElementById("nombre")

const estudios = ()=>{
    alert("Acá van estudios")
}
const experiencia = ()=>{
   
}

const about = ()=>{
    alert("aca va about")
}

formacion.addEventListener("click",estudios);
proyectos.addEventListener("click",experiencia);
nombre.addEventListener("click",about)
