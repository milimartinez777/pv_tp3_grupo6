import React from 'react';
import{Link} from 'react-router-dom';

import {Card, CardContent, CardActions, Typography, Button } from '@mui/material';

import '../css/proyectoCardMui.css';
const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, título, categoría, estado } = proyecto;

  return (
    <Card variant="outlined" className="tarjeta-mui">
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {título}
        </Typography>
        
        <Typography color="textSecondary" gutterBottom>
          <strong>Área / Categoría:</strong> {categoría}
        </Typography>

        <Typography variant="body2">
          <strong>Estado:</strong> {estado}
        </Typography>
      </CardContent>

      <CardActions className="acciones-mui">
        <Button 
          size="small" 
          color="error" 
          variant="contained"
          onClick={() => onEliminar(id)}
          className="boton-eliminar-mui"
        >
          Eliminar
        </Button>

        <Button 
          size="small" 
          color="primary" 
          variant="outlined"
          component={Link} 
          to={`/proyectos/${id}`}
        >
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );

};

export default ProyectoCard;