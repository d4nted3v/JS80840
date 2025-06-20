// Base de datos de ofertas laborales
const ofertasLaborales = [];

// Función principal de menú
function menu() {
    let salir = false;

    while (!salir) {
        const opcion = parseInt(prompt(`Elija una opción:
        1 - Ver ofertas
        2 - Crear oferta
        3 - Eliminar oferta
        4 - Salir`));

        switch(opcion) {
            case 1:
                mostrarOfertas();
                break;
            case 2:
                crearOferta();
                break;
            case 3:
                eliminarOferta();
                break;
            case 4:
                salir = true;
                alert("Saliendo del programa.");
                break;
            default:
                alert("Debes elegir una opción válida");
        }
    }
}

menu();

//Funciones 
function mostrarOfertas(){
    console.log(ofertasLaborales)
}

function crearOferta(titulo, descripcion, salario){

}

function eliminarOferta(){

}