const vinosT = async () => {
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel.json");
    let data = await response.json();
    data.forEach(item => {
        const { img, nombre, precio, id } = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">$${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        fragmento1.append(productos);
    });
    contenedorTintos.append(fragmento1)
};
const vinosB = async () => {
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel2.json");
    let data = await response.json();
    data.forEach(item => {
        const { img, nombre, precio, id } = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">$${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        fragmento2.append(productos);
    });
    contenedorBlancos.append(fragmento2)
};
const vinosR = async () => {
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel3.json");
    let data = await response.json();
    data.forEach(item => {
        const { img, nombre, precio, id } = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">$${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        fragmento3.append(productos);
    });
    contenedorRosados.append(fragmento3);
};
const vinosE = async () => {
    let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/ProductosBel4.json");
    let data = await response.json();
    data.forEach(item => {
        const { img, nombre, precio, id } = item;
        let productos = document.createElement("div")
        productos.className = "card col-xs-12 col-md-6 col-lg-3 col-xl-3 my-3";
        productos.innerHTML = `
            <img src="${img}" alt="${nombre}" style="width:100%">
            <h1 class="text-center" >${nombre}</h1>
            <p class="price">$${precio}</p> 
            <h4>Unidad por Caja</h4>
            <p><button id="${id}" class="agregar-al-carro" >Agregar al carrito</button></p>
        `
        fragmento4.append(productos);
    });
    contenedorEspumantes.append(fragmento4);
};
vinosT();
vinosB();
vinosR();
vinosE();