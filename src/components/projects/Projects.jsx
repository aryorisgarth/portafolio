import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import invent from "../../assets/inventory.png";

const ProjectsCard = ({ image, title, description, demoUrl, repoUrl, tech }) => {
  const hasImage = Boolean(image);

  return (
    <article className="p-4 md:w-1/2 w-full flex flex-col" data-aos="fade-up">
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full hover:border-blue-500/30 transition-all duration-300 shadow-xl group">
        {/* Imagen / Placeholder */}
        <div className="h-52 w-full overflow-hidden bg-slate-950 flex items-stretch border-b border-slate-800 relative">
          {hasImage ? (
            <img
              src={image}
              alt={`Captura del proyecto ${title}`}
              className="object-cover object-top h-full w-full group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950">
              <span className="text-blue-400 text-lg font-bold tracking-wider">
                {title}
              </span>
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed flex-1">
            {description}
          </p>

          {/* Tags */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 mb-6">
              {tech.map((t, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 text-xs font-semibold text-blue-300 bg-blue-900/30 border border-blue-800/30 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Enlaces de Acción */}
          <div className="flex items-center gap-4 border-t border-slate-800/60 pt-4 mt-auto">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
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
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
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
      demoUrl: "",
      repoUrl: "https://github.com/aryorisgarth/portafolio-website",
    },
    {
      id: 2,
      title: "CRUD React JavaScript",
      description:
        "Aplicación interactiva de gestión (CRUD) con React, JavaScript y estilos personalizados, ideal para administración y control de inventarios.",
      image: invent,
      tech: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
      demoUrl: "",
      repoUrl: "https://github.com/aryorisgarth/crud-react-javascript",
    },
  ];

  const githubProfileUrl = "https://github.com/aryorisgarth";

  return (
    <section id="projects" className="text-gray-400 bg-slate-950 body-font py-20">
      <div className="container px-4 sm:px-6 mx-auto max-w-5xl">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap sm:flex-row flex-col gap-4 py-6 mb-12 items-start justify-between border-b border-slate-900 pb-8"
        >
          <div className="sm:w-2/5">
            <h2 className="text-white font-bold title-font text-3xl sm:text-4xl mb-3">
              Proyectos Destacados
            </h2>
            <p className="leading-relaxed text-sm text-gray-400">
              Algunos de los proyectos en los que he trabajado. Puedes ver el código o la demo en producción de cada uno.
            </p>
          </div>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center transition-all inline-flex items-center gap-2"
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
