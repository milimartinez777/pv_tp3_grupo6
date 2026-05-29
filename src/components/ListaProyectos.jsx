import { useState } from "react";

import "../css/ListasProyectos.css";

import proyectoService from "../services/proyectoService.js";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const [terminoBusqueda, setTerminoBusqueda] = useState("");


    const [formProyecto, setFormProyecto] = useState({
      título: "",
      categoría: "",
      estado: "",
      descripcion: "",
      pdf: "",
      drive: "",
      github: "",
      nombreIntegrante: "",
      rolIntegrante: ""
    });
    // falta desarrollo dentro de este bloque...
    const handleAgregarProyecto = (e) => {
        e.preventDefault();
        
        if (!nuevoTitulo.trim() || !nuevaCategoria.trim() || !nuevoEstado) {
          alert("Por favor, completa todos los campos");
          return;
        }
        
        const nuevo = {
          id: Date.now(), 
          título: nuevoTitulo,
          categoría: nuevaCategoria,
          estado:  nuevoEstado  
        };
        
        proyectoService.agregarProyecto(nuevo);
        
        setProyectos(proyectoService.obtenerProyectos());
        
        setNuevoTitulo("");
        setNuevaCategoria("");
        setNuevoEstado("");
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

        <form onSubmit={handleAgregarProyecto} className="formulario-alta">
            Nuevo Proyecto
          <div className="grupo-input">
            {/* Campos Principales Actualizados */}
            <input
              type="text"
              placeholder="Título del proyecto..."
              value={formProyecto.título}
              onChange={(e) => setFormProyecto({ ...formProyecto, título: e.target.value })}
            />
            <input
              type="text"
              placeholder="Categoría (Ej: Web, Mobile)..."
              value={formProyecto.categoría}
              onChange={(e) => setFormProyecto({ ...formProyecto, categoría: e.target.value })}
            />
            <select
              value={formProyecto.estado}
              onChange={(e) => setFormProyecto({ ...formProyecto, estado: e.target.value })}
              className="select-estado"
            >
              <option value="" disabled hidden>Estado</option>
              <option value="Planificación">Planificación</option>
              <option value="En progreso">En progreso</option>
              <option value="Terminado">Terminado</option>
            </select>

            {/* NUEVO: Campo de Descripción Extendida */}
            <textarea
              placeholder="Descripción del proyecto (Mínimo dos párrafos separados por doble espacio)..."
              value={formProyecto.descripcion}
              onChange={(e) => setFormProyecto({ ...formProyecto, descripcion: e.target.value })}
              style={{ width: "100%", padding: "0.6rem", borderRadius: "4px", border: "1px solid #cbd5e1", minHeight: "80px" }}
            />

            {/* NUEVO: Campos de Recursos */}
            <input
              type="text"
              placeholder="Link de Recurso PDF (Opcional)..."
              value={formProyecto.pdf}
              onChange={(e) => setFormProyecto({ ...formProyecto, pdf: e.target.value })}
            />
            <input
              type="text"
              placeholder="Link de Google Drive (Opcional)..."
              value={formProyecto.drive}
              onChange={(e) => setFormProyecto({ ...formProyecto, drive: e.target.value })}
            />
            <input
              type="text"
              placeholder="Link de GitHub (Opcional)..."
              value={formProyecto.github}
              onChange={(e) => setFormProyecto({ ...formProyecto, github: e.target.value })}
            />

            {/* NUEVO: Campos de Integrante de Equipo */}
            <input
              type="text"
              placeholder="Nombre del Integrante (Opcional)..."
              value={formProyecto.nombreIntegrante}
              onChange={(e) => setFormProyecto({ ...formProyecto, nombreIntegrante: e.target.value })}
            />
            <input
              type="text"
              placeholder="Rol del Integrante (Ej: Desarrollador)..."
              value={formProyecto.rolIntegrante}
              onChange={(e) => setFormProyecto({ ...formProyecto, rolIntegrante: e.target.value })}
            />

            <button type="submit" className="btn-guardar" style={{ width: "100%", marginTop: "10px" }}>
              AGREGAR PROYECTO
            </button>
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

      <div className="grilla-proyectos">
        {proyectos.map(p => (
          <div key={p.id} className="tarjeta-proyecto">
            <header className="tarjeta-encabezado">
              <h3>{p.título}</h3>
              <span className={`estado-etiqueta ${p.estado === 'Terminado' ? 'finalizado' : 'activo'}`}>
                {p.estado}
              </span>
            </header>
            
            <div className="tarjeta-cuerpo">
              <p><strong>Área / Categoría:</strong> {p.categoría}</p>
                <button className="btn-eliminar" onClick={() => handleEliminar(p.id)}>
                    Eliminar
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProyectos;