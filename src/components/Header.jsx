//import "../css/Header.css";
import React from 'react';
import logo from "../assets/logito.png";
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useUsuario } from '../context/UsuarioContext';

const Header = () => {

  const { usuario } = useUsuario();
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', padding: '1rem 1.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
      <Toolbar sx={{ width: '100%', padding: '0 !important', display: 'flex', alignItems: 'center' }}>
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Box component="img" src={logo} alt="Logo del sitio" sx={{ height: 60, width: 'auto', objectFit: 'contain', transition: 'filter 0.3s ease', '&:hover': { filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))', cursor: 'pointer' } }} />
        </Box>

        <Typography variant="h6" sx={{ fontSize: '1.5rem', margin: '0 auto', color: '#ffffff', textAlign: 'center' }}>
          Gestor de Proyectos Académicos - ¡Te damos la bienvenida!
        </Typography>

        <Box sx={{ textAlign: 'right', color: 'white', ml: 'auto' }}>
          <PersonIcon sx={{ fontSize: 40, opacity: 0.9 }} />
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Usuario: {usuario.nombre}</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Rol: {usuario.rol}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
