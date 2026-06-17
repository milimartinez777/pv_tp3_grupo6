import React from 'react';
import{Link} from 'react-router-dom';

import {Card, CardContent, CardActions, Typography, Button, Box, Divider } from '@mui/material';

import '../css/proyectoCardMui.css';
const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, título, categoría, estado } = proyecto;

  return (
    <Card variant="outlined" className="tarjeta-mui" sx={{ borderRadius: 5, border: '0.5px solid #dde3f0', transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease', '&:hover': { transform: 'translateY(-12px) scale(1.02)', boxShadow: '0 24px 50px rgba(30,58,138,0.18)' } }}>
      <Box sx={{ height: 5, background: 'linear-gradient(90deg, #1e3a8a, #3b82f6, #93c5fd)' }} />
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

        <Divider sx={{ borderImage: 'linear-gradient(90deg, transparent, #3b82f6 30%, #93c5fd 70%, transparent) 1', borderWidth: 2 }} />

      <CardActions className="acciones-mui" sx={{ display: 'flex !important', justifyContent: 'center !important', gap: 1.5, pb: 2 }}>
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