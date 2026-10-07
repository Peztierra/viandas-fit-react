import pollo from "../assets/img/pollo.jpg";
import pastas from "../assets/img/pastas.jpg";
import ensalada from "../assets/img/ensalada.jpg";
import arroz from "../assets/img/arroz.jpg";
import carne from "../assets/img/carne.jpg";
import lentejas from "../assets/img/lentejas.jpg";
import veggie from "../assets/img/veggie.png";
import pescado from "../assets/img/pescado.jpg";

function Gallery() {
  const imagenes = [
    {
      id: 1,
      imagen: pollo,
      titulo: "Pollo al horno",
    },
    {
      id: 2,
      imagen: pastas,
      titulo: "Pastas caseras",
    },
    {
      id: 3,
      imagen: ensalada,
      titulo: "Ensaladas",
    },
    {
      id: 4,
      imagen: arroz,
      titulo: "Arroz y vegetales",
    },
    {
      id: 5,
      imagen: carne,
      titulo: "Carne",
    },
    {
      id: 6,
      imagen: lentejas,
      titulo: "Lentejas",
    },
    {
      id: 7,
      imagen: veggie,
      titulo: "Hamburguesa veggie",
    },
    {
      id: 8,
      imagen: pescado,
      titulo: "Pescado",
    },
  ];

  return (
    <section id="galeria" className="section">
      <div className="section-title">
        <h2>Nuestra galería</h2>
        <span></span>
      </div>

      <div className="galeria">
        {imagenes.map((imagen) => (
          <figure key={imagen.id}>
            <img src={imagen.imagen} alt={imagen.titulo} />
            <figcaption>{imagen.titulo}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;