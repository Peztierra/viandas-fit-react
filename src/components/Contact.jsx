import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    entrega: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Datos del formulario:", form);
  };

  const handleReset = () => {
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "",
      entrega: "",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-info">
        <div className="section-title section-title-left">
          <h2>Hacé tu pedido</h2>
          <span></span>
        </div>

        <p>
          <i className="fa-solid fa-phone"></i> 351111111
        </p>

        <p>
          <i className="fa-solid fa-envelope"></i> info@viandasfit.com
        </p>

        <p>
          <i className="fa-solid fa-location-dot"></i> Córdoba, Argentina
        </p>

        <div className="social">
          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="#" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="section-title section-title-left">
          <h2>Enviános tu consulta</h2>
          <span></span>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>

            <input
              type="number"
              id="telefono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="motivo">Motivo de contacto</label>

          <select
            id="motivo"
            name="motivo"
            value={form.motivo}
            onChange={handleChange}
            required
          >
            <option value="">Seleccioná una opción</option>
            <option value="pedido">Quiero hacer un pedido</option>
            <option value="menu">Consultar menú</option>
            <option value="consulta">Otra consulta</option>
          </select>
        </div>

        <fieldset>
          <legend>¿Cómo preferís recibir tu pedido?</legend>

          <label>
            <input
              type="radio"
              name="entrega"
              value="domicilio"
              checked={form.entrega === "domicilio"}
              onChange={handleChange}
              required
            />
            Envío a domicilio
          </label>

          <label>
            <input
              type="radio"
              name="entrega"
              value="retiro"
              checked={form.entrega === "retiro"}
              onChange={handleChange}
            />
            Retiro
          </label>
        </fieldset>

        <div className="form-group">
          <label htmlFor="mensaje">Comentarios</label>

          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={form.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-buttons">
          <button className="btn" type="submit">
            <i className="fa-solid fa-paper-plane"></i>
            Enviar mensaje
          </button>

          <button
            className="btn btn-reset"
            type="button"
            onClick={handleReset}
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;