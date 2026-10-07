import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <i className="fa-solid fa-leaf"></i>

        <div>
          <strong>VIANDAS FIT</strong>
          <small>Comé sano todos los días</small>
        </div>
      </div>

      <nav aria-label="Navegación del pie de página">
            <a href="/#inicio">Inicio</a>
            <a href="/#menu">Menú</a>
            <a href="/#beneficios">Beneficios</a>
            <a href="/#galeria">Galería</a>
            <Link to="/contacto">Contacto</Link>
      </nav>

      <p>© 2026 Viandas Fit - Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;