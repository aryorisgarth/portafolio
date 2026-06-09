import React from "react";
import CV_RESUME from "./CV_Adolfo_Floreano_English.pdf";
import {
  FaNodeJs,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiPrisma,
  SiSpringboot,
  SiNextdotjs,
  SiReactrouter,
  SiAxios,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiVisualstudiocode,
  SiKeycloak
} from "react-icons/si";

const skillCategories = [
  {
    title: "Lenguajes & Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-emerald-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
    ],
  },
  {
    title: "Frameworks y Bibliotecas",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-sky-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "React Router", icon: SiReactrouter, color: "text-red-400" },
      { name: "Axios / Fetch API", icon: SiAxios, color: "text-indigo-400" },
    ],
  },
  {
    title: "Fundamentos Frontend",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3 / Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
    ],
  },
  {
    title: "Herramientas & Seguridad",
    skills: [
      { name: "Git y GitHub", icon: FaGithub, color: "text-gray-200" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500" },
      { name: "Keycloak", icon: SiKeycloak, color: "text-red-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Habilidades Profesionales
          </h2>
          <p className="text-gray-400 text-sm mt-3 tracking-wide">
            Tecnologías y herramientas que utilizo para desarrollar soluciones web
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800/80 backdrop-blur rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-slate-800 pb-3">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:bg-slate-800/30 hover:border-slate-700 transition-all duration-300 group"
                    >
                      <Icon className={`w-6 h-6 ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`} />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Download CV */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a href={CV_RESUME} download className="inline-block relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <button type="button" className="relative bg-slate-900 hover:bg-slate-950 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 border border-slate-800">
              Descargar CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
