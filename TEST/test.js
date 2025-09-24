function saludar() {
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");

  // Generar saludo usando la función del archivo serviciosTest.js
  let saludo = generarSaludo(nombre, apellido);

  // Mostrar en consola para validación técnica
  console.log(saludo);

  // Mostrar en pantalla dentro del h4
  mostrarTexto("lblResultado", saludo);

  // Limpiar la caja de nombre
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
}
