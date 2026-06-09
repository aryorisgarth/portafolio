import React from "react";

const experiences = [
  {
    id: 1,
    title: "Ingeniería en Sistemas",
    subtitle: "Formación académica",
    description: "Egresado de la carrera de Ingeniería en Sistemas.",
  },
  {
    id: 2,
    title: "Desarrollo web con React",
    subtitle: "Front-end",
    description: "Proyectos modernos con React, JavaScript y Tailwind CSS.",
  },
  {
    id: 3,
    title: "Proyectos personales",
    subtitle: "Portafolio y CRUD",
    description: "Aplicaciones propias para practicar y mostrar mi trabajo.",
  },
  {
    id: 4,
    title: "Formación continua",
    subtitle: "Actualización",
    description: "Cursos y práctica constante en nuevas tecnologías front-end y back-end.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="text-gray-300 body-font bg-slate-900 py-24">
      <div className="container px-5 mx-auto max-w-5xl">
        <div className="flex flex-col text-center w-full mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4"
          >
            Experiencia & Formación
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400"
          >
            Formación en Ingeniería en Sistemas y desarrollo de proyectos front-end con React. En constante actualización profesional.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-1 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-slate-950/60 p-6 rounded-[14px] h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/35 rounded-full mb-4">
                    {exp.subtitle}
                  </span>
                  <h3 className="title-font font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="leading-relaxed text-sm text-gray-400 mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
