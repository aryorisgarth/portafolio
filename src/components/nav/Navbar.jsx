import React from "react";

const navLinks = [
  { id: 1, name: "Home", link: "#home", aria: "Ir al inicio" },
  { id: 2, name: "Skills", link: "#skills", aria: "Ir a habilidades" },
  { id: 3, name: "Experience", link: "#experience", aria: "Ir a experiencia" },
  { id: 4, name: "Proyectos", link: "#projects", aria: "Ir a proyectos" },
  { id: 5, name: "Contacto", link: "#contact", aria: "Ir a contacto" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 body-font bg-blue-950/95 backdrop-blur-sm border-b border-white/5"
      role="banner"
    >
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        <a
          href="#home"
          className="flex title-font font-medium mb-4 md:mb-0"
          aria-label="Volver al inicio"
        >
          <span className="font-bold text-white text-xl sm:text-2xl">
            PORTAFOLIO
          </span>
        </a>
        <nav
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-medium text-gray-300"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              aria-label={link.aria}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-950 rounded px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
