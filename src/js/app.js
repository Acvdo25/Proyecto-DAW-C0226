if (!localStorage.getItem('usuarios')) {
    const usuariosIniciales = [
        { email: 'admin@aneon.com', password: 'adminadmin', rol: 'admin', nombre: 'Administrador General' },
        { email: 'cliente@aneon.com', password: 'adminadmin', rol: 'cliente', nombre: 'Dennisito' }
    ];
    localStorage.setItem('usuarios', JSON.stringify(usuariosIniciales));
}

// Obtener sesión actual
function getSesionActual() {
    return JSON.parse(localStorage.getItem('sesionActual')) || null;
}

async function cargarHeader(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    try {
        const enPages = window.location.pathname.includes('/src/pages/');
        const rutaHeader = enPages ? '../layout/header.html' : 'src/layout/header.html';

        const respuesta = await fetch(rutaHeader);
        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar el header (Código: ${respuesta.status})`);
        }
        
        const html = await respuesta.text();
        contenedor.innerHTML = html;

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