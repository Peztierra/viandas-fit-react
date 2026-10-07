import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <Link className="logo" to="/" aria-label="Viandas Fit inicio">
        <i className="fa-solid fa-leaf"></i>

        <span>
          <p>
            VIANDAS <strong>FIT</strong>
          </p>
          <small>Comé sano todos los días</small>
        </span>
      </Link>

      <nav className="nav" aria-label="Navegación principal">
        <a href="/#inicio">Inicio</a>
        <a href="/#menu">Menú</a>
        <a href="/#beneficios">Beneficios</a>
        <a href="/#galeria">Galería</a>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <Link className="btn btn-small" to="/contacto">
        <i className="fa-brands fa-whatsapp"></i>
        Pedí ahora
      </Link>
    </header>
  );
}

export default Navbar;