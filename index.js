//CONSTANTES//

const barraLateralImagen = document.getElementById("panelImagen")  //id del <aside> de panel de imagen
const barraLateralTexto = document.getElementById("panelTexto")  //id del <aside> de panel de texto


const botonDeAperturaBarraImagen = document.getElementById("botonImagen")  //id del <button> imagen
const botonDeAperturaBarraTexto = document.getElementById("botonTexto")   //id del <button> texto

const botonDeCierreImagen = document.getElementById("botonMostrarOcultar") //id del boton cerrar panel


const mostrarImagenMeme = document.getElementById("imagenDeMeme") //id de div negro

const inputImagen = document.getElementById("inputImagen")

const color = document.getElementById("header")
const botonModoOscuro = document.getElementById("botonModoOscuro")
const botonModoClaro = document.getElementById("botonModoClaro")
const botonTexto = document.getElementById("botonTexto")

const inputTextoSuperior = document.getElementById("inputTextoSuperior")
const resultadoInputSuperior = document.getElementById("respuesta-input-superior") //id del <p> top text
const inputTextoInferior = document.getElementById("inputTextoIferior") 
const resultadoInputInferior = document.getElementById("respuesta-input-inferior") //id del <p> bottom text


//PANELES//

const ocultarPanel = () => {
    barraLateralImagen.style.display = "none"

}
botonDeCierreImagen.onclick = ocultarPanel


const mostrarPanel = () => {
    barraLateralImagen.style.display = "block"
    barraLateralTexto.style.display = "none"
}
botonDeAperturaBarraImagen.onclick = mostrarPanel


// const ocultarPanelTexto = () => {
//     barraLateralTexto.style.display = "none"
// }
// botonDeCierreImagen.onclick = ocultarPanelTexto

const mostrarPanelTexto = () => {
    barraLateralTexto.style.display = "block"
    barraLateralImagen.style.display = "none"
}
botonDeAperturaBarraTexto.onclick = mostrarPanelTexto



//IMAGEN DE MEME//

inputImagen.oninput = () => {
    mostrarImagenMeme.src = inputImagen.value
}



//MODO OSCURO//

const modoOscuro = () => {
    color.style.background = "black"
    botonDeAperturaBarraImagen.style.background = "gray"
    botonTexto.style.background = "gray"
    barraLateralImagen.style.background = "gray"
    barraLateralTexto.style.background = "gray"
    botonDeCierreImagen.style.background = "black"
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
    barraLateralTexto.style.background = "palevioletred"
    botonDeCierreImagen.style.background = "palevioletred"
    botonDeCierreImagen.style.color = "wheat"
    botonModoClaro.style.display = "none"
    botonModoOscuro.style.background = "rgb(236, 179, 72)"
    botonModoOscuro.style.display = "inline"
}
botonModoClaro.onclick = modoClaro

//TOP-BOTTOM TEXT


const cambiarColorTexto = document.getElementById("blend-de-color")

inputTextoSuperior.oninput = () => {
    resultadoInputSuperior.textContent = inputTextoSuperior.value
}

cambiarColorTexto.oninput = () => {
    resultadoInputSuperior.style.color = cambiarColorTexto.value
}

inputTextoInferior.oninput = () => {
    resultadoInputInferior.textContent = inputTextoInferior.value
}