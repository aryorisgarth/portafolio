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
    <section id="experience" className="text-gray-300 body-font bg-slate-900 py-24 relative overflow-hidden">
      {/* Luz ambiental */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container px-5 mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col text-center w-full mb-20">
          <span className="text-xs font-bold tracking-widest text-blue-400 bg-blue-900/20 border border-blue-900/35 rounded-full px-3.5 py-1.5 uppercase w-fit mx-auto mb-4">
            Trayectoria
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
          >
            Mi Experiencia & Formación
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:w-2/3 mx-auto leading-relaxed text-sm text-gray-400 mt-4"
          >
            Un recorrido por mi formación académica y mi aprendizaje técnico en el desarrollo de software.
          </p>
        </div>

        {/* Timeline Vertical */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-10 flex flex-col gap-12" data-aos="fade-up">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative pl-8 sm:pl-12 group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Viñeta circular del Timeline */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-4 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

              {/* Tarjeta del Timeline */}
              <div className="bg-slate-950/45 border border-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl hover:border-blue-500/20 transition-all duration-300 group-hover:bg-slate-900/10">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-300 bg-blue-950 border border-blue-900/30 rounded-full mb-4">
                  {exp.subtitle}
                </span>
                <h3 className="title-font font-bold text-white text-xl mb-3 group-hover:text-blue-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="leading-relaxed text-sm text-gray-400 leading-relaxed">
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
