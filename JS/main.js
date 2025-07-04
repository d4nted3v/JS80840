// Base de datos de ofertas laborales
const ofertasLaborales = [];

// Función principal de menú
function menu() {
    let salir = false;

    while (!salir) {
        const opcionMenu = parseInt(prompt(`Elija una opción:
        1 - Ver ofertas
        2 - Crear oferta
        3 - Eliminar oferta
        4 - Salir`));

        switch(opcionMenu) {
            case 1:
                mostrarOfertas();
                break;
            case 2:
                crearOferta(ofertasLaborales);
                break;
            case 3:
                eliminarOferta(ofertasLaborales);
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
function mostrarOfertas() {
    if(ofertasLaborales.length!==0){

    contador = 1;

    for(let oferta of ofertasLaborales){
    console.log(`
        Oferta Numero: ${contador}
        Titulo oferta: ${oferta.titulo}
        Descripción: ${oferta.descripcion}
        Salario: ${oferta.salario}USD
        -----------*-----------
`);
contador++
    }}else{
        console.log("No hay ofertas laborales para visualizar");
    }
    alert("Revisa la consola");
}

function crearOferta(ofertasLaborales){
    let titulo = prompt("Elige un título para tu oferta");
    let descripcion = prompt("Haz una breve descripción del puesto");
    let salario = parseInt(prompt("Carga el salario ofrecido"));
    let nuevaOferta = {titulo: titulo, descripcion:descripcion, salario:salario}
    let confirmacion = parseInt(prompt(`Tu nueva oferta es la siguiente:
        Titulo: ${titulo}
        Descripción: ${descripcion}
        Salario: ${salario}USD

        Desea confirmar y guardar oferta?
        1 - Si
        2 - No
        `))
        if(confirmacion===2){
            menu();
        }else if(confirmacion===1){
            ofertasLaborales.push(nuevaOferta)
            console.log("Oferta creada exitosamente")
            menu();
        }else{
            console.log("Debes elegir una opción válida");
            menu();
        }
}


function eliminarOferta(ofertasLaborales){
if(ofertasLaborales.length > 0){
    let contador = 1;

    for(let oferta of ofertasLaborales){

        console.log(`
        Oferta Numero: ${contador}
        Titulo oferta: ${oferta.titulo}
        Descripción: ${oferta.descripcion}
        Salario: ${oferta.salario}USD
        -----------*-----------
`);
contador++

        }}
    else{
        alert("No tienes ofertas disponibles. Crea una para comenzar!")
        menu();
    }


alert("Revisa la consola");


let ofertaElegida = parseInt(prompt(`
    Elige el nùmero de oferta que deseas eliminar
    `))-1;

while(ofertaElegida < 0 || ofertaElegida > ofertasLaborales.length-1){
    ofertaElegida = parseInt(prompt(`
    La oferta elegida no existe. Elige el nùmero de oferta que deseas eliminar.
    `))-1;
    }


ofertasLaborales.splice(ofertaElegida, 1);
alert("Oferta eliminada exitosamente.");
menu();

}






