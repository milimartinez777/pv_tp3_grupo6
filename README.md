# pv
asignatura->Programación Visual 
                        PROGRAMACIÓN VISUAL
                        TRABAJO PRÁCTICO Nº 3 GRUPAL
1. CRUZ Jonatan Anibal
https://github.com/Jonatan27C
2. JUAREZ David
https://github.com/davidjuharez
3. MARTINEZ Milagro Soledad
https://github.com/milimartinez777
4. RODRIGUEZ María Lourdes
https://github.com/lzmar
5. VENENCIA Shashiquen Brenda Mailén
https://github.com/shashiquen-b-m-venencia

Nuestro repositorio: https://github.com/milimartinez777/pv_tp3_grupo6 

GESTION DE PROYECTOS EDUCATIVOS 
Este proyecto consiste en la evolución y migración de la plataforma de "Gestión de Proyectos Educativos" desde una estructura estática en HTML/CSS hacia una aplicación web dinámica utilizando REACT y VITE
El objetivo principal de esta entrega es introducir conceptos clave de React como la estructura de componentes reutilizables, el manejo del estado local con el hook USESTATEy la separación de la lógica de datos mediante módulos de servicio.

FUNCIONALIDADES

VISUAL DEL PROYECTO: Renderizado de la lista de proyectos a partir de un estado inicial provisto por un servicio interno.Como resultado un trabajo con una visualización dinámica y limpia.
BUSQUEDA EN TIEMPO REAL Y PARAMETROS A PARTIR DE LO PROPORCIONADO POR EL USUARIO: Filtrado de proyectos por título a medida que el usuario escribe en la barra de búsqueda.
ELIMINACION DE PROYECTOS: Botón funcional por cada proyecto que remueve el elemento y actualiza la interfaz de inmediato.
COMPONENTES: Caracterizada por la estructura de la interfaz mediante componentes limpios y reutilizables (Header, Nav, Footer, Lista Proyectos).

Tecnologías Utilizadas
+JavaScript 
+React 
+Vite
Parte 1: Fundamentos de React y Migración
Esta etapa inicial se centra en crear el proyecto usando Vite y migrar la plataforma estática 
original a React. En la creacion de un archivo de lógica independiente (proyectoService.js) para 
manejar los datos.  Se deben armar los componentes base de la interfaz (Header, Nav, Footer, ListaProyectos) e incorporar el hook useState para poder listar, agregar, eliminar y buscar los proyectos en la pantalla principal.  

Parte 2: Comunicación entre Componentes - Props
El objetivo aquí es lograr que los componentes se comuniquen pasándose información a través de props.Se aplica desestructuración de objetos para limpiar el código y crear componentes de interfaz 
específicos, como <*/ProyectoCard/> para las tarjetas individuales y </*DetalleProyecto/> para la
vista extendida.Refactorizamos la lista principal para que en lugar de renderizar HTML puro, llame
a estas nuevas tarjetas.

Parte 3: Control de Efectos Secundarios- useEffect
Se introduce el hook useEffect para crear un componente llamado <*/RegistroActividad/>, el cual 
muestra un mensaje con la fecha y hora exacta cada vez que se agrega o elimina un proyecto.  Para 
optimizar el rendimiento: el registro no debe aparecer la primera vez que carga la página, y tampoco
debe actualizarse cuando el usuario simplemente escribe en el buscador.  Finalmente, pide separar 
el formulario en su propio componente y usar la "elevación del estado" para enviarle los datos 
listos al componente padre. 

Parte 4: Navegación SPA y Diseño UI
Transforma el sitio en una verdadera Pagina Simple de aplicacion (SPA) integrando react-router-dom 
para navegar entre secciones (/dashboard, /proyectos, /perfil) al instante y sin recargar la página.
Se organiza las carpetas del proyecto separando "vistas" de "componentes" e incorporar un framework 
de diseño, como Material UI o React Bootstrap, para modernizar la estructura visual y los 
formularios.  Implementa el hook useParams para que el detalle de cada proyecto tenga su propia URL
dinámica, evitando que la página se rompa si el usuario presiona F5.

Parte 5: Estado Global y Persistencia (API)
La última parte soluciona el problema de pasar datos por todos lados creando un estado global con 
Context API (UsuarioContext.jsx).  Este contexto almacena los datos del perfil del usuario logueado,
permitiendo que tanto el <*/Header/> como el <*/PerfilUsuario/> consuman y actualicen esa
información dinámicamente en tiempo real.  Como paso final se guardan estos datos del usuario en 
el localStorage del navegador para que los cambios persistan aunque se cierre o recargue la
pestaña.

---
GRUPO 6



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
