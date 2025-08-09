import { GraduationCap } from "lucide-react"

export function EducationContent() {
  return (
    <div className="p-6 bg-gray-800 rounded-r-xl shadow-lg flex-grow">
      <h1 className="text-4xl font-bold text-white mb-6">Educación</h1>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-white">Ingeniería en Sistemas Computacionales</h3>
            <p className="text-gray-300">Universidad Tecnológica Nacional</p>
            <p className="text-gray-500 text-sm">2015 - 2020</p>
            <p className="text-gray-400 mt-2">
              Enfoque en desarrollo de software, bases de datos, redes y arquitectura de sistemas. Proyecto final:
              Sistema de gestión de inventario para PYMES.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-white">Diplomado en Desarrollo Web Full-Stack</h3>
            <p className="text-gray-300">Academia de Código Abierto</p>
            <p className="text-gray-500 text-sm">2021</p>
            <p className="text-gray-400 mt-2">
              Profundización en tecnologías modernas de frontend (React, Vue) y backend (Node.js, Laravel), incluyendo
              APIs RESTful y bases de datos NoSQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
