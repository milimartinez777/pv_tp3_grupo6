const proyectoService = (( )=>{
    let proyectos = [
        { 
        id: 1, 
        título: "Sistema de gestión de biblioteca escolar", 
        categoría: "Programación", 
        estado: "En progreso",
        descripcion: "Este proyecto surge de la necesidad de digitalizar los procesos administrativos y académicos de las instituciones educativas.\n\nPermite centralizar la información de estudiantes, docentes y tutores en una sola plataforma.",
        recursos: {
            pdf: "https://ejemplo.com/documento.pdf",
            drive: "https://drive.google.com",
            github: "https://github.com"
        },
        equipo: [
            { nombre: "Juan Pérez", rol: "Desarrollador" }
        ]
        },
        { id: 2, título: "App de Matemática", categoría: "Matemática", estado: "Planificación" },
        { id: 3, título: "Campus virtual Educativo", categoría: "Diseño", estado: "Terminado" },
        { id: 4, título: "Organizador de tareas académicas", categoría: "Programación", estado: "En progreso" },
        { id: 5, título: "Simulador de experimentos de Física", categoría: "Fisica", estado: "Terminado" }
    ];
    const obtenerProyectos = () => [...proyectos];
    const agregarProyecto = (nuevoProyecto) => proyectos.push(nuevoProyecto);

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(p => p.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(p => p.título.toLowerCase().includes(texto.toLowerCase()));
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

export default proyectoService;