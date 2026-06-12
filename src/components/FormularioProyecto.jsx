import React from 'react';
import { useState } from 'react';
import {TextField,Button,MenuItem,Stack,Typography,Alert} from "@mui/material";

const FormularioProyecto = ({ onAgregar }) => {
    const [error, setError] = useState("");

    const [formProyecto, setFormProyecto] = useState({
      título: "",
      categoría: "",
      estado: "",
      descripcion: "",
      pdf: "",
      drive: "",
      github: "",
      nombreIntegrante: "",
      rolIntegrante: ""
    });
    const handleAgregarProyecto = (e) => {
      e.preventDefault();
      
      //desestructuración al objeto del estado
      const { 
        título, categoría, estado, descripcion
      } = formProyecto;
      
      //validamos de los campos obligatorios
      
      if (!título.trim() ||!categoría.trim() ||!estado ||!descripcion.trim()) {
  setError("Por favor, completa los campos principales");
  return;
}
      setError("");
      onAgregar(formProyecto);

    //aqui limpiamos todo el formulario
      setFormProyecto({
        título: "",
        categoría: "",
        estado: "",
        descripcion: "",
        pdf: "",
        drive: "",
        github: "",
        nombreIntegrante: "",
        rolIntegrante: "",
      });
    }
    return (
        <form onSubmit={handleAgregarProyecto}>
          <Typography
            variant="h5"
          >
            Nuevo Proyecto
          </Typography>

      
            {error && (
             <Alert severity="error">
              {error}
            </Alert>
            )}
            <Stack spacing ={2}>
             <TextField
              label="Título del proyecto"
              value={formProyecto.título}
              onChange={(e) =>setFormProyecto({...formProyecto,título: e.target.value})}
              fullWidth
            />
      
            
            <TextField
            label="Categoría (Ej: Web, Mobile)..."
            value={formProyecto.categoría}
            onChange={(e) => setFormProyecto({ ...formProyecto, categoría: e.target.value })}
            />

           
            <TextField
              select
              label="Estado"
              value={formProyecto.estado}
              onChange={(e) =>setFormProyecto({...formProyecto,estado: e.target.value})}
              fullWidth
            > 
            <MenuItem value="Planificación">
              Planificación
            </MenuItem>

            <MenuItem value="En progreso">
              En progreso
            </MenuItem>

            <MenuItem value="Terminado">
              Terminado
            </MenuItem>
          </TextField>

            {/* nuevo campo de Descripción Extendida */}
          
            <TextField
              label="Descripción"
              multiline
              rows={4}
              value={formProyecto.descripcion}
              onChange={(e) =>
              setFormProyecto({...formProyecto,descripcion: e.target.value})}
              fullWidth
            />

            {/* nuevo campos de Recursos */}
           
            <TextField
            label="Link de Recurso PDF (Opcional)..."
            value={formProyecto.pdf}
            onChange={(e) => setFormProyecto({ ...formProyecto, pdf: e.target.value })}
            fullWidth
            />
            
           
            <TextField
            label="Link de Google Drive (Opcional)..."
            value={formProyecto.drive}
            onChange={(e) => setFormProyecto({ ...formProyecto, drive: e.target.value })}          
            fullWidth
            />
            
            <TextField
            label="Link de GitHub (Opcional)..."
            value={formProyecto.github}
            onChange={(e) => setFormProyecto({ ...formProyecto, github: e.target.value })}           
            fullWidth
            />

            {/*nuevo campos de Integrante de Equipo */}
           
            <TextField
            label="Nombre del Integrante (Opcional)..."
            value={formProyecto.nombreIntegrante}
             onChange={(e) => setFormProyecto({ ...formProyecto, nombreIntegrante: e.target.value })}
            fullWidth
            />
            
            <TextField
            label="Rol del Integrante (Ej: Desarrollador)..."
            value={formProyecto.rolIntegrante}
            onChange={(e) => setFormProyecto({ ...formProyecto, rolIntegrante: e.target.value })}
            fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              AGREGAR PROYECTO
            </Button>
          </Stack>
        </form>
    );
};

export default FormularioProyecto;