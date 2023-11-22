window.onload =()=>
{
//empieza la aplicacion
misNotas =new ListaNotas();
if(localStorage.notas){
   misNotas.cargaNotas(JSON.parse(localStorage.getItem("notas")));
}

vista = new vistaNotas();

//si hay elemetos guardados en local storage, mostrarlos
for(nota of misNotas.lista){
vista.creaNota(nota, "app");

borradoNota=vista.elementoParaEventoBorradoNota(nota);
borradoNota.addEventListener("click", borrarNota)
}
//Defino eventos
//Creacion
document.getElementById("button").addEventListener("click", nuevaNota);





function actualiza(){

    localStorage.setItem("notas", JSON.stringify(misNotas));
}


function nuevaNota(){

    campoTitulo=document.getElementById("inputTitulo");

    campoTexto=document.getElementById("inputTexto");

    misNotas.añadirNota(campoTitulo.value, campoTexto.value);
    misNotasactual=misNotas.lista[misNotas.lista.length-1]

    vista.creaNota(misNotasactual, "app");

    borradoNota = vista.elementoParaEventoBorradoNota(misNotasactual);

    borradoNota.addEventListener("click", borrarNota);


    actualiza();
}



function borrarNota(e){
   

    //borrar en modelo
    misNotas.eliminarNota(e.target.parentNode.nota.id)

    //borrar en la vista

    vista.borrarNota("app", e.target.parentNode)
    actualiza();
}









}