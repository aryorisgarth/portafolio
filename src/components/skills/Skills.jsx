import React from "react";
import CV_RESUME from "./CV_Adolfo_Floreano_English.pdf";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Desarrollador front-end
          </h2>
          <p className="text-slate-600 text-sm mt-2 tracking-wide">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div className="bg-white border shadow-md rounded-2xl p-6 hover:shadow-lg transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Lenguajes-Backend
            </h3>
            <ul className="text-slate-700 text-sm space-y-2">
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• MySQL</li>
              <li>• Prisma ORM</li>
              <li>• java </li>
              <li>• Spring Boot</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-white border shadow-md rounded-2xl p-6 hover:shadow-lg transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Frameworks y bibliotecas
            </h3>
            <ul className="text-slate-700 text-sm space-y-2">
              <li>• React.js</li>
              <li>• Next.js</li>
              <li>• React Router</li>
              <li>• Axios / Fetch API</li>
            </ul>
          </div>


          <div className="bg-white border shadow-md rounded-2xl p-6 hover:shadow-lg transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Frontend
            </h3>
            <ul className="text-slate-700 text-sm space-y-2">

              <li>• JavaScript (ES6+)</li>
              <li>• HTML5</li>
              <li>• CSS3 / Tailwind CSS</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white border shadow-md rounded-2xl p-6 hover:shadow-lg transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Herramientas
            </h3>
            <ul className="text-slate-700 text-sm space-y-2">
              <li>• Git y GitHub</li>
              <li>• Postman</li>
              <li>• VS Code</li>
              <li>• Keycloak</li>
            </ul>
          </div>
        </div>

        {/* Download CV */}
        <div className="text-center mt-12">
          <a href={CV_RESUME} download className="inline-block">
            <button type="button" className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg transition">
              Descargar CV
            </button>
          </a>
        </div>
      </div>
    </section>

  );
}
