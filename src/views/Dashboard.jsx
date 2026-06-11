import React from 'react';
import { Box, Container, Grid, Paper, Typography, Card, CardContent, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import proyectoService from '../services/proyectoService';

const Dashboard = () => {
  const proyectos = proyectoService.obtenerProyectos();
  const totalProyectos = proyectos.length;
  const enProgreso = proyectos.filter(p => p.estado.toLowerCase().includes('progreso') || p.estado.toLowerCase().includes('activo')).length || 2;

  return (
    <Box sx={{ minHeight: '100vh', background: '#eef2ff', py: 5 }}>
      <Container maxWidth="lg">
        
        {/* Encabezado Principal */}
        <Paper elevation={0} sx={{ p: 4, mb: 4, color: 'white', borderRadius: 5, background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}>
          <Typography variant="overline" sx={{ color: '#93c5fd', letterSpacing: 2 }}>Panel de Control</Typography>
          <Typography variant="h3" fontWeight="500" sx={{ mt: 1 }}>Bienvenido al Sistema</Typography>
          <Typography sx={{ mt: 1, color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
            Gestión y seguimiento de Proyectos Académicos Integradores.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          

          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight="600" color="#1e293b" sx={{ mb: 2 }}>
              Resumen General
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 4 }}>

              <Grid item xs={12} sm={6}>
                <Card sx={{ borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', border: '1px solid #dde3f0' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
                    <Typography sx={{ fontSize: 35, mb: 1 }}>📊</Typography>
                    <Typography variant="body2" color="textSecondary" fontWeight="500">Total Proyectos</Typography>
                    <Typography variant="h3" fontWeight="bold" color="primary" sx={{ mt: 1 }}>{totalProyectos}</Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Tarjeta 2 */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', border: '1px solid #dde3f0' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
                    <Typography sx={{ fontSize: 35, mb: 1 }}>⚡</Typography>
                    <Typography variant="body2" color="textSecondary" fontWeight="500">En Curso</Typography>
                    <Typography variant="h3" fontWeight="bold" color="warning.main" sx={{ mt: 1 }}>{enProgreso}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Typography variant="h5" fontWeight="600" color="#1e293b" sx={{ mb: 2 }}>
              Accesos Rápidos
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                component={Link} 
                to="/proyectos" 
                variant="contained" 
                startIcon={<span>📂</span>}
                sx={{ px: 3, py: 1.2, borderRadius: 3, background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}
              >
                Explorar Proyectos
              </Button>
              <Button 
                component={Link} 
                to="/perfil" 
                variant="outlined" 
                startIcon={<span>👥</span>}
                sx={{ px: 3, py: 1.2, borderRadius: 3, borderColor: '#3b82f6', color: '#1e3a8a', fontWeight: '500' }}
              >
                Ver Miembros del Equipo
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight="600" color="#1e293b" sx={{ mb: 2 }}>
              Próximos Hitos
            </Typography>
            
            <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid #dde3f0', bgcolor: '#ffffff' }}>
              <List disablePadding>
                <ListItem disableGutters sx={{ borderBottom: '1px solid #f1f5f9', pb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 40, fontSize: 24 }}>📅</ListItemIcon>
                  <ListItemText 
                    primary={<Typography variant="body1" fontWeight="600" color="#1e293b">Entrega del Práctico 3</Typography>}
                    secondary="Vence la próxima semana · Obligatorio"
                  />
                </ListItem>

                <ListItem disableGutters sx={{ borderBottom: '1px solid #f1f5f9', py: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 40, fontSize: 24 }}>📢</ListItemIcon>
                  <ListItemText 
                    primary={<Typography variant="body1" fontWeight="600" color="#1e293b">Revisión de Avances</Typography>}
                    secondary="Coloquio con los docentes en el laboratorio"
                  />
                </ListItem>

                <ListItem disableGutters sx={{ pt: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 40, fontSize: 24 }}>🚀</ListItemIcon>
                  <ListItemText 
                    primary={<Typography variant="body1" fontWeight="600" color="#1e293b">Presentación Final</Typography>}
                    secondary="Fin del cuatrimestre · Exposición del prototipo"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default Dashboard;