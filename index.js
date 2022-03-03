let borrado
let rapidez_borrado = 3000
let rapidez_inicio_borrado = 3000
let palabras_objetivo = 5000
let lista_palabras = ["casa", "reloj", "montaña"]
let asignada = false
let palabra_actual = ""
let puntos_palabra = 0
let terminado = false


function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
    window.scrollTo(0,1000);

}

function borrar(obj){
    if(terminado == true){
        clearTimeout(borrado)
    }
    else{
        document.getElementById("texto").value = (document.getElementById("texto").value).substring(0, document.getElementById("texto").value.length -1);
        document.getElementById("puntos").innerHTML = obj.value.length + puntos_palabra+' puntos';
        if(palabras_objetivo-obj.value.length <= 0){
            document.getElementById("texto").disabled="true";
            document.getElementById("objetivo").innerHTML = "¡Terminado!";
            clearTimeout(borrado)
            terminado = true
            
        }
        else{
        if( 99 == obj.value.length){
            document.getElementById("nivel").innerHTML ='nivel 0';
            rapidez_inicio_borrado = 3000
            rapidez_borrado = 3000;
        }
        if( 100 == obj.value.length){
            document.getElementById("nivel").innerHTML ='nivel 1';
            document.getElementById("palabra").innerHTML ='';
            rapidez_inicio_borrado = 1800
            rapidez_borrado = 1800;
        }
        if( 200 == obj.value.length){
            document.getElementById("nivel").innerHTML ='nivel 2';
            asignada = false
        }
        if( 300 == obj.value.length){
            document.getElementById("nivel").innerHTML ='nivel 3';
            rapidez_borrado = 1200;
            rapidez_inicio_borrado = 1200;
        }
        if( 400 == obj.value.length){
            document.getElementById("nivel").innerHTML ='nivel 4';
            rapidez_borrado = 500;
            rapidez_inicio_borrado = 500;
        }
        borrado = setTimeout(() => {  borrar(obj)}, rapidez_borrado);
        }

        
}
}

function countChars(obj){
    if (terminado == true) {
        clearTimeout(borrado)
    }
    else{
    document.getElementById("puntos").innerHTML = obj.value.length+ puntos_palabra+ ' puntos';
    if(palabras_objetivo-obj.value.length <= 0){
        document.getElementById("texto").disabled="true";
        document.getElementById("objetivo").innerHTML = "¡Terminado!";
        clearTimeout(borrado)
        terminado = true
        
    }
    if(obj.value.length < 100){
        document.getElementById("nivel").innerHTML ='nivel 0';
        rapidez_borrado = 3000;
        rapidez_inicio_borrado = 3000
    }
    if(obj.value.length == 100){
        document.getElementById("nivel").innerHTML ='nivel 1';
        rapidez_borrado = 1800;
        rapidez_inicio_borrado = 1800;
    }
    if( obj.value.length == 199){
        document.getElementById("palabra").innerHTML ='';
        document.getElementById("nivel").innerHTML ='nivel 2';
        asignada = false
          
    }
    if(obj.value.length ==  200){
        if(asignada == false && lista_palabras.length != 0){
            palabra_actual = lista_palabras[Math.floor(Math.random() * lista_palabras.length)]
            document.getElementById("palabra").innerHTML ='(+50 pts) palabra: ' + palabra_actual;
            indice_buscar_palabra = document.getElementById("texto").value.length -1
            document.getElementById("nivel").innerHTML ='nivel 2';
            asignada = true
        }
        if(lista_palabras.length == 0){
            document.getElementById("palabra").innerHTML ="¡WOW, terminaste las palabras!";
            asignada = false
        }
    
    }
    if(obj.value.length > 200){
        if(document.getElementById("texto").value.substring(indice_buscar_palabra, document.getElementById("texto").value.length -1 ).includes(palabra_actual)){
            if(asignada == true){
            puntos_palabra = puntos_palabra +50
            document.getElementById("puntos").innerHTML =obj.value.length+ puntos_palabra+' puntos';
            const index = lista_palabras.indexOf(palabra_actual);
            lista_palabras.splice(index, 1);
            }
            if(lista_palabras.length == 0){
                document.getElementById("palabra").innerHTML ="¡WOW, terminaste las palabras!";
                asignada = false
            }
            else{
            palabra_actual = lista_palabras[Math.floor(Math.random() * lista_palabras.length)]
            document.getElementById("palabra").innerHTML ='(+50 pts) palabra: ' + palabra_actual;
            indice_buscar_palabra = document.getElementById("texto").value.length -1
            }
        }
    }
    if(obj.value.length == 300){
        document.getElementById("nivel").innerHTML ='nivel 3';
        rapidez_borrado = 1200;
        rapidez_inicio_borrado = 1200;
    }
    if( obj.value.length == 299){
        document.getElementById("nivel").innerHTML ='nivel 2';
        rapidez_borrado = 1800;
        rapidez_inicio_borrado = 1800;
    }
    if(obj.value.length == 400){
        document.getElementById("nivel").innerHTML ='nivel 4';
        rapidez_borrado = 500;
        rapidez_inicio_borrado = 500;
    }
    if( obj.value.length == 399){
        document.getElementById("nivel").innerHTML ='nivel 3';
        rapidez_borrado = 1200;
        rapidez_inicio_borrado = 1200;
    }
    clearTimeout(borrado)
    borrado = setTimeout(
        function() {
                borrar(obj)
                
                
            
        
    }, rapidez_inicio_borrado);
}
}