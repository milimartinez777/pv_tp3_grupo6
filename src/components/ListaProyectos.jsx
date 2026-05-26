import { useState } from "react";

import "../css/listasProyectos.css";

import proyectoService from "../services/proyectoService.js";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const [terminoBusqueda, setTerminoBusqueda] = useState("");


    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");

    // falta desarrollo dentro de este bloque...
    const agregar = (e) => {
        e.preventDefault();
        
        if (!nuevoTitulo.trim() || !nuevaCategoria.trim()) {
          alert("Por favor, completa todos los campos");
          return;
        }
        
        const nuevo = {
          id: Date.now(), 
          título: nuevoTitulo,
          categoría: nuevaCategoria,
          estado: "Planificación"  
        };
        
        proyectoService.agregarProyecto(nuevo);
        
        setProyectos(proyectoService.obtenerProyectos());
        
        setNuevoTitulo("");
            setNuevaCategoria("");
    };

    const handleEliminar = (id) => {
      proyectoService.eliminarProyecto(id);
       const listaActualizada = proyectoService.obtenerProyectos();
       setProyectos(listaActualizada);
    };
























    
}
export default ListaProyectos;