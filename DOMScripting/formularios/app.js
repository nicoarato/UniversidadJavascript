function mostrarValores() {
    let formulario = document.forms['formulario'];

    let texto = '';
    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];

    texto = nombre.value + '<br>' + apellido.value;

    console.log(nombre);

    document.getElementById('valores').innerHTML = texto;
}