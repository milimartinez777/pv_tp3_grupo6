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

    //(Filtra los proyectos por título según el texto ingresado en el campo de búsqueda)
    const busqueda = (e) => {
      const valor = e.target.value;
      setTerminoBusqueda(valor);
      const proyectosFiltrados = proyectoService.buscarProyecto(valor);
      setProyectos(proyectosFiltrados);
    };



  return (
    <div className="contenedor-proyectos">
        <h2>Mis Proyectos Académicos</h2>

        <form onSubmit={agregar} className="formulario-alta">
            Nuevo Proyecto
        <div className="grupo-input">
            <input
            type="text"
            placeholder="Título del proyecto..."
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            />
            <input
            type="text"
            placeholder="Categoría (Ej: Web, Mobile)..."
            value={nuevaCategoria}
            onChange={(e) => setNuevaCategoria(e.target.value)}
            />
            <button type="submit" className="btn-guardar">AGREGAR PROYECTO</button>
        </div>
        </form>






      <div className="seccion-busqueda">
          <input
              type="text"
              placeholder="Buscar proyecto..."
              value={terminoBusqueda}
              onChange={busqueda}
          />
      </div>











    
}
export default ListaProyectos;