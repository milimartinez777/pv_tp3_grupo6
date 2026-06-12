import React from 'react';
import { Box, Container, Grid, Paper, Typography, Avatar, Chip, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import proyectoService from '../services/proyectoService';

const PerfilUsuario = () => {

    const integrantes = proyectoService.obtenerEquipo();
    return (
        <Box sx={{ minHeight: '100vh', background: '#eef2ff', py: 5 }}>

            <Container maxWidth="lg">

                <Paper elevation={0} sx={{ p: 4, mb: 5, textAlign: 'center', color: 'white', borderRadius: 5, background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', overflow: 'hidden', position: 'relative' }}>
                    
                    <Typography variant="h3" fontWeight="500" sx={{ mt: 2, mb: 1 }}>Equipo de Trabajo</Typography>
                    <Typography sx={{ mt: 1, color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>Conoce a los integrantes detrás de cada proyecto</Typography>
                    <Box sx={{ width: 48, height: 3, background: 'rgba(255,255,255,0.35)', borderRadius: 2, mx: 'auto', my: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
                        <Chip icon={<span style={{ fontSize: 13, marginLeft: 8 }}>👥</span>} label={`${integrantes.length} integrantes`} sx={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '0.5px solid rgba(255,255,255,0.25)' }} />
                        <Chip icon={<span style={{ fontSize: 13, marginLeft: 8 }}>🎓</span>} label="UNJU" sx={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '0.5px solid rgba(255,255,255,0.25)' }} />
                    </Box>
                </Paper>

                <Grid container spacing={3} sx={{ justifyContent: "center" }}>

                    {integrantes.map((persona) => {
                        return (
                            <Grid xs={12} sm={6} md={4} key={persona.id} sx={{ display: 'flex', px: 1 }}>

                                <Paper elevation={3} sx={{ width: '320px', height: '400px', borderRadius: 5, overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '0.5px solid #dde3f0', transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease', '&:hover': { transform: 'translateY(-12px) scale(1.02)', boxShadow: '0 24px 50px rgba(30,58,138,0.18)' } }}>

                                    <Box sx={{ height: 5, background: 'linear-gradient(90deg, #1e3a8a, #3b82f6, #93c5fd)' }} />

                                    <Box sx={{ pt: 3, pb: 2, px: 2, textAlign: 'center' }}>

                                        <Box sx={{ position: 'relative', display: 'inline-block', mb: 1.5 }}>
                                            <Box sx={{ position: 'absolute', inset: -5, borderRadius: '50%', border: '1.5px solid #bfdbfe' }} />
                                            <Avatar src={persona.foto} alt={persona.nombre} sx={{ width: 76, height: 76, background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', fontSize: 22, boxShadow: '0 6px 16px rgba(30,58,138,0.25)' }} />
                                        </Box>

                                        <Typography variant="h6" fontWeight="500" sx={{ color: '#1e293b', mb: 0.5 }}>{persona.nombre}</Typography>

                                        <Chip label={persona.rol} size="small" sx={{ background: '#eff6ff', color: '#1d4ed8', border: '0.5px solid #bfdbfe', fontWeight: 500, fontSize: 11 }} />

                                    </Box>

                                    <Box sx={{ px: 2.5 }}>
                                        <Divider sx={{ borderImage: 'linear-gradient(90deg, transparent, #3b82f6 30%, #93c5fd 70%, transparent) 1', borderWidth: 2 }} />
                                    </Box>

                                    <Box sx={{ px: 2.5, py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',flexGrow: 1, gap: 3 }}>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, borderBottom: '0.5px solid #f1f5f9', pb: 1 }}>
                                            <Typography sx={{ fontSize: 16, color: '#3b82f6', lineHeight: 1 }}>🪪</Typography>
                                            <Typography variant="body2" sx={{ color: '#94a3b8' }}>DNI <span style={{ color: '#475569' }}>{persona.dni}</span></Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography sx={{ fontSize: 16, color: '#3b82f6', lineHeight: 1 }}>🏛️</Typography>
                                            <Typography variant="body2" sx={{ color: '#94a3b8' }}>Institución <span style={{ color: '#475569' }}>{persona.institucion}</span></Typography>
                                        </Box>

                                    </Box>

                                </Paper>

                            </Grid>
                        );
                    })}

                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button component={Link} to="/" variant="contained" startIcon={<span>←</span>} sx={{ px: 4, py: 1.2, borderRadius: 3, background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', boxShadow: '0 4px 14px rgba(30,58,138,0.3)', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 20px rgba(30,58,138,0.4)' } }}>
                        Volver al inicio
                    </Button>
                </Box>

            </Container>

        </Box>
    );
}

export default PerfilUsuario