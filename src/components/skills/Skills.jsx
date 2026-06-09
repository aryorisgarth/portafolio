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
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500", glow: "group-hover:shadow-green-500/5 group-hover:border-green-500/20" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400", glow: "group-hover:shadow-gray-400/5 group-hover:border-gray-500/20" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400", glow: "group-hover:shadow-blue-500/5 group-hover:border-blue-500/20" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-emerald-400", glow: "group-hover:shadow-emerald-500/5 group-hover:border-emerald-500/20" },
      { name: "Java", icon: FaJava, color: "text-red-500", glow: "group-hover:shadow-red-500/5 group-hover:border-red-500/20" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600", glow: "group-hover:shadow-green-600/5 group-hover:border-green-600/20" },
    ],
  },
  {
    title: "Frameworks y Bibliotecas",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-sky-400", glow: "group-hover:shadow-sky-400/5 group-hover:border-sky-500/20" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white", glow: "group-hover:shadow-white/5 group-hover:border-white/20" },
      { name: "React Router", icon: SiReactrouter, color: "text-red-400", glow: "group-hover:shadow-red-500/5 group-hover:border-red-500/20" },
      { name: "Axios / Fetch API", icon: SiAxios, color: "text-indigo-400", glow: "group-hover:shadow-indigo-500/5 group-hover:border-indigo-500/20" },
    ],
  },
  {
    title: "Fundamentos Frontend",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400", glow: "group-hover:shadow-yellow-500/5 group-hover:border-yellow-500/20" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500", glow: "group-hover:shadow-orange-500/5 group-hover:border-orange-500/20" },
      { name: "CSS3 / Tailwind", icon: SiTailwindcss, color: "text-teal-400", glow: "group-hover:shadow-teal-500/5 group-hover:border-teal-500/20" },
    ],
  },
  {
    title: "Herramientas & Seguridad",
    skills: [
      { name: "Git y GitHub", icon: FaGithub, color: "text-gray-200", glow: "group-hover:shadow-white/5 group-hover:border-white/20" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500", glow: "group-hover:shadow-orange-500/5 group-hover:border-orange-500/20" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500", glow: "group-hover:shadow-blue-500/5 group-hover:border-blue-500/20" },
      { name: "Keycloak", icon: SiKeycloak, color: "text-red-500", glow: "group-hover:shadow-red-500/5 group-hover:border-red-500/20" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-950 text-gray-300 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-xs font-bold tracking-widest text-blue-400 bg-blue-900/20 border border-blue-900/35 rounded-full px-3.5 py-1.5 uppercase">
            Habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mt-4 mb-4">
            Mi Stack Tecnológico
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Las herramientas, lenguajes y frameworks que empleo para construir aplicaciones modernas y de alta performance.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900/25 border border-slate-900 rounded-3xl p-6 md:p-8 hover:border-slate-800 transition-all duration-300 shadow-2xl backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-900 pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className={`flex items-center gap-3 p-3 rounded-2xl bg-slate-950/45 border border-slate-900/60 hover:bg-slate-900/10 transition-all duration-300 shadow-lg group relative ${skill.glow}`}
                    >
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-900 group-hover:border-slate-800 transition-all duration-300 flex-shrink-0">
                        <Icon className={`w-5 h-5 ${skill.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 truncate">
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
        <div className="text-center mt-20" data-aos="fade-up">
          <a href={CV_RESUME} download className="inline-block relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <button type="button" className="relative bg-slate-900 hover:bg-slate-950 text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 border border-slate-800">
              Descargar CV en PDF
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
