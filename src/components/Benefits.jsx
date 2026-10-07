function Benefits() {
  const beneficios = [
    {
      id: 1,
      icono: "fa-solid fa-leaf",
      titulo: "Ingredientes frescos",
      descripcion:
        "Seleccionamos los mejores ingredientes todos los días.",
    },
    {
      id: 2,
      icono: "fa-solid fa-motorcycle",
      titulo: "Entrega a domicilio",
      descripcion:
        "Recibí tus viandas donde estés, todos los días.",
    },
    {
      id: 3,
      icono: "fa-solid fa-calendar-days",
      titulo: "Menú semanal",
      descripcion:
        "Variedad de opciones para toda la semana.",
    },
    {
      id: 4,
      icono: "fa-solid fa-seedling",
      titulo: "Opciones vegetarianas",
      descripcion:
        "Tenemos opciones ricas y saludables para vos.",
    },
  ];

  return (
    <section id="beneficios" className="beneficios">
      <div className="section-title">
        <h2>¿Por qué elegirnos?</h2>
        <span></span>
      </div>

      <div className="beneficios-container">
        {beneficios.map((beneficio) => (
          <article key={beneficio.id}>
            <i className={beneficio.icono}></i>

            <h3>{beneficio.titulo}</h3>

            <p>{beneficio.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Benefits;