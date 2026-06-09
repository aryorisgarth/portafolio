import React from "react";
import perfil from "../../assets/perfil.png";
import { FaChevronRight, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-24 pb-16">
      {/* Malla de luces radiales animadas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[160px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[160px] animate-pulse-glow-reverse"></div>
      </div>

      <section
        id="home"
        className="relative z-10 container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Contenido de texto */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1" data-aos="fade-right">
          <span className="inline-block px-3.5 py-1.5 text-xs font-bold tracking-widest text-blue-400 bg-slate-900/50 border border-blue-900/50 rounded-full mb-6 uppercase">
            Ingeniero en Sistemas · Frontend Developer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Adolfo Floreano <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Garth
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Especializado en el desarrollo de aplicaciones web responsivas e interactivas utilizando el ecosistema de React, Node.js y bases de datos modernas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <a href="#contact" className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative w-full sm:w-auto bg-slate-900 hover:bg-slate-950 text-white font-semibold py-3 px-8 rounded-full text-sm transition border border-slate-800 flex items-center justify-center gap-2">
                Contáctame
                <FaChevronRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto text-gray-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/30 hover:bg-slate-900/60 font-semibold py-3 px-8 rounded-full text-sm text-center transition-all"
            >
              Ver Proyectos
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-500">
            <a
              href="https://github.com/aryorisgarth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Perfil de GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/adolfo-floreano"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Perfil de LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Imagen de Perfil Flotante */}
        <div
          className="flex-shrink-0 order-1 md:order-2 animate-float-slow"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-500 shadow-2xl shadow-blue-500/15">
            <img
              src={perfil}
              alt="Adolfo Floreano Garth"
              className="h-[280px] sm:h-[380px] w-[240px] sm:w-[320px] object-cover rounded-[22px] bg-slate-950"
            />
            {/* Detalle visual decorativo */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"></div>
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
