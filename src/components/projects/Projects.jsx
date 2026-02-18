import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import invent from "../../assets/inventory.png";


const ProjectPlaceholder = ({ tech, title }) => (
  <div
    className="h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-800/80 to-slate-800"
    aria-hidden
  >
    <span className="text-white/90 text-sm font-medium text-center">
      {tech || title}
    </span>
  </div>
);

const ProjectsCard = ({ image, title, description, demoUrl, repoUrl, tech }) => {
  const hasLink = demoUrl || repoUrl;
  const linkUrl = demoUrl || repoUrl;
  const hasImage = Boolean(image);

  const cardContent = (
    <div className="rounded-lg h-52 overflow-hidden bg-slate-800/50 border border-slate-700 flex items-stretch">
      {hasImage ? (
        <img
          src={image}
          alt={`Captura del proyecto ${title}`}
          className="object-cover object-center h-full w-full hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <ProjectPlaceholder tech={tech} title={title} />
      )}
    </div>
  );

  return (
    <article className="p-4 md:w-1/2 lg:max-w-md mb-6 flex flex-col">
      {hasLink ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-950 rounded-lg overflow-hidden"
          aria-label={`Ver proyecto ${title}`}
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
      <h2 className="text-xl font-medium text-white mt-4">{title}</h2>
      {description && (
        <p className="text-gray-400 text-sm mt-2 line-clamp-2 flex-1">
          {description}
        </p>
      )}
      {hasLink && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-100 inline-flex items-center mt-3 gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded w-fit"
        >
          {demoUrl ? "Ver demo" : "Ver código"}
          <HiOutlineExternalLink className="w-4 h-4" />
        </a>
      )}
    </article>
  );
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portafolio",
      description:
        "Este sitio web: React, Vite y Tailwind CSS. Diseño responsive y en español.",
      image: null,
      tech: "React · Vite · Tailwind",
      demoUrl: "",
      repoUrl: "https://github.com/aryorisgarth",
    },
    {
      id: 2,
      title: "CRUD React JavaScript",
      description:
        "Aplicación CRUD con React y JavaScript. Código disponible en GitHub.",
      image: invent,
      tech: "",
      demoUrl: "",
      repoUrl: "https://github.com/aryorisgarth/crud-react-javascript",
    },
  ];

  const githubProfileUrl = "https://github.com/aryorisgarth";

  return (
    <section id="projects" className="text-gray-400 bg-blue-950 body-font">
      <div className="container px-4 sm:px-6 py-16 mx-auto max-w-5xl">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap sm:flex-row flex-col gap-4 py-6 mb-12 items-start justify-between"
        >
          <div className="sm:w-2/5">
            <h2 className="text-white font-semibold title-font text-3xl mb-2">
              Proyectos
            </h2>
            <p className="leading-relaxed text-base text-gray-400">
              Algunos de los proyectos en los que he trabajado. Puedes ver el
              código o la demo en cada tarjeta.
            </p>
          </div>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-900 bg-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center transition-colors inline-flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" />
            Ver todo en GitHub
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-wrap -m-4 justify-center md:justify-start"
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
