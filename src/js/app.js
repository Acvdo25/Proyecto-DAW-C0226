// Productos por Defecto
if (!localStorage.getItem('productos')) {
    const productosIniciales = [
        // Productos originales
        { id: 1, nombre: 'Audífonos Inalámbricos Pro', precio: 45.99, categoria: 'Audio', stock: 15, imagen: 'https://tiendaintelmax.net/images/productos/audifonos-inalambricos-skullcandy-push-play-active-true-wireless-inear-black-orange-s2ppws749-aud1209.jpg' },
        { id: 2, nombre: 'Cargador Rápido USB-C 65W', precio: 25.50, categoria: 'Carga', stock: 20, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQz6PRkWNeRAxGeQF0R-TG6QAvwCRr0RBQGqNynCVGg&s' },
        { id: 3, nombre: 'Smartwatch Deportivo X', precio: 89.99, categoria: 'Wearables', stock: 8, imagen: 'https://images.shiftdigital.com.ar/20323/1.jpg?v=1747336469' },
        //Iphone
        { id: 4, nombre: 'MagSafe Charger para iPhone', precio: 39.99, categoria: 'Carga Apple', stock: 25, imagen: 'https://api.zonadigitalsv.com/storage/products/imagen_generada681b8fff7c817.jpg' },
        { id: 5, nombre: 'AirPods Silicón Case Protective', precio: 19.99, categoria: 'Protección', stock: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVT6FYCx_K0-TZlJYooHYf5Aui9sHsZ6Eq2p8BRJ6ApA&s=10' },
        { id: 6, nombre: 'Cable Lightning a USB-C Original', precio: 22.00, categoria: 'Conectividad', stock: 40, imagen: 'https://cdtechnologia.net/39027-large_default/cable-usb-c-a-lightning-de-1-metro.jpg' },
        //samsung
        { id: 7, nombre: 'Samsung Super Fast Wall Charger 45W', precio: 34.99, categoria: 'Carga Samsung', stock: 18, imagen: 'https://i5.walmartimages.com/seo/Original-Samsung-45W-Super-Fast-Charger-USB-C-Cable-Compatible-Galaxy-Book-12-Samsung-wall-charger-45-Watt-Super-fast-charge-capability-USB-C-USB-C-C_b56c2ba2-628d-465a-b494-9171cec1c68f.dd1fcd7856e67bff9647517acfaa62cb.jpeg' },
        { id: 8, nombre: 'Galaxy Buds Wireless Earbuds', precio: 79.99, categoria: 'Audio', stock: 12, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQba0xnjSDgzpldFk2LhnUFMBfRz2l3fay2BfNpzBJpjw&s=10' },
        { id: 9, nombre: 'Samsung Wireless Power Bank 10000mAh', precio: 49.99, categoria: 'Carga', stock: 14, imagen: 'https://vookamarketplace.fra1.digitaloceanspaces.com/vooka/products/samsung-wireless-power-bank-10000mah-smartphones-planet05-09-2024-1725501099.webp' },
        //Huawei
        { id: 10, nombre: 'Huawei FreeBuds SE 2', precio: 49.99, categoria: 'Audio', stock: 10, imagen: 'https://m.media-amazon.com/images/I/61rSuM8ACuL._AC_UF1000,1000_QL80_.jpg' },
        { id: 11, nombre: 'Huawei SuperCharge Power Adapter 66W', precio: 29.99, categoria: 'Carga Huawei', stock: 22, imagen: 'https://images-cdn.ubuy.com.bd/655db0013b83504ce44032ca-original-huawei-66w-supercharge.jpg' },
        { id: 12, nombre: 'Smart Band Huawei Sport Fit', precio: 59.99, categoria: 'Wearables', stock: 16, imagen: 'https://siman.vtexassets.com/arquivos/ids/7176732-800-auto?v=638912183505270000&width=800&height=auto&aspect=true' }
    ];
    localStorage.setItem('productos', JSON.stringify(productosIniciales));
}

if (!localStorage.getItem('usuarios')) {
    const usuariosIniciales = [
        { email: 'admin@aneon.com', password: 'adminadmin', rol: 'admin', nombre: 'Administrador General' },
        { email: 'cliente@aneon.com', password: 'adminadmin', rol: 'cliente', nombre: 'Dennisito' }
    ];
    localStorage.setItem('usuarios', JSON.stringify(usuariosIniciales));
}

if (!localStorage.getItem('pedidos')) { localStorage.setItem('pedidos', JSON.stringify([])); }
if (!localStorage.getItem('carrito')) { localStorage.setItem('carrito', JSON.stringify([])); }

// Obtener sesión actual
function getSesionActual() {
    return JSON.parse(localStorage.getItem('sesionActual')) || null;
}

async function cargarHeader(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    try {
        // Detectar automáticamente si estamos en la raíz o en una subcarpeta (pages)
        const enPages = window.location.pathname.includes('/src/pages/');
        const rutaHeader = enPages ? '../layout/header.html' : 'src/layout/header.html';

        const respuesta = await fetch(rutaHeader);
        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar el header (Código: ${respuesta.status})`);
        }
        
        const html = await respuesta.text();
        contenedor.innerHTML = html;

        // Actualizar los enlaces del menú según la sesión activa
        actualizarMenuSegunSesion();
    } catch (error) {
        console.error('Error al cargar el header:', error);
    }
}

// Pintar los enlaces del menú según el rol o si hay sesión iniciada
function actualizarMenuSegunSesion() {
    const sesion = getSesionActual();
    const ulLinks = document.getElementById('dinamicNavLinks');
    if (!ulLinks) return;

    const enPages = window.location.pathname.includes('/src/pages/');
    const prefix = enPages ? "" : "src/pages/";
    const homePath = enPages ? "../../index.html" : "index.html";

    let html = `<li class="nav-item"><a class="nav-link text-white" href="${homePath}">Catálogo</a></li>`;

    if (!sesion) {
        html += `
            <li class="nav-item"><a class="nav-link text-white" href="${prefix}login.html">Iniciar Sesión</a></li>
            <li class="nav-item"><a class="btn btn-outline-light ms-2" href="${prefix}registro.html">Registrarse</a></li>
        `;
    } else {
        if (sesion.rol === 'cliente') {
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            html += `
                <li class="nav-item"><a class="nav-link text-white" href="${prefix}carrito.html"><i class="fa-solid fa-cart-shopping"></i> Carrito (${carrito.length})</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="${prefix}historial.html">Mis Compras</a></li>
            `;
        } else if (sesion.rol === 'admin') {
            html += `
                <li class="nav-item"><a class="nav-link text-warning fw-bold" href="${prefix}admin.html"><i class="fa-solid fa-gauge"></i> Panel Admin</a></li>
            `;
        }
        html += `
            <li class="nav-item text-light ms-3">Hola, ${sesion.nombre}</li>
            <li class="nav-item"><button class="btn btn-danger btn-sm ms-3" onclick="cerrarSesion(${enPages})">Cerrar Sesión</button></li>
        `;
    }
    ulLinks.innerHTML = html;
}

function cerrarSesion(enPages) {
    localStorage.removeItem('sesionActual');
    localStorage.setItem('carrito', JSON.stringify([]));
    window.location.href = enPages ? '../../index.html' : 'index.html';
}