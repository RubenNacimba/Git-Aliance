saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let mensajeBienvenida ="Bienvenido "+nombre+" "+apellido;
    console.log(mensajeBienvenida);

    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarTextoEnCaja("txtNombre","");
}