# Observaciones

Querida Sofi, felicitaciones por tu trabajo. Tu web se ve muy linda, la primera impresión es fantástica y se nota mucho el esfuerzo que pusiste.

Se que no llegaste con todo y hay cositas que quedaron a medias. No se si es falta de tiempo o que algunas cosas no quedaron claras - si es el segundo caso, me escribis? Feliz de asistirte con lo que no haya quedado claro. 

Lo que no me deja satisfecha es notar que, si bien hay una marcada mejora con respecto al portfolio, hay algunas indicaciones que te hice allí que se repiten aquí. Te aseguro que cada comentario que te marco es importante, son cosas que se te evaluarán en entrevitas y que tus líderes van a comentarte en el trabajo. Es importante que vayas reconociendo estas cosas en tu código para dejar de hacerlas cuanto antes. Para los próximos TPs es algo que te voy a pedir que vayas corrigiendo encarecidamente: necesito notar mejoras en los aspectos que te menciono, y que tomes seriamente las observaciones que te hago en la corrección. 

## Estructura correcta de documento HTML

Nuevamente repetís innecesariamente las reglas de google fonts. Si no quedó claro en la corrección anterior, te pido que me escribas y lo revisamos juntas. Esto afecta muy negativamente el tiempo de carga de tu página y te podría costar un trabajo si hacés eso en una entrevista. 

Nuevamente noto varios divs de más que podrían sacarse sin inconvenientes, aunque hay una marcada mejora aquí con respecto al portfolio. 

## Respeta el diseño dado

No cumplido, hay muchas cosas que están incompletas en el formulario y muchas decisiones de diseño que se alejan del modelo (distancias, tamaños). No hay problema en cambiar colores, fondos, tipografias para los TPs de Ada, pero es importante que vayas practicando desde ahora en copiar modelos fielmente, ya que eso es lo que se espera que hagas en el mundo laboral. El equipo de diseño de un trabajo va a obligarte a hacer tu trabajo de nuevo si no se respetan los márgenes, paddings o tamaños - prestales más atención desde ahora. 

## Respeta el funcionamiento

Lamentablemente el trabajo está muy incompleto en este sentido, hay muchas funcionalidades ausentes o que no funcionan como deberían. Faltó tiempo o no supiste como hacerlas?

- El input de imagen tiene un "value" fijo, lo que hace muy molesto rellenar el campo, y viola el diseño del modelo. 
- El input de color de fondo no funciona
- Los valores iniciales de los filtros estan mal, fijate en las consignas en donde están detallados. 
- Los filtros no funcionan, con excepción del de brillo
- Cuando sacamos el texto superior la imagen parece "moverse". Darle display none en este caso al parrafo no parece una buena idea ya que la imagen percibe que ese espacio dejó de ocuparse y se mueve en consecuencia. Hay que cubrir de alguna manera el espacio que antes ocupaba ese elemento. Dos sugerencias serían, en lugar de darle display none, darle visibility hidden o hacerlo transparente. o alcanza con darle display none, hay que cubrir de alfguna manera el espacio q ocupada ese elemento. 
- El color de fondo del texto no se aplica a todo el elemento. Eso es porque el margin no adquiere color de fondo - usá padding en esos casos para espaciar. 
- Las funciones de contorno, espaciado e interlineado no funcionan. 

## Responsive funciona correctamente

No cumplido, y no puedo enfatizar lo suficiente lo importante que es esto. Nuestra web no está completa si no se puede navegar desde celulares: la inmensa mayoría de nuestros usuarios van a entrar a nuestra web desde dispositivos móviles. El responsive no es un opcional, ni un agregado: es un requisito ineludible de toda web. 

## Buena estructura de proyecto

- La imagen, aunque sea solo una, debe estar en una carpeta "img" o "assets". 

- El archivo readme debe llamarse en mayusculas: README.md 

- Falta un favicon

## Código bien indentado

Nuevamente tenés el problema de no dejar el espaciado correcto en CSS. Como te comenté en la corrección del portfolio, en lugar de escribir por ejemplo `.name{`, deja un espacio entre el nombre de la clase y la llave: `.name {`

## Comentarios que permiten mejorar la legibilidad del código

No cumplido. Es importante que separes las secciones en HTML y CSS con comentarios. 

## Uso correcto de etiquetas semánticas

No cumplido en el caso de los h3. Te explico en la seccion de Accesiilidad por qué esto es importante. 

## Buenos nombres de clases

Marcada mejora con respecto al TP1, aunque ahora cometes el error de escribir los nombres de clases y ids  en camelCase, como en "imagenDeMeme". En HTML siempre separamos con guiones, eso incluye a las clases y a los ids. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Hay una mejora respecto al TP1 en el sentido de que no usas tantas ordenes de CSS que no necesitas, pero seguis teniendo algunas cositas innecesarias que te menciono

## Funciones pequeñas

Cumplido. 

## Accesibilidad

Cumplido a medias. Tu pagina es aceptable a nivel accesibilidad, pero hay muchisimo para mejorar. 
- Los label del formulario deben o bien rodear al elemento, o bien tener el atributo "for". Eso es asi para que el lector de pantalla pueda identificar a que elemento se esta describiendo. En tu caso el lector no sabe para que elemento es cada label. 
- Esto tambien impacta en la usabilidad. Cuando el label rodea al elemento, el click en el label es un click en el elemento. Esto ayuda por ejemplo a usuarios con dificultades motrices: es dificil hacer click en un checkbox chiquitito, pero mas facil hacer click en el label. Eso no ocurre en tu pagina. 
Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe 
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento. 
En muchisimas ocasiones esto no se cumple en su trabajo y eso impacta en la accesibilidad. 

- Los titulos no son label, ni viceversa. Un titulo es el encabezado de una seccion. Un elemento de formulario es descripto por un label. Recordá que el lector de pantalla separa los titulos de los elementos de formulario - como puede saber el usuario del lector de pantalla para que sirve el input de tipo color si no tiene ni label, ni aria-label?

- Faltan aria label en todos los elementos que en el diseño original no tienen label, como los botones de alineacion de texto y los select. 

- A tu imagen principal, la del meme, le falta el alt. Como va a saber el usuario de lector de pantalla que alli es donde se edita el meme?

## Commits con mensajes adecuados

Cumplido. 

# Nota final: 7

