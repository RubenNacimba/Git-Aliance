saludar=function() {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");

    // Generar saludo usando serviciosTest.js
    let saludo = generarSaludo(nombre, apellido);

    // Mostrar en consola
    console.log(saludo);

    // Mostrar en pantalla
    mostrarTexto("lblResultado", saludo);

    // Limpiar las cajas
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
}


