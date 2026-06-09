import React, { useState } from "react";
import { HiMail, HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const email = "agarth867@gmail.com";
  const githubUrl = "https://github.com/aryorisgarth";
  const linkedinUrl = "https://www.linkedin.com/in/adolfo-floreano";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Reemplazar con clave gratuita de web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nuevo mensaje de contacto de ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      setStatus("error");
    }
  };

  const links = [
    {
      id: "email",
      label: "Email Directo",
      href: `mailto:${email}`,
      icon: HiMail,
      aria: "Enviar email directo",
    },
    {
      id: "github",
      label: "GitHub",
      href: githubUrl,
      icon: FaGithub,
      aria: "Ver perfil en GitHub",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: linkedinUrl,
      icon: FaLinkedin,
      aria: "Ver perfil en LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-900 text-gray-300 body-font py-24 px-4 border-t border-slate-800"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4">
            Contacto
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            ¿Tienes un proyecto en mente o buscas incorporar talento a tu equipo? ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Información y Redes Sociales */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-white mb-2">Conéctate conmigo</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Puedes enviarme un mensaje usando el formulario, escribirme directamente por correo electrónico, o revisar mi actividad y proyectos en LinkedIn y GitHub.
            </p>
            <div className="flex flex-col gap-4">
              {links.map(({ id, label, href, icon: Icon, aria }) => (
                <a
                  key={id}
                  href={href}
                  target={id === "email" ? undefined : "_blank"}
                  rel={id === "email" ? undefined : "noopener noreferrer"}
                  aria-label={aria}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl bg-slate-950/40 hover:bg-blue-900/10 border border-slate-800 hover:border-blue-500/20 transition-all duration-300 text-gray-300 hover:text-white group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 group-hover:text-blue-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">{label}</span>
                  </div>
                  {id !== "email" ? (
                    <HiOutlineExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  ) : (
                    <span className="text-xs text-blue-400 font-semibold group-hover:underline">agarth867@gmail.com</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Formulario interactivo */}
          <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="300">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-950/40 border border-slate-800/80 p-6 sm:p-8 rounded-2xl flex flex-col gap-5 shadow-2xl backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-white border-b border-slate-900 pb-3">Enviar un Mensaje</h3>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-900/30 border border-green-800 text-green-300 rounded-xl text-sm text-center">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-900/30 border border-red-800 text-red-300 rounded-xl text-sm text-center">
                  Ocurrió un error al enviar el mensaje. Por favor, escríbeme directamente a {email}.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-2 relative group flex items-center justify-center gap-2"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-65 group-hover:opacity-100 transition duration-300"></div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="relative w-full bg-slate-900 hover:bg-slate-950 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all border border-slate-800 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                  <FaPaperPlane className="w-3.5 h-3.5" />
                </button>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
