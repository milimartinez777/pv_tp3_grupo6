import { createContext, useState, useContext, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(() => {

    const usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado);
    }

    return {
      nombre: "David Juarez",
      dni: "23549356",
      rol: "Alumno",
      institucion: "Facultad de Ingeniería"
    };
  });

  useEffect(() => {
    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );
  }, [usuario]);

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        actualizarPerfil
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  return useContext(UsuarioContext);
};