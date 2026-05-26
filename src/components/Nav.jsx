import "../css/nav.css";


const Nav = () => {
  return (
    <nav>
      <ul className="navLista">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Detalles</a></li>
        <li><a href="#">Mi Perfil</a></li>
      </ul>
    </nav>
  );
}

export default Nav;