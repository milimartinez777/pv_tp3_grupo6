import React from 'react';
import { Alert } from '@mui/material';

const RegistroActividad = ({ ultimaActualizacion }) => {
  return (
    <Alert severity="info">
      Última actualización de la lista: {ultimaActualizacion}
    </Alert>
  );
};

export default RegistroActividad;