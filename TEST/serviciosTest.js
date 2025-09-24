generarSaludo=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let mensajeBienvenida= "HOLA: "+nombre+" "+ apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
}