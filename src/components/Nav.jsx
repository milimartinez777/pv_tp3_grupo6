import "../css/nav.css";
import  {link} from "react-router-dom"


const Nav = () => {
  return (
    <nav>
      <ul className="navLista">
        <Link to="/dashboard">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/perfil">Perfil</Link>
      </ul>
    </nav>
  );
}

export default Nav;