import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    dni: "12345678",
    rol: "Alumno", // Puede ser "Docente" o "Alumno"
    institucion: "Facultad de Ingeniería"
  });
  //Esta es la funcion para actualizar los datos del perfil
  const actualizarPerfil = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};