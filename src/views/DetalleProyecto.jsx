import React, { useEffect, useState } from 'react';
import '../css/detalleProyecto.css';
import { useParams, useNavigate } from 'react-router-dom';
import proyectoService from '../services/proyectoService';

const DetalleProyecto = () => {
  const {id}=useParams();
  const navigate= useNavigate();

  const [proyecto, setProyecto] = useState(null);
  useEffect(() => {
    const lista = proyectoService.obtenerProyectos();
    const proyectoEncontrado = lista.find(p => String(p.id) === String(id));
    setProyecto(proyectoEncontrado);
  }, [id]);
  //por si no se encuentra el proyecto
  if (!proyecto) {
    return (
      <div className="detalle-contenedor-principal">
        <p className="detalle-no-data">Cargando datos del proyecto o no encontrado...</p>
        <button className="btn-volver-lista" onClick={() => navigate('/proyectos')}>Volver a la Lista</button>
      </div>
    );
  }

  const { título, categoría, estado, descripcion, recursos, equipo } = proyecto;

  return (
    <div className="detalle-contenedor-principal">

      <header className="detalle-header">
        <h2>Detalle del Proyecto</h2>
        <h3>{título}</h3>
        <p className="detalle-subtitulo">
        <strong>Categoría:</strong> {categoría} | <strong>Estado:</strong>
        <span className={`detalle-estado-badge ${estado =="Terminado" ? "estado-terminado" : "estado-progreso"}`}>{estado}</span>
        </p>
      </header>
      <section className="detalle-seccion-caja">
      <h4>Descripción</h4>
      {descripcion ? (
        descripcion.split('\n\n').map((parrafo, index) => (
          <p key={index} className="detalle-parrafo">{parrafo}</p>))
          ) : (
            <p className="detalle-no-data">No hay descripción disponible.</p>
          )}
      </section>
      
      <section className="detalle-seccion-caja">
        <h4>Recursos Disponibles</h4>
        {recursos && (recursos.pdf || recursos.drive || recursos.github) ? (
          <ul className="detalle-lista-enlaces">
            {recursos.pdf && (<li><a href={recursos.pdf} target="_blank" rel="noreferrer">Documento PDF</a></li>)}
            {recursos.drive && (<li><a href={recursos.drive} target="_blank" rel="noreferrer">Carpeta de Google Drive</a></li>)}
            {recursos.github && (<li><a href={recursos.github} target="_blank" rel="noreferrer">Repositorio de GitHub</a></li>)}
          </ul>
         ) : (
        <p className="detalle-no-data">No hay recursos cargados.</p>
      )}
      </section>

      <section className="detalle-seccion-caja">
      <h4>Equipo de Trabajo</h4>
      {equipo && equipo.length > 0 ? (
        <ul className="detalle-lista-equipo">
          {equipo.map((integrante, index) => (
            <li key={index}  className="detalle-integrante-item">
              <strong>{integrante.nombre}</strong> - <span className="detalle-rol-texto">{integrante.rol}</span>
            </li>
          ))}
         </ul>
          ) : (
          <p className="detalle-no-data">No hay miembros asignados.</p>
      )}
      </section>

      <section className="detalle-seccion-boton">
        <button className="btn-volver-lista" onClick={() => navigate('/proyectos')}>Volver a la Lista de Proyectos</button>
      </section>
     </div>
  );
};

export default DetalleProyecto;