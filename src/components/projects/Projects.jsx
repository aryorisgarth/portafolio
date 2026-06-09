import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import invent from "../../assets/inventory.png";

const ProjectsCard = ({ image, title, description, demoUrl, repoUrl, tech }) => {
  const hasImage = Boolean(image);

  return (
    <article className="group relative" data-aos="fade-up">
      {/* Marco degradado exterior brillante en hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

      <div className="relative bg-slate-900/35 border border-slate-900 rounded-3xl overflow-hidden flex flex-col h-full hover:border-slate-800/80 transition-all duration-500 shadow-2xl backdrop-blur-sm">
        {/* Imagen con zoom y overlay */}
        <div className="h-56 w-full overflow-hidden bg-slate-950 border-b border-slate-900 relative">
          {hasImage ? (
            <>
              <img
                src={image}
                alt={`Captura del proyecto ${title}`}
                className="object-cover object-top h-full w-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500"></div>
            </>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-blue-955/30 to-indigo-950/30">
              <span className="text-blue-400 text-lg font-bold tracking-widest uppercase">
                {title}
              </span>
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed flex-1">
            {description}
          </p>

          {/* Tags */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5 mb-6">
              {tech.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-bold text-blue-300 bg-blue-950/40 border border-blue-900/40 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Enlaces de Acción */}
          <div className="flex items-center gap-6 border-t border-slate-900/80 pt-4 mt-auto">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Ver Demo
                <HiOutlineExternalLink className="w-4 h-4" />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-bold text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portafolio Personal",
      description:
        "Mi sitio web profesional e interactivo, desarrollado con React, Vite y Tailwind CSS, implementando animaciones modernas, modo oscuro y optimización SEO.",
      image: null,
      tech: ["React", "Vite", "Tailwind CSS", "AOS"],
      demoUrl: "", // Configurar cuando esté en producción
      repoUrl: "https://github.com/aryorisgarth/portafolio-website",
    },
    {
      id: 2,
      title: "CRUD React JavaScript",
      description:
        "Aplicación interactiva de gestión (CRUD) con React, JavaScript y estilos personalizados, ideal para administración y control de inventarios.",
      image: invent,
      tech: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
      demoUrl: "", // Configurar cuando esté en producción
      repoUrl: "https://github.com/aryorisgarth/crud-react-javascript",
    },
  ];

  const githubProfileUrl = "https://github.com/aryorisgarth";

  return (
    <section id="projects" className="text-gray-400 bg-slate-950 body-font py-24 relative overflow-hidden">
      {/* Luz ambiental */}
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container px-4 sm:px-6 mx-auto max-w-5xl relative z-10">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col sm:flex-row gap-4 py-6 mb-16 items-start sm:items-center justify-between border-b border-slate-900 pb-8"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-400 bg-blue-900/20 border border-blue-900/35 rounded-full px-3.5 py-1.5 uppercase">
              Portafolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4">
              Proyectos Destacados
            </h2>
          </div>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 focus:outline-none font-semibold rounded-full text-sm px-6 py-3 text-center transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            <FaGithub className="w-4 h-4" />
            Ver todo en GitHub
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
