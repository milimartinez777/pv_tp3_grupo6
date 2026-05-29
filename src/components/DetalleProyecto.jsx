import React from 'react';

const DetalleProyecto = ({ proyecto }) => {
  if (!proyecto) return null;

  const { título, categoría, estado, descripcion, recursos, equipo } = proyecto;

  return (
    <div className="detalle-proyecto" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Detalle del Proyecto</h2>
      <h3>{título}</h3>
      <p><strong>Categoría:</strong> {categoría} | <strong>Estado:</strong> {estado}</p>
      
      <hr />
      <h4>Descripción</h4>
      {descripcion ? (
        descripcion.split('\n\n').map((parrafo, index) => <p key={index}>{parrafo}</p>)
      ) : (
        <p>No hay descripción disponible.</p>
      )}

      <hr />
      <h4>Recursos Disponibles</h4>
      {recursos ? (
        <ul>
          {recursos.pdf && <li><a href={recursos.pdf} target="_blank" rel="noreferrer">Documento PDF</a></li>}
          {recursos.drive && <li><a href={recursos.drive} target="_blank" rel="noreferrer">Carpeta de Google Drive</a></li>}
          {recursos.github && <li><a href={recursos.github} target="_blank" rel="noreferrer">Repositorio de GitHub</a></li>}
        </ul>
      ) : (
        <p>No hay recursos cargados.</p>
      )}

      <hr />
      <h4>Equipo de Trabajo</h4>
      {equipo && equipo.length > 0 ? (
        <ul>
          {equipo.map((integrante, index) => (
            <li key={index}>
              <strong>{integrante.nombre}</strong> - {integrante.rol}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay miembros asignados.</p>
      )}
    </div>
  );
};

export default DetalleProyecto;