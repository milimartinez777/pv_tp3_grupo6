import React from 'react';
import "../css/registroActividad.css";

const RegistroActividad = ({ ultimaActualizacion }) => {
  return (
    <div className="registro-actividad">
      <p>Última actualización de la lista: {ultimaActualizacion}</p>
    </div>
  );
};

export default RegistroActividad;