function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="letras-chicas-arriba">VIANDAS CASERAS</p>

        <h1>
          Comida casera,
          <br />
          <span>sana y rica.</span>
        </h1>

        <p>
          Viandas equilibradas, preparadas todos los días con ingredientes
          frescos y de calidad.
        </p>

        <a className="btn" href="#menu">
          <i className="fa-solid fa-utensils"></i>
          Ver menú
        </a>
      </div>
    </section>
  );
}

export default Hero;