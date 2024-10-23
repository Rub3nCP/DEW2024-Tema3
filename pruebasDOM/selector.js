//Seleccionar los botones 
let botones = document.querySelectorAll('button')
console.log('1', botones)

//Seleccionar los h1
let encabezados1 = document.querySelectorAll('h1')
console.log('2', encabezados1)

//Seleccionar solo el primer encabezado1
let primerEncabezado1 = document.querySelector('h1')
console.log('3', primerEncabezado1)

//Seleccionar el segundo encabezado1
console.log('4', encabezados1[1])

//Seleccionar elementos de la clase 'relevant'
let relevants = document.querySelectorAll('.relevant')
console.log('5', relevants)

//Seleccionar la etiqueta mark
let highlighted = document.querySelectorAll('mark')
console.log('6', highlighted)

//Seleccionar los li que son relevant
let liRelevant = document.querySelectorAll('li.relevant')
console.log('7', liRelevant)

//Seleccionar los elementos que son relevant y subline al mismo tiempo
let relevantSubline = document.querySelectorAll("a.relevant")
console.log('8', relevantSubline)

//Seleccionar los elementos que son relevant o subline al mismo tiempo
console.log('8b', document.querySelectorAll('.relevant, .subline'))

//Seleccionar los enlaces que están en el menú de navegación
let navLinks = document.querySelectorAll('nav a')
console.log('9', navLinks)

//Selecciona el botón que esta deshabilitado
let disabledButton = document.querySelectorAll('button:disabled')
console.log('10',disabledButton)

//Selecciona el botón que tiene alguna acción de click
let buttonClick = document.querySelectorAll('button[onclick]')
console.log('11', buttonClick)

//Selecciona el encabezado con identificador article2
console.log('12', document.querySelectorAll('h1#article2'))

//Selecciona los elementos subline que están dentro de un párrafo relevante
console.log('13', document.querySelectorAll('p.relevant .subline'))

//Selecciona los th del encabezado de la tabla
console.log('14', document.querySelectorAll('thead th'))

//Selecciona los th que son relevantes del encabezado de la tabla
console.log('15', document.querySelectorAll('thead th.relevant'))

//Selecciona los th que unen dos celdas de la fila 
console.log('16', document.querySelectorAll('th[colspan="2"]'))

//Selecciona el enlace que te dirige a las galletas
console.log('17', document.querySelectorAll('a[href="https://ieslasgalletas.org/"]'))

//Selecciona los enlaces externos a la web
console.log('18', document.querySelectorAll('a[href^="https://"]'))

//Selecciona los enlaces externos a la web que no son externos 
console.log('18b', document.querySelectorAll('a:not([href^="https://"]'))

//Selecciona los th relevantes del cuerpo de la tabla
console.log('19', document.querySelectorAll('tbody td.relevant'))

//Selecciona los encabezados1 que son hijos de primer nivel de un header
console.log('20', document.querySelectorAll('header > h1'))

//Selecciona las secciones que están debajo de un header (al mismo nivel)
console.log('21', document.querySelectorAll('header + section'))

//Selecciona la primera celda de cada fila del cuerpo de la tabla
console.log('22', document.querySelectorAll('td:first-child'))

//Selecciona la primera celda de cada fila del cuerpo de la tabla (tanto th como td)
console.log('22b', document.querySelectorAll('td:first-child, th:first-child'))

//Selecciona los td pares
console.log('23', document.querySelectorAll('td:nth-child(even)'))

//Selecciona párrafos que tengan dentro algún span. 
console.log('24', document.querySelectorAll('p:has(span)'))

//Selecciona el último elemento de cada lista.
console.log('25', document.querySelectorAll('li:last-child'))

//Selecciona la tercera columna del cuerpo de la tabla
console.log('26', document.querySelectorAll('tbody td:nth-child(3n)'))