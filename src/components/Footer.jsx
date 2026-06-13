{/* import "../css/Footer.css"; */ }
import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Stack, Divider } from '@mui/material';
import { GitHub, LinkedIn, Email, Instagram, Facebook, Twitter, Phone, LocationCity } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', color: 'white', py: 5, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          
          <Grid item xs={12} md={4} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>ENLACES RÁPIDOS</Typography>
            <Stack spacing={0.5}>
              {['Inicio', 'Proyectos', 'Perfil', 'Detalles de Proyecto', 'Agregar Proyecto'].map((text) => (
                <Typography key={text} component={Link} to="/" sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>{text}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>CONTÁCTANOS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}><Email fontSize="small"/> contacto@unju.edu.ar</Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Phone fontSize="small"/> +54 388 123-4567</Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>NUESTRAS REDES</Typography>
            <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
              {[GitHub, LinkedIn, Instagram, Facebook, Twitter].map((Icon, i) => (
                <IconButton key={i} sx={{ color: 'white', background: 'rgba(255,255,255,0.1)' }}><Icon /></IconButton>
              ))}
            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.8 }}>
          <LocationCity sx={{ verticalAlign: 'middle', mr: 1 }} />
          Analista Programador Universitario - Universidad Nacional de Jujuy - 2026
        </Typography>
      </Container>
    </Box>
  );
};


export default Footer;