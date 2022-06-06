let cedula = document.getElementById("cedula");
let nombre = document.getElementById("nombre");
let btnValida = document.getElementById("btn-Valida");
let mensaje = document.getElementById("mensa");
let prueba = document.getElementById("prueba")
let borrar = document.getElementById("borrar");

borrar.addEventListener("click",borre);
function borre(){
    prueba.classList.remove("fondo");
}
btnValida.addEventListener("click" ,validar);
function validar(){
   
    if (cedula.value == ""){
        console.log("esta en blanco");
        cedula.style.borderColor = "red";
        mensaje.classList.add("fondo");
        prueba.classList.add("fondo");
        mensaje.innerHTML = "Cedula vacia";

    }
}