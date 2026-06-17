import React, {useState} from 'react';
import { Box, Container, Paper, Typography, Avatar, Chip, Divider, Button,TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useUsuario } from "../context/UsuarioContext";

const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useUsuario();
    const [editando, setEditando] = useState(false);
    const [formData, setFormData] = useState(usuario);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const iniciarEdicion = () => {
        setFormData(usuario);
        setEditando(true);
    };

    const guardarCambios = () => {
        actualizarPerfil(formData);
        setEditando(false);
    };
 return (
        <Box sx={{ minHeight: '100vh', background: '#eef2ff', py: 5 }}>

            <Container maxWidth="md">

                {/* Encabezado */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        mb: 5,
                        textAlign: 'center',
                        color: 'white',
                        borderRadius: 5,
                        background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)'
                    }}
                >

                    <Typography
                        variant="h3"
                        fontWeight="500"
                        sx={{ mt: 2, mb: 1 }}
                    >
                        Mi Perfil
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            color: 'rgba(255,255,255,0.65)',
                            fontSize: 14
                        }}
                    >
                        Información del usuario logueado
                    </Typography>

                </Paper>

                {/* Tarjeta principal del perfil */}
                <Paper
                    elevation={3}
                    sx={{
                        maxWidth: 500,
                        mx: 'auto',
                        borderRadius: 5,
                        overflow: 'hidden',
                        border: '0.5px solid #dde3f0'
                    }}
                >
        
                    <Box
                        sx={{
                            height: 5,
                            background:
                                'linear-gradient(90deg, #1e3a8a, #3b82f6, #93c5fd)'
                        }}
                    />

                    <Box
                        sx={{
                            p: 4,
                            textAlign: 'center'
                        }}
                    >
                       
                        <Avatar
                            sx={{
                                width: 90,
                                height: 90,
                                mx: 'auto',
                                mb: 2,
                                fontSize: 32,
                                background:
                                    'linear-gradient(135deg, #1e3a8a, #3b82f6)'
                            }}
                        >
                            {usuario.nombre.charAt(0)}
                        </Avatar>

                        {/* Si NO está editando muestra los datos */}
                        {!editando ? (
                            <>
                                <Typography
                                    variant="h5"
                                    fontWeight="500"
                                    sx={{ color: '#1e293b', mb: 1 }}
                                >
                                    {usuario.nombre}
                                </Typography>

                                <Chip
                                    label={usuario.rol}
                                    sx={{
                                        background: '#eff6ff',
                                        color: '#1d4ed8',
                                        border: '0.5px solid #bfdbfe',
                                        mb: 3
                                    }}
                                />

                                <Divider sx={{ mb: 3 }} />

                                <Typography sx={{ mb: 2 }}>
                                    <strong>DNI:</strong> {usuario.dni}
                                </Typography>

                                <Typography sx={{ mb: 3 }}>
                                    <strong>Institución:</strong>{' '}
                                    {usuario.institucion}
                                </Typography>

                                <Button
                                    variant="contained"
                                    onClick={iniciarEdicion}
                                    sx={{
                                        borderRadius: 3,
                                        background:
                                            'linear-gradient(135deg, #1e3a8a, #3b82f6)'
                                    }}
                                >
                                    Editar Perfil
                                </Button>
                            </>
                        ) : (
                            <>

                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    fullWidth
                                    label="DNI"
                                    name="dni"
                                    value={formData.dni}
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    fullWidth
                                    label="Rol"
                                    name="rol"
                                    value={formData.rol}
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    fullWidth
                                    label="Institución"
                                    name="institucion"
                                    value={formData.institucion}
                                    onChange={handleChange}
                                    sx={{ mb: 3 }}
                                />

                                <Button
                                    variant="contained"
                                    onClick={guardarCambios}
                                    sx={{
                                        borderRadius: 3,
                                        background:
                                            'linear-gradient(135deg, #1e3a8a, #3b82f6)'
                                    }}
                                >
                                    Guardar Cambios
                                </Button>
                            </>
                        )}

                    </Box>

                </Paper>
                
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        startIcon={<span>←</span>}
                        sx={{
                            px: 4,
                            py: 1.2,
                            borderRadius: 3,
                            background:
                                'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                            boxShadow:
                                '0 4px 14px rgba(30,58,138,0.3)',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow:
                                    '0 8px 20px rgba(30,58,138,0.4)'
                            }
                        }}
                    >
                        Volver al inicio
                    </Button>
                </Box>

            </Container>

        </Box>
    );
};

export default PerfilUsuario;