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

           {/*className="formulario-alta">*/}
            {/*//Nuevo Proyecto*/}
          {/*<div className="grupo-input">*/}
            {/* Campos Principales Actualizados */}
            {/* <input
              type="text"
              placeholder="Título del proyecto..."
              value={formProyecto.título}
              onChange={(e) => setFormProyecto({ ...formProyecto, título: e.target.value })}
            />*/}
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
        

            {/*<input
              type="text"
              placeholder="Categoría (Ej: Web, Mobile)..."
              value={formProyecto.categoría}
              onChange={(e) => setFormProyecto({ ...formProyecto, categoría: e.target.value })}
            />*/}
            <TextField
            label="Categoría (Ej: Web, Mobile)..."
            value={formProyecto.categoría}
            onChange={(e) => setFormProyecto({ ...formProyecto, categoría: e.target.value })}
            />

           {/* <select
              value={formProyecto.estado}
              onChange={(e) => setFormProyecto({ ...formProyecto, estado: e.target.value })}
              className="select-estado"
            >
              <option value="" disabled hidden>Estado</option>
              <option value="Planificación">Planificación</option>
              <option value="En progreso">En progreso</option>
              <option value="Terminado">Terminado</option>
            </select>*/}
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
            {/*<textarea
              placeholder="Descripción del proyecto (Mínimo dos párrafos separados por doble espacio)..."
              value={formProyecto.descripcion}
              onChange={(e) => setFormProyecto({ ...formProyecto, descripcion: e.target.value })}
              style={{ width: "100%", padding: "0.6rem", borderRadius: "4px", border: "1px solid #cbd5e1", minHeight: "80px" }}
            />*/}
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
            {/*<input
              type="text"
              placeholder="Link de Recurso PDF (Opcional)..."
              value={formProyecto.pdf}
              onChange={(e) => setFormProyecto({ ...formProyecto, pdf: e.target.value })}
            />*/}
            <TextField
            label="Link de Recurso PDF (Opcional)..."
            value={formProyecto.pdf}
            onChange={(e) => setFormProyecto({ ...formProyecto, pdf: e.target.value })}
            fullWidth
            />
            
            {/*<input
              type="text"
              placeholder="Link de Google Drive (Opcional)..."
              value={formProyecto.drive}
              onChange={(e) => setFormProyecto({ ...formProyecto, drive: e.target.value })}
            />*/}
            <TextField
            label="Link de Google Drive (Opcional)..."
            value={formProyecto.drive}
            onChange={(e) => setFormProyecto({ ...formProyecto, drive: e.target.value })}          
            fullWidth
            />
            {/*<input
              type="text"
              placeholder="Link de GitHub (Opcional)..."
              value={formProyecto.github}
              onChange={(e) => setFormProyecto({ ...formProyecto, github: e.target.value })}
            />*/}
            <TextField
            label="Link de GitHub (Opcional)..."
            value={formProyecto.github}
            onChange={(e) => setFormProyecto({ ...formProyecto, github: e.target.value })}           
            fullWidth
            />

            {/*nuevo campos de Integrante de Equipo */}
           {/* <input
              type="text"
              placeholder="Nombre del Integrante (Opcional)..."
              value={formProyecto.nombreIntegrante}
              onChange={(e) => setFormProyecto({ ...formProyecto, nombreIntegrante: e.target.value })}
            />*/}
            <TextField
            label="Nombre del Integrante (Opcional)..."
            value={formProyecto.nombreIntegrante}
             onChange={(e) => setFormProyecto({ ...formProyecto, nombreIntegrante: e.target.value })}
            fullWidth
            />
            {/*<input
              type="text"
              placeholder="Rol del Integrante (Ej: Desarrollador)..."
              value={formProyecto.rolIntegrante}
              onChange={(e) => setFormProyecto({ ...formProyecto, rolIntegrante: e.target.value })}
            />*/}
            <TextField
            label="Rol del Integrante (Ej: Desarrollador)..."
            value={formProyecto.rolIntegrante}
            onChange={(e) => setFormProyecto({ ...formProyecto, rolIntegrante: e.target.value })}
            fullWidth
            />

            {/*<button type="submit" className="btn-guardar" style={{ width: "100%", marginTop: "10px" }}>
              AGREGAR PROYECTO
            </button>*/}
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