import React from "react";
import { HiMail, HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const email = "agarth867@gmail.com";
  const githubUrl = "https://github.com/aryorisgarth";
  const linkedinUrl = "https://www.linkedin.com/in/adolfo-floreano";

  const links = [
    {
      id: "email",
      label: "Email",
      href: `mailto:${email}`,
      icon: HiMail,
      aria: "Enviar email",
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
      className="bg-slate-900 text-gray-300 body-font py-20 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Contacto
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Escríbeme y trabajamos juntos.
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {links.map(({ id, label, href, icon: Icon, aria }) => (
            <a
              key={id}
              href={href}
              target={id === "email" ? undefined : "_blank"}
              rel={id === "email" ? undefined : "noopener noreferrer"}
              aria-label={aria}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-600/50 transition-all duration-300 text-white hover:text-blue-200"
            >
              <Icon className="w-6 h-6 flex-shrink-0" />
              <span className="font-medium">{label}</span>
              {id !== "email" && (
                <HiOutlineExternalLink className="w-4 h-4 opacity-70" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
