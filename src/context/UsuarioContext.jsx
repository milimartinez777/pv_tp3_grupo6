import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  // Aquí definimos el estado inicial simulado del usuario
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    dni: "12345678",
    rol: "Alumno", // Puede ser "Docente" o "Alumno"
    institucion: "Facultad de Informática"
  });

  return (
    <UsuarioContext.Provider value={{ usuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};