import Card from "./Card";

import pollo from "../assets/img/pollo.jpg";
import pastas from "../assets/img/pastas.jpg";
import ensalada from "../assets/img/ensalada.jpg";
import veggie from "../assets/img/veggie.png";

function Menu() {
  const viandas = [
    {
      id: 1,
      titulo: "Pollo al horno",
      descripcion:
        "Pollo al horno con arroz integral y verduras salteadas.",
      precio: "$7.500",
      imagen: pollo,
    },
    {
      id: 2,
      titulo: "Pastas caseras",
      descripcion:
        "Pasta casera con salsa de tomate natural y albahaca.",
      precio: "$6.900",
      imagen: pastas,
    },
    {
      id: 3,
      titulo: "Ensalada César",
      descripcion:
        "Lechuga, pollo, crustones, queso parmesano y aderezo.",
      precio: "$6.000",
      imagen: ensalada,
    },
    {
      id: 4,
      titulo: "Hamburguesa veggie",
      descripcion:
        "Hamburguesa de legumbres con puré de batata y vegetales.",
      precio: "$6.800",
      imagen: veggie,
    },
  ];

  return (
    <section id="menu" className="section">
      <div className="section-title">
        <h2>Nuestras viandas</h2>
        <span></span>
      </div>

      <div className="tarjetas">
        {viandas.map((vianda) => (
          <Card
            key={vianda.id}
            titulo={vianda.titulo}
            descripcion={vianda.descripcion}
            precio={vianda.precio}
            imagen={vianda.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;