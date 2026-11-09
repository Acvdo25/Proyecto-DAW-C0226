# 🛒 ANEON Store - Proyecto de Cátedra DAW901

¡Bienvenidos al repositorio de nuestro proyecto de cátedra! Este proyecto consiste en una aplicación web de comercio electrónico (E-commerce) diseñada para un emprendimiento de accesorios electrónicos llamada **ANEON**.

🔗 **Enlace del sitio web en vivo:** [https://snazzy-fox-03b422.netlify.app/](https://snazzy-fox-03b422.netlify.app/)

---

## 👥 Integrantes del Equipo

 ANGEL MAURICIO ACEVEDO GUARDADO - AG262280
 DENNIS ALEXANDER GONZALES SALINAS - GS262573


## 📘 Investigación del framework: React aplicado al proyecto

### 1. Introducción

Para el Avance 2 del proyecto de cátedra tuvimos que integrar un framework de JavaScript. Elegimos **React** y migramos los módulos principales que antes teníamos hechos con JavaScript vanilla. En esta sección explicamos qué es React.

### 2. ¿Qué es React?

React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario a partir de piezas independientes llamadas componentes (Meta Platforms, Inc., s. f.-a). Cada componente maneja su propio pedazo de pantalla y se puede reutilizar en varias vistas. Técnicamente React es una biblioteca y no un framework completo, pero junto con herramientas como React Router y Vite forma un entorno de trabajo equivalente al de un framework.

Los conceptos que más usamos fueron:

- **Componentes:** funciones que devuelven JSX, una sintaxis parecida a HTML dentro de JavaScript.
- **Props:** datos que un componente padre le pasa a un hijo.
- **Estado (`useState`):** datos que cambian y hacen que la pantalla se vuelva a dibujar.
- **Efectos (`useEffect`):** código que corre cuando el componente carga o cuando cambia algún dato, por ejemplo para llamar a una API.
- **Context API:** forma de compartir datos globales (como la sesión del usuario) sin pasarlos por todos los componentes.

### 3. ¿Por qué elegimos React y no AngularJS?

| Criterio | React | AngularJS |
|---|---|---|
| Estado actual | Se mantiene y actualiza constantemente | Terminó su soporte oficial en 2022 (Google, s. f.) |
| Curva de aprendizaje | Más suave si ya sabemos JavaScript | Hay que aprender directivas, scopes y su propia estructura |
| Reutilización | Componentes muy reutilizables | Basado en controladores y directivas |
| Comunidad y librerías | Muy grande, con mucha documentación | Comunidad más pequeña y desactualizada |
| Demanda en el mercado | Muy usado en empresas | Cada vez menos usado |

Decidimos usar React porque está vigente, tiene mucha documentación y es una tecnología que se pide en el mercado laboral. También porque nos permitió reutilizar la lógica en JavaScript que ya teníamos del Avance 1.


```

**Qué hicimos con React en cada parte:**

1. **Componentes reutilizables:** creamos piezas como `[Navbar]`, `[Tabla]`, `[Formulario]` y `[Tarjeta]` que se usan en varias vistas. Así no repetimos código y los cambios de diseño se hacen en un solo lugar.
2. **Manejo de estado:** con `useState` controlamos los formularios, las listas de registros y los filtros. Cuando se agrega, edita o elimina un registro, la pantalla se actualiza sola, cosa que en vanilla teníamos que hacer manipulando el DOM a mano.
3. **Sesiones y roles:** con Context API guardamos el usuario que inició sesión y su rol (`[admin / usuario]`). La sesión se mantiene en `localStorage`, y creamos rutas protegidas para que cada rol solo vea las vistas que le corresponden.
4. **Consumo de API externa:** en `services/` hicimos las peticiones a **[nombre de la API]**. Con `useEffect` se cargan los datos al abrir la vista, y usamos estados para mostrar "cargando" y mensajes de error si la petición falla. Los datos se integran en **[explicar dónde se usan en el flujo del proyecto]**.
5. **Módulo de reportes:** los datos del estado alimentan las gráficas de Chart.js, así que se actualizan cuando cambian los registros.
6. **Navegación:** React Router maneja todas las vistas del proyecto como una aplicación de una sola página (SPA).


### 4. Ventajas y desventajas que encontramos

**Ventajas**

- Los componentes ahorran código y hacen el proyecto más ordenado.
- La interfaz se actualiza automáticamente cuando cambia el estado.
- Hay mucha documentación y ejemplos para resolver errores.
- Trabajar por componentes facilitó dividir el trabajo entre los integrantes del equipo.

**Desventajas**

- Al inicio cuesta entender JSX, los hooks y el flujo de datos.
- React solo maneja la interfaz, así que hubo que sumar librerías para rutas, gráficas y demás.
- Al migrar de JavaScript vanilla tuvimos que reescribir parte de la lógica.
- Si el estado no se organiza bien, el código se vuelve confuso.

### 5. Conclusiones

Integrar React mejoró la organización de **ANEON**. Pasamos de manipular el DOM directamente a trabajar con componentes y estado, lo que hizo el código más fácil de mantener y de dividir entre el equipo. También nos permitió conectar la API externa y proteger las vistas por rol de forma más clara. Como recomendación, conviene definir desde el inicio la estructura de componentes y el manejo del estado, para evitar tener que reorganizar el código después.

### 6. Referencias


Google. (s. f.). *AngularJS: Superheroic JavaScript MVW framework*. https://angularjs.org

Meta Platforms, Inc. (s. f.-a). *React: La biblioteca para interfaces de usuario web y nativas*. https://react.dev

Meta Platforms, Inc. (s. f.-b). *Aprende React*. https://react.dev/learn

Mozilla Developer Network. (s. f.). *Using the Fetch API*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


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
