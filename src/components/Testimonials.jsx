function Testimonials() {
  const testimonios = [
    {
      id: 1,
      texto:
        "Las viandas son riquísimas y me ahorran mucho tiempo. Se nota la calidad de los ingredientes.",
      nombre: "María L.",
    },
    {
      id: 2,
      texto:
        "Excelente atención y siempre llegan en horario. Mis favoritas son las pastas caseras.",
      nombre: "Lucas G.",
    },
    {
      id: 3,
      texto:
        "Opciones variadas y saludables. Ideal para mantener una buena alimentación.",
      nombre: "Carla R.",
    },
  ];

  return (
    <section className="testimonios">
      <div className="section-title">
        <h2>Lo que dicen nuestros clientes</h2>
        <span></span>
      </div>

      <div className="testimonios-container">
        {testimonios.map((testimonio) => (
          <article key={testimonio.id}>
            <i className="fa-solid fa-quote-left"></i>

            <p>{testimonio.texto}</p>

            <strong>{testimonio.nombre}</strong>

            <div className="estrellas">★★★★★</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;