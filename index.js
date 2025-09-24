

const formacion =document.getElementById("building-left");
const proyectos = document.getElementById("building-right")
const nombre = document.getElementById("nombre")

const estudios = ()=>{
 document.getElementById('modal-estudios').style.display = 'block';


document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal-estudios').style.display = 'none';
});
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal-estudios');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

}
const experiencia = ()=>{
   
}
const about = () => {
    document.getElementById('modal-about').style.display = 'block';
    
}

// Agregar funcionalidad para cerrar el modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal-about').style.display = 'none';
});

// Cerrar al hacer click fuera del modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal-about');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


formacion.addEventListener("click",estudios);
proyectos.addEventListener("click",experiencia);
nombre.addEventListener("click",about)
