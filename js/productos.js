let contenedorTintos = document.getElementById("contenedorTintos");
let contenedorBlancos = document.getElementById("contenedorBlancos");
let contenedorRosados = document.getElementById("contenedorRosados");
let contenedorEspumantes = document.getElementById("contenedorEspumantes");

const vinosTintos = [
{id: 1, nombre: "Atilio Avena Línea Franco " , precio: 1500, img : "../resources/Atilio Avena4.jpg"},
{id: 2, nombre: "Atilio Avena Roble Malbec" , precio: 1500, img : "../resources/Atilio Avena2.jpg"},
{id: 3, nombre: "Atilio Avena- Atilio Malbec" , precio: 1500, img : "../resources/Atilio Avena3.jpg"},
{id: 4, nombre: "Bodegas López- López Malbec" , precio: 1500, img : "../resources/Bodegas Lopez.jpg"},
{id: 5, nombre: "Bodegas López Vasco Viejo Edición Vintage Malbec" , precio: 1500, img : "../resources/Bodegas Lopez2.jpg"},
{id: 6, nombre: "Bodegas López Vasco Viejo Blend de tintos" , precio: 1500, img : "../resources/Bodegas Lopez3.jpg"},
{id: 7, nombre: "Bodegas López Vasco Viejo Blend de blancos" , precio: 1500, img : "../resources/Bodegas Lopez4.jpg"},
{id: 8, nombre: "Don Bosco Reserva Malbec" , precio: 1500, img : "../resources/Don Bosco.jpg"},
{id: 9, nombre: "Don Bosco Otro Loco Más Malbec" , precio: 1500, img : "../resources/Don Bosco2.jpg"},
{id: 10, nombre: "Melipal Malbec" , precio: 1500, img : "../resources/Melipal Malbec.jpeg"},
{id: 11, nombre: "Mosquita Muerta Wines Cordero con piel de Lobo Malbec" , precio: 1500, img : "../resources/Mosquita Muerta.jpg"},
{id: 12, nombre: "Richardi Fazio Menegazzo Linea Rimé Blend Alta Gama Malbec Cabernet Sauvignon" , precio: 1500, img : "../resources/Richardi Fazio3.jpg"},
{id: 13, nombre: "Richardi Fazio Menegazzo Línea Rime Malbec Varietal" , precio: 1500, img : "../resources/Richardi Fazio4.jpg"},
];
const vinosBlancos = [
    {id: 1, nombre: "Don Bosco Otro Loco Más Ice" , precio: 1500, img: "../resources/Don Bosco Otro Loco Más Ice.jpg"},
    {id: 2, nombre: "Jorge Rubio Finca Gabriel Jóvenes Cosecha Tardía" , precio: 1500, img: "../resources/Jorge Rubio2.jpg"},
];
const vinosRosados = [
    {id: 1, nombre: "Jorge Rubio- Finca Gabriel Jóvenes Rosé Syrah" , precio: 1500, img: "../resources/Jorge Rubio.jpeg"},
    {id: 2, nombre: "Atilio Avena Shiraz Rose" , precio: 1500, img: "../resources/Atilio Avena.jpg"},
];
const vinosEspumantes = [
    {id: 1, nombre: "Richardi Fazio Menegazzo Línea Canai Espumante Moulin Bleu Rosado Dulce" , precio: 1500, img: "../resources/Richardi Fazio.jpg"},
    {id: 2, nombre: "Richardi Fazio Menegazzo Línea Canai Espumante Moulin Bleu Extra Dulce" , precio: 1500, img: "../resources/Richardi Fazio2.jpg"},
];
vinosTintos.forEach(item => {
    let productos = document.createElement("div")
    productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
    productos.innerHTML = `
        <img src="${item.img}" alt="${item.nombre}" style="width:100%">
        <h1 class="text-center" >${item.nombre}</h1>
        <p class="price">$${item.precio} x caja</p>
        <p><button id="${item.id}" >Agregar al carrito</button></p>
    `
    contenedorTintos.append(productos);
})
vinosBlancos.forEach(item => {
    let productos = document.createElement("div")
    productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
    productos.innerHTML = `
        <img src="${item.img}" alt="${item.nombre}" style="width:100%">
        <h1 class="text-center" >${item.nombre}</h1>
        <p class="price">$${item.precio} x caja</p>
        <p><button id="${item.id}" >Agregar al carrito</button></p>
    `
    contenedorBlancos.append(productos);
})
vinosRosados.forEach(item => {
    let productos = document.createElement("div")
    productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
    productos.innerHTML = `
        <img src="${item.img}" alt="${item.nombre}" style="width:100%">
        <h1 class="text-center" >${item.nombre}</h1>
        <p class="price">$${item.precio} x caja</p>
        <p><button id="${item.id}" >Agregar al carrito</button></p>
    `
    contenedorRosados.append(productos);
})
vinosEspumantes.forEach(item => {
    let productos = document.createElement("div")
    productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
    productos.innerHTML = `
        <img src="${item.img}" alt="${item.nombre}" style="width:100%">
        <h1 class="text-center" >${item.nombre}</h1>
        <p class="price">$${item.precio} x caja</p>
        <p><button id="${item.id}" >Agregar al carrito</button></p>
    `
    contenedorEspumantes.append(productos);
})