let contenedorCarrito = document.getElementById("contenedor-carrito");
let contenedorTintos = document.getElementById("contenedorTintos");
let contenedorBlancos = document.getElementById("contenedorBlancos");
let contenedorRosados = document.getElementById("contenedorRosados");
let contenedorEspumantes = document.getElementById("contenedorEspumantes");
let botonComprar = document.getElementById("boton-comprar");
let botonVaciar = document.getElementById("boton-vaciar");
let contadorCarrito = document.getElementById("contador-carrito");
let precioTotal = document.getElementById("precio-total");
let fragmento1 = document.createDocumentFragment();
let fragmento2 = document.createDocumentFragment();
let fragmento3 = document.createDocumentFragment();
let fragmento4 = document.createDocumentFragment();
let wapi = document.getElementById("wapi");
let carrito = [];
cargarEventos();
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
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
function cargarEventos() {
    contenedorTintos.addEventListener("click", agregarAlCarrito);
    contenedorBlancos.addEventListener("click", agregarAlCarrito);
    contenedorRosados.addEventListener("click", agregarAlCarrito);
    contenedorEspumantes.addEventListener("click", agregarAlCarrito);
};
function agregarAlCarrito(e) {
    if (e.target.classList.contains("agregar-al-carro")) {
        const prodSelec = e.target.parentElement.parentElement;
        dataProduc(prodSelec);
        /* console.log(localStorage.getItem("carrito", JSON.stringify(carrito))); */
    }
};
function dataProduc(product) {
    const infoProd = {
        nombre: product.querySelector("h1").textContent,
        precio: Number(product.querySelector(".price").innerText.replace("$","")),
        id: product.querySelector("button").id,
        cantidad: 1,
        total: 0
    }
    infoProd.total = infoProd.precio * infoProd.cantidad;
    const existe = carrito.some(product => product.id === infoProd.id)
    if (existe) {
        const prod = carrito.map(product => {
            if (product.id === infoProd.id) {
                product.cantidad++
                product.total = product.cantidad * product.precio
                return product; //retorna el objeto actualizado
            } else {
                return product; //retorna el objeto como entró
            }
        });
        carrito = [...prod]; //hace una copia del producto al carrito
    } else {
        //agrega elementos al carrito
        carrito = [...carrito, infoProd];
    }
    actualizarCarrito();
};
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const { nombre, precio, cantidad, id, total } = prod;
        let div = document.createElement("div");
        div.className = "contenedor__carrito my-2";
        div.innerHTML = `
        <p>${nombre}</p>
        <p>$${precio}</p>
        <p>Cantidad: <span id="cantidad">${cantidad}</span></p>
        <p>Total: ${total}</p>
        <button id="${id}" class="btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></button>
        `
        contenedorCarrito.append(div);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        let boton = document.getElementById(id);
        boton.addEventListener("click", (e) => {
            eliminarDelCarrito(e, id);
        })
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.total, 0);
};
const eliminarDelCarrito = (e, prodId) => {
    let botonclick = e.target;
    botonclick.parentElement.remove()
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
};
wapi.innerHTML= `
<a href="http://wa.me/542617234395?text=Su pedido es: ${localStorage.getItem("carrito", JSON.stringify(carrito))}" target="_blank"><img class="footer__img" src="../resources/whatsapp.png" alt="logo whatsapp">
+54 2617234395</a>
`;
