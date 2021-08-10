//PANELES//

const barraLateralImagen = document.getElementById("panelImagen")

const botonDecierreImagen = document.getElementById("botonMostrarOcultar")

const botonDeAperturaBarraImagen = document.getElementById("botonImagen")

const mostrarBarraLateralImagen = document.getElementById("panelImagen")



const ocultarPanel = () => {
    barraLateralImagen.style.display = "NONE"
}
botonDecierreImagen.onclick = ocultarPanel


const mostrarPanel = () => {
    barraLateralImagen.style.display = "inline"
}
botonDeAperturaBarraImagen.onclick = mostrarPanel