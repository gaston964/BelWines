const vinosT = async () => {
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel.json");
    let data = await response.json();
    data.forEach(item => {
        const {img,nombre,precio,id} = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        contenedorTintos.append(productos);
    });
};
const vinosB = async () =>{
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel2.json");
    let data = await response.json();
    data.forEach(item => {
        const {img,nombre,precio,id} = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        contenedorBlancos.append(productos);
    });
};
const vinosR = async () =>{
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel3.json");
    let data = await response.json();
    data.forEach(item => {
        const {img,nombre,precio,id} = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        contenedorRosados.append(productos);
    });
};
const vinosE = async () => {
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel4.json");
    let data = await response.json();
    data.forEach(item => {
        const {img,nombre,precio,id} = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        contenedorEspumantes.append(productos);
    });
};
vinosT();
vinosB();
vinosR();
vinosE();





/* const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodId){
                prod.cantidad++
                prod.precio += prod.precio
            }
        })
    }else{
        let item = productos.find((prod) => prod.id === prodId);
        carrito.push({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad : 1
        });
    }
    actualizarCarrito();
}; */

/* const actualizarCarrito = () => {
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
} */