import React from 'react';
import{Link} from 'react-router-dom';

const ProyectoCard = ({ proyecto, onEliminar }) => {
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
            <Link to={`/proyectos/${id}`}>
                <button className="btn-detalle"> Ver detalle</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProyectoCard;