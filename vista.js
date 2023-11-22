class vistaNotas{


    creaNota(nota, idDiv){
        let contenedor=document.createElement("div");
        contenedor.style.position = 'absolute';
        let h1=document.createElement("h1");
        h1.innerHTML=nota.titulo;
        let h2=document.createElement("h2");
        h2.innerHTML=nota.texto;
        contenedor.appendChild(h1);
        contenedor.appendChild(h2);
        let botonBorrado=document.createElement("button");

        botonBorrado.innerHTML="borrar";

        contenedor.appendChild(botonBorrado);

        let botonEditar=document.createElement("button");

        botonEditar.innerHTML="editar";

        contenedor.appendChild(botonEditar);

        contenedor.nota=nota;
        contenedor.id=nota.id;
        
        

        document.getElementById(idDiv).appendChild(contenedor);

        this.arrastrar(contenedor);
        
    }

    borrarNota(idDiv, contenedorNota){
        document.getElementById(idDiv).removeChild(contenedorNota);
    }

    arrastrar(contenedor) {
        let offsetX, offsetY;
        let arrastrando = false;

        contenedor.addEventListener('mousedown', (e) => {
            arrastrando = true;
            offsetX = e.clientX - contenedor.getBoundingClientRect().left;
            offsetY = e.clientY - contenedor.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (e) => {
            if (arrastrando) {
                contenedor.style.left = e.clientX - offsetX + 'px';
                contenedor.style.top = e.clientY - offsetY + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            arrastrando = false;
        });
    }

    elementoParaEventoBorradoNota(nota){
        return document.getElementById(nota.id).getElementsByTagName("button")[0];
    }
}