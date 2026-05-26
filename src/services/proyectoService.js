const proyectoService = (( )=>{
    let proyectos = [
        { id: 1, título: "Plataforma de Gestión Escolar", categoría: "Web", estado: "En progreso" },
        { id: 2, título: "App de Control de Asistencia", categoría: "Mobile", estado: "Planificación" },
        { id: 3, título: "Sistema para Biblioteca Central", categoría: "Escritorio", estado: "Terminado" },
        { id: 4, título: "Aula Virtual Interactiva", categoría: "Web", estado: "En progreso" },
        { id: 5, título: "Portal de Seguimiento de Egresados", categoría: "Web", estado: "Terminado" }
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