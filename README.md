# 🛒 ANEON Store - Proyecto de Cátedra DAW901

¡Bienvenidos al repositorio de nuestro proyecto de cátedra! Este proyecto consiste en una aplicación web de comercio electrónico (E-commerce) diseñada para un emprendimiento de accesorios electrónicos llamada **ANEON**.

🔗 **Enlace del sitio web en vivo:** [https://snazzy-fox-03b422.netlify.app/](https://snazzy-fox-03b422.netlify.app/)

---

## 👥 Integrantes del Equipo

 ANGEL MAURICIO ACEVEDO GUARDADO - AG262280
 DENNIS ALEXANDER GONZALES SALINAS - GS262573

---

## 🚀 ¿De qué trata el proyecto?

ANEON es una tienda en línea enfocada en la venta de accesorios para dispositivos móviles (como iPhone, Samsung y Huawei). La página permite a cualquier visitante explorar un catálogo de productos, registrarse, iniciar sesión con diferentes roles (Cliente o Administrador), agregar accesorios a un carrito de compras, generar un ticket único de compra y dar seguimiento a sus pedidos.

A diferencia de las aplicaciones de una sola página (SPA), nuestro proyecto está construido utilizando **múltiples archivos HTML independientes** organizados en carpetas de manera ordenada, lo que facilita entender cómo se comunican las distintas vistas de un sitio web.

---

## 🛠️ Tecnologías Utilizadas

Para desarrollar este proyecto hemos utilizado las herramientas básicas aprendidas en clase:

- **HTML5:** Para estructurar el contenido de todas las páginas de forma semántica.
- **CSS3 y Bootstrap 5:** Para darle diseño, colores y lograr que la página sea responsiva (es decir, que se vea bien tanto en computadoras como en celulares).
- **JavaScript Vanilla (Puro):** Para darle vida e interactividad a la página (validar formularios, calcular precios, manejar el carrito y hacer la lógica de los usuarios).
- **LocalStorage:** Lo utilizamos como una pequeña base de datos local en el navegador para guardar los productos, los usuarios, el carrito y los tickets sin necesidad de un servidor externo.

---

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera para mantener un código limpio y ordenado:

- `/index.html` → Página principal (Catálogo de productos de la tienda).
- `/src/layout/header.html` → Componente externo del menú de navegación superior que se comparte en todas las páginas.
- `/src/js/app.js` → Archivo principal con la lógica de datos y funciones globales.
- `/src/pages/` → Carpeta que contiene las vistas secundarias:
  - `login.html` e `registro.html` → Módulos para entrar o crear una cuenta nueva.
  - `carrito.html` → Vista donde el cliente revisa sus compras y genera su ticket.
  - `historial.html` → Donde el cliente ve el estado de sus pedidos realizados.
  - `admin.html` → Panel exclusivo del administrador para agregar, editar o eliminar productos (CRUD) y marcar pedidos como entregados.

---

## 🔑 Cuentas de Prueba para la Defensa

Para probar el sistema rápidamente y ver ambos roles, puedes utilizar las siguientes credenciales que vienen configuradas por defecto:

- **Cuenta de Administrador (Panel Admin):**
  - **Correo:** `admin@aneon.com`
  - **Contraseña:** `adminadmin`

- **Cuenta de Cliente (Comprador):**
  - **Correo:** `cliente@aneon.com`
  - **Contraseña:** `adminadmin`

---
