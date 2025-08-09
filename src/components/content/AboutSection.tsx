import {
  FaLaravel,
  FaVuejs,
  FaReact,
  FaGit,
  FaDocker,
  FaAws,

  FaRocket,
  FaLightbulb,
  FaHeart,
  FaCode,
 
} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiPostgresql, SiMysql, SiTypescript } from "react-icons/si"
import { FaGithub } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";



export function AboutSection() {
  const techIcons = [
    { icon: FaLaravel, name: "Laravel" },
    { icon: FaVuejs, name: "Vue.js" },
    { icon: FaReact, name: "React.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: FaDocker, name: "Docker" },
    { icon: FaAws, name: "AWS" },
    { icon: FaGithub, name: "Git" },
    { icon: SiGithubactions, name: "CI/CD" },
    { icon: SiMysql, name: "MySQL" },
  ]


  return (
    <div className="bg-gray-900 border border-gray-800 text-gray-100 shadow-xl p-6 sm:p-8 rounded-xl">
      <div className="pb-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Sobre Mí</h2>
      </div>
      <div className="space-y-8 sm:space-y-10">
        <p className="text-lg sm:text-xl lg:text-xl text-gray-300 leading-relaxed">
          Soy un desarrollador full-stack con <span className="font-bold">3 años de experiencia</span> en la creación de soluciones digitales de alto
          impacto. Mi expertise abarca desde la conceptualización y diseño de bases de datos hasta la implementación de
          interfaces de usuario dinámicas y optimizadas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
            <FaLightbulb className="w-7 sm:w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl sm:text-xl font-semibold text-white mb-1">Filosofía de Trabajo</h3>
              <p className="text-gray-400 text-base sm:text-base">
                Me enfoco en soluciones limpias, eficientes y mantenibles. La calidad del código, la experiencia del
                usuario y la escalabilidad son mis pilares.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
            <FaRocket className="w-7 sm:w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl sm:text-xl font-semibold text-white mb-1">Enfoque en Resultados</h3>
              <p className="text-gray-400 text-base sm:text-base">
                Mi objetivo es entregar valor real, transformando requisitos complejos en productos funcionales que
                superen las expectativas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
            <FaHeart className="w-7 sm:w-8 h-8 text-pink-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl sm:text-xl font-semibold text-white mb-1">Colaboración</h3>
              <p className="text-gray-400 text-base sm:text-base">
                Creo firmemente en el trabajo en equipo y la comunicación abierta para lograr los mejores resultados.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
            <FaCode className="w-7 sm:w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl sm:text-xl font-semibold text-white mb-1">Código Limpio</h3>
              <p className="text-gray-400 text-base sm:text-base">
                Adherencia a las mejores prácticas y patrones de diseño para un código robusto y mantenible.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-8 mb-6">Habilidades Técnicas</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {techIcons.map(({ icon: Icon, name }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-3 rounded-lg border border-gray-700 shadow-md hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Icon className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-gray-200 text-sm sm:text-sm font-medium text-center">{name}</span>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed mt-8">
          Fuera del desarrollo, me apasiona [menciona un hobby o interés, ej: la música, los deportes, la lectura], lo
          que me permite recargar energías y abordar los desafíos con una mente fresca y creativa.
        </p>
      </div>
    </div>
  )
}
