import React from "react";
import perfil from "../../assets/perfil.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[650px] flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-blue-950 to-black pt-16">
      {/* Fondo radial */}
      <div data-aos="fade-up" className="absolute inset-0">
        <div className="w-[600px] h-[600px] bg-gradient-radial from-blue-700/40 to-transparent rounded-full blur-3xl mx-auto mt-[-200px]"></div>
      </div>

      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pt-20 pb-24"
      >
        {/* Texto */}
        <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Adolfo Floreano Garth
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-6"
          >
            Egresado de Ingeniería en Sistemas. Desarrollador front-end con
            enfoque en React y aplicaciones web modernas.
          </p>
          <a
            href="#contact"
            className="inline-block text-gray-950 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
          >
            Contacto
          </a>
        </div>

        {/* Imagen */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex justify-center md:justify-end mt-5 md:mt-0"
        >
          <img
            src={perfil}
            alt="Adolfo Floreano Garth"
            className="h-[300px] sm:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
