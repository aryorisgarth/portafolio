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
    description: "Proyectos con React, JavaScript y Tailwind CSS.",
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
    description: "Cursos y práctica constante en nuevas tecnologías.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="text-gray-600 body-font bg-slate-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900"
          >
            Experiencia
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600"
          >
            Formación en Ingeniería en Sistemas y desarrollo de proyectos
            front-end con React. En constante aprendizaje.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-wrap -m-4 text-center"
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
            >
              <div className="border-2 border-blue-200 bg-white px-4 py-6 rounded-lg h-full hover:shadow-md transition-shadow">
                <h3 className="title-font font-medium text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-blue-700 text-sm font-medium mb-2">
                  {exp.subtitle}
                </p>
                <p className="leading-relaxed text-sm text-gray-600">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
