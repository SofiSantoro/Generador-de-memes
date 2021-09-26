//CONSTANTES//

const barraLateralImagen = document.getElementById("panelImagen")  //id del <aside> de panel de imagen
const barraLateralTexto = document.getElementById("panelTexto")  //id del <aside> de panel de texto


const botonDeAperturaBarraImagen = document.getElementById("botonImagen")  //id del <button> imagen
const botonDeAperturaBarraTexto = document.getElementById("botonTexto")  //id del <button> texto
  
const botonPanelTexto = document.getElementById("botonMostrarOcultarPanelTexto") // id del boton cerrar panel texto
const botonDeCierreImagen = document.getElementById("botonMostrarOcultar") //id del boton cerrar panel imagen


const mostrarImagenMeme = document.getElementById("imagenDeMeme") //id de la imagen que se ingresa

const inputImagen = document.getElementById("inputImagen")

const color = document.getElementById("header")
const botonModoOscuro = document.getElementById("botonModoOscuro")
const botonModoClaro = document.getElementById("botonModoClaro")
const botonTexto = document.getElementById("botonTexto")

const inputTextoSuperior = document.getElementById("inputTextoSuperior")
const resultadoInputSuperior = document.getElementById("respuesta-input-superior") //id del <p> top text
const inputTextoInferior = document.getElementById("inputTextoIferior") //id del <textarea> del bottom text
const resultadoInputInferior = document.getElementById("respuesta-input-inferior") //id del <p> bottom text

const botonDescarga = document.getElementById("descargar-meme")


//PANELES//


const ocultarPanel = () => {
    barraLateralImagen.style.display = "none"
    barraLateralTexto.style.display = "none"
}
botonDeCierreImagen.onclick = ocultarPanel


const mostrarPanel = () => {
    barraLateralImagen.style.display = "block"
    barraLateralTexto.style.display = "none"
}
botonDeAperturaBarraImagen.onclick = mostrarPanel


const ocultarPanelTexto = () => {
    barraLateralTexto.style.display = "none"
}
botonPanelTexto.onclick = ocultarPanelTexto

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
// Esta manera de implementar el modo oscuro / claro es correcta, pero creo que no es escalable. 
// Es decir, a futuro, si tu web crece, se le agregan secciones, etc, va a ser imposible
// seguir agregando cosas a esta funcion. 
// Una alternativa mas escalable es la que mencioné en clase: darle una clase al body cuando 
// se agrega modo-oscuro o modo-claro, y en el CSS darle estilos distintos a los descendientes 
// Si te genera dudas como hacerlo no dejes de escribirme. 

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
    botonDescarga.style.background = "black"
    botonDescarga.style.color = "white"
    botonPanelTexto.style.background = "black"
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
    botonDescarga.style.background = "rgb(236, 179, 72)"
    botonDescarga.style.color = "black"
    botonPanelTexto.style.background = "palevioletred"
}
botonModoClaro.onclick = modoClaro

//TOP-BOTTOM TEXT


const cambiarColorTexto = document.getElementById("blend-de-color")

inputTextoSuperior.oninput = () => {
    resultadoInputSuperior.textContent = inputTextoSuperior.value
}

cambiarColorTexto.oninput = () => {
    resultadoInputSuperior.style.color = cambiarColorTexto.value
    resultadoInputInferior.style.color = cambiarColorTexto.value

}

inputTextoInferior.oninput = () => {
    resultadoInputInferior.textContent = inputTextoInferior.value
}

//FILTROS

const actualizarBrillo = document.getElementById("sliderbrillo")
const actualizarOpacidad = document.getElementById("slider-opacidad")
const actualizarContraste = document.getElementById("slider-contraste")
const actualizarDesenfoque = document.getElementById("slider-desenfoque")
const actualizarEscalaDeGrises = document.getElementById("slider-escala-de-grises")
const actualizarSepia = document.getElementById("slider-sepia")
const actualizarHue = document.getElementById("slider-hue")
const actualizarSaturado = document.getElementById("slider-saturado")
const actualizarNegativo = document.getElementById("slider-negativo")

const botonReestablecerFiltros = document.getElementById("reestablecer-filtros")


const actualizarFiltros = () => {
// Algunos de estos elementos deben llevar la palabra "px" al final, algunos "deg", algunos "%". 
// Repasá cada uno para poder escribir bien esta orden, si no no te va a funcionar
  mostrarImagenMeme.style.filter = "brightness(" + actualizarBrillo.value + ")" ; "grayscale(" + actualizarEscalaDeGrises.value + ")" ; "opacity(" + actualizarOpacidad.value + ")" ; "contrast(" + actualizarContraste.value + ")" ; "blur(" + actualizarDesenfoque.value + ")" ; "grayscale(" + actualizarEscalaDeGrises.value + ")" ; "sepia(" + actualizarSepia.value + ")" ; "hue-rotate(" + actualizarHue.value + ")" ; "saturate(" + actualizarSaturado.value + ")" ; "invert(" + actualizarNegativo.value + ")"
  
}
actualizarBrillo.addEventListener('change', actualizarFiltros);
actualizarOpacidad.addEventListener('change', actualizarFiltros);
actualizarContraste.addEventListener('change', actualizarFiltros);
actualizarDesenfoque.addEventListener('change', actualizarFiltros);
actualizarEscalaDeGrises.addEventListener('change', actualizarFiltros);
actualizarSepia.addEventListener('change', actualizarFiltros);
actualizarHue.addEventListener('change', actualizarFiltros);
actualizarSaturado.addEventListener('change', actualizarFiltros);
actualizarNegativo.addEventListener('change', actualizarFiltros);

const reestablecerFiltrosOriginales = () => {
    actualizarBrillo.value = 1
    actualizarOpacidad.value = 1
    actualizarDesenfoque.value = 0
    actualizarContraste.value = 100
    actualizarEscalaDeGrises.value = 0
    actualizarHue.value = 0
    actualizarSepia.value = 0
    actualizarSaturado.value = 100
    actualizarNegativo.value = 0

    actualizarFiltros()
}
botonReestablecerFiltros.onclick = reestablecerFiltrosOriginales


//ALINEACION DE TEXTO

const botonAlineacionIzq = document.getElementById("boton-alineacion-izq")
const botonAlineacionCentro = document.getElementById("boton-alineacion-centro")
const botonAlineacionDer = document.getElementById("boton-alineacion-derecha")

botonAlineacionIzq.onclick = () => {
    resultadoInputSuperior.style.textAlign = "left" 
    resultadoInputInferior.style.textAlign = "left" 
}
botonAlineacionCentro.onclick = () => {
    resultadoInputSuperior.style.textAlign = "center" 
    resultadoInputInferior.style.textAlign = "center" 
}
botonAlineacionDer.onclick = () => {
    resultadoInputSuperior.style.textAlign = "right" 
    resultadoInputInferior.style.textAlign = "right" 
}

//FUENTE

const resultadoFuente = document.getElementById("selector-de-fuente")
const resultadoTamanio = document.getElementById("tamanio-de-fuente")
const cambiarFondoTexto = document.getElementById("blend-de-color-fondo")

const actualizarFuente = (event) => {
    // si aprovechas bien tu value, esta funcion puede ser mucho mas sencilla
    // const actualizarFuente = (event) => {
    //     resultadoInputSuperior.style.fontFamily = event.target.value
    // }
    if(event.target.value === "Arial"){
        resultadoInputSuperior.style.fontFamily = "Arial" 
        resultadoInputInferior.style.fontFamily = "Arial"  
    }
    else if(event.target.value === "Arial Black"){
        resultadoInputSuperior.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" 
        resultadoInputInferior.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" 
    }
    else if(event.target.value === "Roboto"){
        resultadoInputSuperior.style.fontFamily = "'Roboto', sans-serif" 
        resultadoInputInferior.style.fontFamily = "'Roboto', sans-serif" 
    }
    else if(event.target.value === "cursive"){
        resultadoInputSuperior.style.fontFamily = "cursive" 
        resultadoInputInferior.style.fontFamily = "cursive" 
    }
    else if(event.target.value === "Times New Roman"){
        resultadoInputSuperior.style.fontFamily = "Georgia, 'Times New Roman', Times, serif" 
        resultadoInputInferior.style.fontFamily = "Georgia, 'Times New Roman', Times, serif" 
    }
    else if(event.target.value === "Permanent Marker"){
        resultadoInputSuperior.style.fontFamily = "'Permanent Marker', cursive" 
        resultadoInputInferior.style.fontFamily = "'Permanent Marker', cursive" 
    }
    else if(event.target.value === "Verdana"){
        resultadoInputSuperior.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif" 
        resultadoInputInferior.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif" 
    }
    else if(event.target.value === "Patua One"){
        resultadoInputSuperior.style.fontFamily = "font-family: 'Patua One', cursive" 
        resultadoInputInferior.style.fontFamily = "font-family: 'Patua One', cursive" 
    }
  }
resultadoFuente.addEventListener("change", actualizarFuente)

//Alineacion de texto

const actualizarTamanioTexto = () => {
    const tamanio = resultadoTamanio.value
  
    resultadoInputSuperior.style.fontSize = `${tamanio}px`
    resultadoInputInferior.style.fontSize = `${tamanio}px`
}
resultadoTamanio.oninput = actualizarTamanioTexto

//Color fondo de texto

cambiarFondoTexto.oninput = () => {
    resultadoInputSuperior.style.background = cambiarFondoTexto.value
    resultadoInputInferior.style.background = cambiarFondoTexto.value

}

//Sin texto superior

const contenedorTextoSup = document.getElementById("contenedor-texto-superior")
const contenedorTextoInf = document.getElementById("contenedor-texto-inferior")
const textoSuperiorChecked = document.getElementById("texto-superior-checked")
const textoInferiorCkecked = document.getElementById("texto-inferior-ckecked")


const aplicarRemoverTextos = () => {
    if (textoSuperiorChecked.checked) {
      contenedorTextoSup.classList.add('oculto')
    } else {
      contenedorTextoSup.classList.remove('oculto')
    }
  
    if (textoInferiorCkecked.checked) {
        contenedorTextoInf.classList.add('oculto')
    } else {
        contenedorTextoInf.classList.remove('oculto')
    }
}
textoSuperiorChecked.addEventListener("change", aplicarRemoverTextos)
textoInferiorCkecked.addEventListener("change", aplicarRemoverTextos)

//DESCARGAR IMAGEN

const imagenContainer = document.getElementById("imagen-container")

botonDescarga.onclick = () => {
    domtoimage.toBlob(imagenContainer).then(function (blob) {
      window.saveAs(blob, 'aqui-esta-su-meme.png')
    })
  }