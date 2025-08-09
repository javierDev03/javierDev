import { Briefcase, GraduationCap } from "lucide-react"

export function ResumeSection() {
  return (
    <div className="bg-gray-900 border border-gray-800 text-gray-100 shadow-xl p-6 sm:p-8 rounded-xl">
      <div className="pb-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Mi Currículum y Experiencia</h2>
      </div>
      <div className="space-y-8 sm:space-y-10">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase className="w-7 sm:w-8 h-8 text-blue-400" /> Experiencia Laboral
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {/* CONAGUA */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1">Desarrollador FullStack</h4>
              <p className="text-blue-400 text-lg sm:text-xl mb-1">CONAGUA - Comisión Nacional Del Agua | México</p>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Mayo 2024 – Abril 2025</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 text-base sm:text-lg">
                <li>
                  Desarrollé un sistema avanzado de visualización de incidencias con geolocalización, incorporando filtros dinámicos por tipos y gráficas interactivas que optimizan la productividad en la toma de decisiones.
                </li>
                <li>
                  Implementé funcionalidades clave para la clasificación, seguimiento y cierre eficiente de reportes, integrando geolocalización para una gestión más precisa y ágil.
                </li>
              </ul>
              <p className="mt-3 text-blue-400 font-medium text-sm sm:text-base">
                Skills: Laravel, VueJs, Tailwind CSS, Leaflet Js, Chart.js, MySQL
              </p>
            </div>

            {/* CITCA */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1">Desarrollador FullStack</h4>
              <p className="text-blue-400 text-lg sm:text-xl mb-1">CITCA - Congreso Internacional de Tecnología y Ciencia Aplicada | México</p>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Julio 2023 – Abril 2024</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 text-base sm:text-lg">
                <li>
                  Desarrollé los módulos clave del sistema integral de inscripciones, incluyendo la validación documental automatizada, la gestión de pagos y la emisión de constancias, agilizando procesos y reduciendo errores manuales.
                </li>
                <li>
                  Configuré flujos de aprobación personalizados, control de asistencia en tiempo real y carga eficiente de evidencias, mejorando supervisión y trazabilidad.
                </li>
              </ul>
              <p className="mt-3 text-blue-400 font-medium text-sm sm:text-base">
                Skills: Laravel, VueJs, Tailwind CSS, MySQL
              </p>
            </div>

            {/* Devoost */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1">Desarrollador FullStack</h4>
              <p className="text-blue-400 text-lg sm:text-xl mb-1">Devoost (Remoto, Canadá–México)</p>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Abril 2023 – Junio 2023</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 text-base sm:text-lg">
                <li>
                  Participé en el desarrollo de una plataforma empresarial, gestionando usuarios, servicios y flujos de validación para procesos eficientes y escalables.
                </li>
                <li>
                  Colaboré en un entorno ágil, mejorando continuamente el desarrollo según feedback constante.
                </li>
                <li>
                  Realicé pruebas funcionales, validaciones y documentación técnica detallada para asegurar calidad.
                </li>
              </ul>
              <p className="mt-3 text-blue-400 font-medium text-sm sm:text-base">
                Skills: Laravel, Vue.js, React.js, Docker, Sail, Unit Test, Jira, Scrum, Git, Git Flow, CI/CD
              </p>
            </div>

            {/* Iwooxi */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1">Desarrollador FullStack</h4>
              <p className="text-blue-400 text-lg sm:text-xl mb-1">Iwooxi (Remoto, Lima – Perú)</p>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">Febrero 2023 – Marzo 2023</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 text-base sm:text-lg">
                <li>
                  Desarrollé APIs RESTful en Laravel para optimizar procesos logísticos y administrativos, garantizando comunicación eficiente y segura.
                </li>
                <li>
                  Implementé backend modular basado en arquitectura limpia y desacoplada para escalabilidad y mantenimiento.
                </li>
                <li>
                  Diseñé y dicté cursos prácticos de Laravel para nuevos integrantes, acelerando su integración.
                </li>
              </ul>
              <p className="mt-3 text-blue-400 font-medium text-sm sm:text-base">
                Skills: HTML, JavaScript, Laravel, MySQL, Tailwind CSS, Git
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-700 my-8"></div> {/* Separator */}

        {/* Education Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <GraduationCap className="w-7 sm:w-8 h-8 text-blue-400" /> Educación
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {/* Instituto Tecnologico Superior de Cintalapa */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1">Ingeniería Informática</h4>
              <p className="text-blue-400 text-lg sm:text-xl mb-1">Instituto Tecnológico Superior de Cintalapa | Chiapas, México</p>
              <p className="text-gray-400 text-xs sm:text-sm">2021 - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
