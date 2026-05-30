import "../css/header.css";

import logo from "../assets/logito.png";

const Header = () =>{
  return (
    <header className="encabezado-sitio">
      <img src={logo} alt="Logo del sitio" className="logo-sitio" />
      <h1>Gestor de Proyectos Académicos - ¡Te damos la bienvenida!</h1>
    </header>
  );
}

export default Header;
