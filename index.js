let borrado
let rapidez_borrado = 2000
let rapidez_inicio_borrado = 2000
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";

}

function borrar(obj){
        
        document.getElementById("texto").value = (document.getElementById("texto").value).substring(0, document.getElementById("texto").value.length -1);
        document.getElementById("puntos").innerHTML = obj.value.length+' puntos';
        if(50-obj.value.length <= 0){
            document.getElementById("objetivo").innerHTML = "Objetivo conseguido";
            document.getElementById("texto").disabled="true";
            document.getElementById("resultado").innerHTML = document.getElementById("texto").value
            document.getElementById("texto").remove()
            
        }
        else{
        document.getElementById("objetivo").innerHTML = (50-obj.value.length)+' palabras';
        if(obj.value.length < 10){
            document.getElementById("nivel").innerHTML ='nivel 1';
            rapidez_borrado = 1000
        }
        borrado = setTimeout(() => {  borrar(obj)}, rapidez_borrado);
        }
        
}

function countChars(obj){
    document.getElementById("puntos").innerHTML = obj.value.length+' puntos';
    if(50-obj.value.length <= 0){
        document.getElementById("objetivo").innerHTML = "Objetivo conseguido";
        document.getElementById("texto").disabled="true";
        document.getElementById("resultado").innerHTML = document.getElementById("texto").value
        document.getElementById("texto").remove()
        
    }
    else{
    document.getElementById("objetivo").innerHTML = (50-obj.value.length)+' palabras';
    if(obj.value.length < 10){
        document.getElementById("nivel").innerHTML ='nivel 1';
        rapidez_borrado = 2000
    }
    if(obj.value.length == 10){
        document.getElementById("nivel").innerHTML ='nivel 2';
        rapidez_borrado = 500
        rapidez_inicio_borrado = 500

    }
    clearTimeout(borrado)
    borrado = setTimeout(
        function() {
                borrar(obj)
                
                
            
        
    }, rapidez_inicio_borrado);
    }
}