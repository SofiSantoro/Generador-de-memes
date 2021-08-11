//CONSTANTES//

const barraLateralImagen = document.getElementById("panelImagen")

const botonDecierreImagen = document.getElementById("botonMostrarOcultar")

const botonDeAperturaBarraImagen = document.getElementById("botonImagen")

const mostrarBarraLateralImagen = document.getElementById("panelImagen")

const mostrarImagenMeme = document.getElementById("imagenDeMeme")

const inputImagen = document.getElementById("inputImagen")

const color = document.getElementById("header")
const botonModoOscuro = document.getElementById("botonModoOscuro")
const botonModoClaro = document.getElementById("botonModoClaro")
const botonTexto = document.getElementById("botonTexto")


//PANELES//

const ocultarPanel = () => {
    barraLateralImagen.style.display = "NONE"
}
botonDecierreImagen.onclick = ocultarPanel


const mostrarPanel = () => {
    barraLateralImagen.style.display = "inline"
}
botonDeAperturaBarraImagen.onclick = mostrarPanel


//IMAGEN DE MEME//

// const imagen = () => {
//     mostrarImagenMeme.src = ""
// }
// inputImagen.onclick = imagen



//MODO OSCURO//

const modoOscuro = () => {
    color.style.background = "black"
    botonDeAperturaBarraImagen.style.background = "gray"
    botonTexto.style.background = "gray"
    barraLateralImagen.style.background = "gray"
    botonDecierreImagen.style.background = "black"
    botonModoClaro.style.display = "inline"
    botonModoClaro.style.background = "gray"
    botonModoOscuro.style.display = "none"
}
botonModoOscuro.onclick = modoOscuro

const modoClaro = () => {
    color.style.background = "rgb(236, 179, 72)"
    botonDeAperturaBarraImagen.style.background = "rgb(236, 179, 72)"
    botonTexto.style.background = "rgb(236, 179, 72)"
    barraLateralImagen.style.background = "palevioletred"
    botonDecierreImagen.style.background = "palevioletred"
    botonDecierreImagen.style.color = "wheat"
    botonModoClaro.style.display = "none"
    botonModoOscuro.style.background = "rgb(236, 179, 72)"
    botonModoOscuro.style.display = "inline"
}
botonModoClaro.onclick = modoClaro

