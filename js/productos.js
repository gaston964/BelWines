let contenedorTintos = document.getElementById("contenedorTintos");
let contenedorBlancos = document.getElementById("contenedorBlancos");
let contenedorRosados = document.getElementById("contenedorRosados");
let contenedorEspumantes = document.getElementById("contenedorEspumantes");
let contenedorCarrito = document.getElementById("contenedor-carrito");
let botonComprar = document.getElementById("boton-comprar");
let botonVaciar = document.getElementById("boton-vaciar");
let contadorCarrito = document.getElementById("contador-carrito");
let precioTotal = document.getElementById("precio-total");
let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito();
    }
});
botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
    carrito = JSON.parse(localStorage.getItem("carrito"));
    localStorage.clear("carrito");
});
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
    let boton = document.getElementById(item.id);
    boton.addEventListener("click", () => {
        agregarAlCarrito(item.id);
    })
});
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
});
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
});
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
});
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodId){
                prod.cantidad++
                prod.precio += prod.precio
            }
        })
    }else{
        let item = vinosTintos.find((prod) => prod.id === prodId);
        carrito.push({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad : 1
        });
    }
    actualizarCarrito();
};
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
};
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        let div = document.createElement("div");
        div.className = "contenedor__carrito my-2";
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></button>
        `
        contenedorCarrito.append(div);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}