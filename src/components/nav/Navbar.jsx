import React, { useState } from "react";
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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 body-font bg-blue-950/95 backdrop-blur-sm border-b border-white/5"
      role="banner"
    >
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
        <a
          href="#home"
          className="flex title-font font-medium mb-0"
          aria-label="Volver al inicio"
        >
          <span className="font-bold text-white text-xl sm:text-2xl tracking-wider bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
            PORTAFOLIO
          </span>
        </a>

        {/* Botón de Menú Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1 transition-colors"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Navegación para pantallas grandes */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300"
          aria-label="Navegación principal desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              aria-label={link.aria}
              className="hover:text-white hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-950 rounded px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Navegación desplegable móvil */}
        <nav
          className={`${
            isOpen ? "flex animate-fade-in-down" : "hidden"
          } md:hidden flex-col w-full mt-4 gap-3 text-sm font-medium text-gray-300 border-t border-white/5 pt-4`}
          aria-label="Navegación principal móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              aria-label={link.aria}
              onClick={() => setIsOpen(false)}
              className="hover:text-white hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-3 py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
