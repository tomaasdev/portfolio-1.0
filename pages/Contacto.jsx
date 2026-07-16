import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { LuSendHorizontal } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { useLang } from "../src/context/useLang";
import "../styles/Contacto.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const LIMITE_24H = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

function Contacto() {
  const { t } = useLang();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    honeypot: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEnviar = async (e) => {
    e.preventDefault();

    if (enviando || enviado) return;

    if (form.honeypot) {
      console.log("Bot detectado, envío bloqueado");
      return;
    }

    const ultimoEnvio = localStorage.getItem("ultimoEnvioContacto");
    if (ultimoEnvio) {
      const tiempoPasado = Date.now() - parseInt(ultimoEnvio, 10);
      if (tiempoPasado < LIMITE_24H) {
        setBloqueado(true);
        return;
      }
    }

    setEnviando(true);
    setError(false);
    setBloqueado(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.nombre,
          from_email: form.email,
          message: form.mensaje,
        },
        PUBLIC_KEY,
      );
      localStorage.setItem("ultimoEnvioContacto", Date.now().toString());

      setEnviando(false);
      setEnviado(true);
      setForm({ nombre: "", email: "", mensaje: "", honeypot: "" });
      setTimeout(() => setEnviado(false), 3500);
    } catch (err) {
      console.error(err);
      setEnviando(false);
      setError(true);
    }
  };

  return (
    <div className="contacto-cont">
      <div className="redes-info">
        <div>
          <div className="contacto-titulo">{t.contacto.titulo}</div>
          <div className="contacto-descr">{t.contacto.descripcion}</div>
        </div>
        <div className="redes-contacto">
          <a href="https://www.linkedin.com/feed/" className="tarjeta-peq">
            <FaLinkedin color="#4b43df" size="15px" />
            <div className="red-name">Linkedin</div>
          </a>
          <a href="mailto:tomas7rossi@gmail.com" className="tarjeta-peq">
            <CgMail color="#4b43df" size="15px" />
            <div className="red-name">{t.contacto.gmail}</div>
          </a>
          <a
            href="https://www.instagram.com/tomaas_dev/"
            className="tarjeta-peq"
          >
            <FaInstagram color="#4b43df" size="15px" />
            <div className="red-name">Instagram</div>
          </a>
          <a href="https://github.com/tomaasdev" className="tarjeta-peq">
            <FaGithub color="#4b43df" size="15px" />
            <div className="red-name">GitHub</div>
          </a>
        </div>
      </div>

      <div className="formulario-contacto">
        <form className="formulario-conteiner" onSubmit={handleEnviar}>
          <div className="input-cont-1">
            <div className="sub-1">
              <label className="titulo-input" htmlFor="nombre">
                {t.contacto.nombre}
              </label>
              <br />
              <input
                className="input-normal-1"
                type="text"
                name="nombre"
                id="nombre"
                placeholder={t.contacto.placeholder_nombre}
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sub-1">
              <label className="titulo-input" htmlFor="email">
                {t.contacto.gmail}
              </label>
              <br />
              <input
                className="input-normal-1"
                type="email"
                name="email"
                id="email"
                placeholder={t.contacto.placeholder_email}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-cont-2">
            <label className="titulo-input" htmlFor="mensaje">
              {t.contacto.mensaje}
            </label>
            <br />
            <textarea
              className="input-normal-2"
              name="mensaje"
              id="mensaje"
              placeholder={t.contacto.placeholder_mensaje}
              value={form.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          {error && (
            <p className="error-msg">Algo salió mal, intentá de nuevo.</p>
          )}
          {bloqueado && (
            <p className="error-msg">
              {t.contacto.error}
            </p>
          )}

          <button
            className={`boton-contacto ${enviando ? "enviando" : ""} ${enviado ? "enviado" : ""}`}
            type="submit"
            disabled={enviando || enviado}
          >
            <LuSendHorizontal strokeWidth={2.5} className="icono-avion" />
            <span className="boton-texto">
              {enviando
                ? t.contacto.enviando
                : enviado
                  ? t.contacto.enviado
                  : t.contacto.boton}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
