import { Link } from "react-router-dom";

function Card({ imagen, titulo, descripcion, precio }) {
  return (
    <article className="tarjeta">
      <img src={imagen} alt={titulo} />

      <div className="tarjeta-contenido">
        <h3>{titulo}</h3>

        <p>{descripcion}</p>

        <strong className="precio">{precio}</strong>

        <Link className="btn" to="/contacto">
  Pedir ahora
</Link>
      </div>
    </article>
  );
}

export default Card;