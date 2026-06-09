import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: 1, name: "Home", link: "#home", aria: "Ir al inicio" },
  { id: 2, name: "Skills", link: "#skills", aria: "Ir a habilidades" },
  { id: 3, name: "Experience", link: "#experience", aria: "Ir a experiencia" },
  { id: 4, name: "Proyectos", link: "#projects", aria: "Ir a proyectos" },
  { id: 5, name: "Contacto", link: "#contact", aria: "Ir a contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${
        isScrolled ? "top-3 md:top-4" : "top-0 md:top-2"
      }`}
      role="banner"
    >
      <div
        className={`container mx-auto max-w-5xl flex flex-wrap items-center justify-between transition-all duration-500 rounded-3xl md:rounded-full ${
          isScrolled
            ? "backdrop-blur-xl bg-slate-950/70 border border-slate-800/85 py-3 px-6 shadow-2xl shadow-slate-950/40"
            : "backdrop-blur-md bg-slate-900/30 border border-slate-900/10 py-4 px-6 md:px-8"
        }`}
      >
        <a
          href="#home"
          className="flex title-font font-medium items-center"
          aria-label="Volver al inicio"
        >
          <span className="font-extrabold text-white text-xl sm:text-2xl tracking-widest bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            ADOLFO.dev
          </span>
        </a>

        {/* Botón de Menú Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1 transition-colors"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>

        {/* Navegación para pantallas grandes */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300"
          aria-label="Navegación principal desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              aria-label={link.aria}
              className="hover:text-blue-400 transition-colors focus:outline-none rounded-lg px-3 py-1.5 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Navegación móvil */}
        <nav
          className={`${
            isOpen ? "flex opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-4"
          } md:hidden flex-col w-full mt-4 gap-3 text-sm font-semibold text-gray-300 border-t border-slate-800/80 pt-4 transition-all duration-300`}
          aria-label="Navegación principal móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              aria-label={link.aria}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 hover:bg-slate-900/50 transition-all rounded-xl px-4 py-2.5 border border-transparent hover:border-slate-800"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
