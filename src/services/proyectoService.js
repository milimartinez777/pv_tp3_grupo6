import avatar1 from '../assets/equipo/avatar1.png';
import avatar2 from '../assets/equipo/avatar2.png';
import avatar3 from '../assets/equipo/avatar3.png';
import avatar4 from '../assets/equipo/avatar4.png';
import avatar5 from '../assets/equipo/avatar5.png';

const proyectoService = (( )=>{
    let proyectos = [
        { 
        id: 1, título: "Sistema de gestión de biblioteca escolar", categoría: "Programación", estado: "En progreso",
        descripcion: "Este proyecto surge de la necesidad de digitalizar los procesos administrativos y académicos de las instituciones educativas.\n\nPermite centralizar la información de estudiantes, docentes y tutores en una sola plataforma.",
        recursos: {
            pdf: "https://www.ilovepdf.com/",
            drive: "https://drive.google.com",
            github: "https://github.com"
        },
        equipo: [
            { nombre: "Venencia Shashiquen Brenda Mailén", rol: "Desarrollador" }
        ]
        },
        { id: 2, título: "App de Matemática", categoría: "Matemática", estado: "Planificación",
            descripcion: "Una aplicación móvil interactiva diseñada para ayudar a estudiantes de secundaria a resolver ecuaciones algebraicas paso a paso.\n\nIncluye gráficos dinámicos y un sistema de recompensas para motivar el aprendizaje diario.",
            recursos: {
                pdf: "https://www.ilovepdf.com/",
                drive: "https://drive.google.com",
                github: "https://github.com"
            },
            equipo: [
                { nombre: "Rodriguez María Lourdes", rol: "Diseñadora UI/UX" }
            ]
         },
        { id: 3, título: "Campus virtual Educativo", categoría: "Diseño", estado: "Terminado",
            descripcion: "Plataforma web integral orientada a la educación a distancia. Permite la creación de aulas virtuales, gestión de exámenes en línea y foros de discusión moderados.\n\nEl enfoque principal estuvo en lograr una interfaz accesible para usuarios con poca experiencia tecnológica.",
            recursos: {
                pdf: "https://www.ilovepdf.com/",
                drive: "https://drive.google.com",
                github: "https://github.com"
            },
            equipo: [
                { nombre: "Martinez Milagro Soledad", rol: "Desarrollador Fullstack" }
            ]
         },
        { id: 4, título: "Organizador de tareas académicas", categoría: "Programación", estado: "En progreso",
            descripcion: "Una herramienta web tipo Kanban orientada exclusivamente a estudiantes. Permite arrastrar tareas entre columnas de pendientes, en proceso y completadas.\n\nCuenta con un sistema de alertas por correo electrónico para recordar las fechas límites de entregas importantes.",
            recursos: {
                pdf: "https://www.ilovepdf.com/",
                drive: "https://drive.google.com",
                github: "https://github.com"
            },
            equipo: [
                { nombre: "Cruz Jonatan Anibal", rol: "Desarrollador Fullstack" }
            ]
         },
        { id: 5, título: "Simulador de experimentos de Física", categoría: "Fisica", estado: "Terminado",
            descripcion: "Un entorno virtual interactivo en 2D que permite a los alumnos simular tiros parabólicos y colisiones elásticas variando la gravedad y la masa.\n\nIdeal para escuelas secundarias que no cuentan con un laboratorio físico equipado.",
            recursos: {
                pdf: "https://www.ilovepdf.com/",
                drive: "https://drive.google.com",
                github: "https://github.com"
            },
            equipo: [
                { nombre: "Juarez David", rol: "Analista de Sistema" }
            ]
        }
    ];
    const equipo = [
        {id: 1, nombre: "Venencia Shashiquen", dni: "12354987", rol: "Desarrolladora", institucion: "UNJU", foto: avatar4},
        {id: 2, nombre: "Rodriguez María Lourdes", dni: "12312365", rol: "Diseñadora UI/UX", institucion: "UNJU", foto: avatar5},
        {id: 3, nombre: "Martinez Milagro Soledad", dni: "17896542", rol: "Desarrolladora Fullstack", institucion: "UNJU", foto: avatar3},
        {id: 4, nombre: "Cruz Jonatan Anibal", dni: "35394988", rol: "Desarrollador Fullstack", institucion: "UNJU", foto: avatar1},
        {id: 5, nombre: "Juarez David", dni: "23549356", rol: "Analista en Sistemas", institucion: "UNJU", foto: avatar2}
        
    ];
    const obtenerEquipo = () => [...equipo];

    const obtenerProyectos = () => [...proyectos];
    const agregarProyecto = (nuevoProyecto) => proyectos.push(nuevoProyecto);

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(p => p.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(p => p.título.toLowerCase().includes(texto.toLowerCase()));
    };
    const obtenerProyectoPorId = (id) => {
        return proyectos.find(p => p.id === Number(id));
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto,
        obtenerProyectoPorId,
        obtenerEquipo
    };
})();

export default proyectoService;