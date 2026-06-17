import { createContext, useState, useContext } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "David Juarez",
    dni: "23549356",
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
export const useUsuario = () => {
    return useContext(UsuarioContext);
};