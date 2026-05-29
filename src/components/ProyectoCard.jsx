import React from 'react';

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { id, título, categoría, estado } = proyecto;

  return (
    <div className="tarjeta-proyecto">
      <header className="tarjeta-encabezado">
        <h3>{título}</h3>
        <span className={`estado-etiqueta ${estado === 'Terminado' ? 'finalizado' : 'activo'}`}>
          {estado}
        </span>
      </header>
      
      <div className="tarjeta-cuerpo">
        <p><strong>Área / Categoría:</strong> {categoría}</p>
        
        <div className="tarjeta-acciones">
          <button className="btn-eliminar" onClick={() => onEliminar(id)}>
            Eliminar
          </button>
            <a href="#seccion-detalle" style={{ textDecoration: 'none' }}>
                <button className="btn-detalle" onClick={() => onVerDetalle(proyecto)}>
                    Ver detalle
                </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectoCard;