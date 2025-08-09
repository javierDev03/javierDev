
import { IconCloudDemo } from "../IconCloudDemo"
export function HomeSection() {
  return (
    <div className="bg-gray-900 border border-gray-800 text-gray-100 shadow-xl p-6 sm:p-8 rounded-xl">
      <div className="pb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
          ¡Hola! Soy <span className="text-blue-400">Javier</span>,
          <br className="hidden sm:block" />
          Desarrollador Fullstack.
        </h2>
      </div>
      <div className="space-y-6 sm:space-y-8">
        <p className="text-lg sm:text-xl lg:text-xl text-gray-300 leading-relaxed">
          Transformo ideas en soluciones web robustas y escalables, combinando la potencia de <span className="font-bold">Laravel</span> en el backend
          con la interactividad de <span className="font-bold">Vue.js</span> y <span className="font-bold">React.js</span> en el frontend. Mi enfoque es crear experiencias digitales
          que no solo funcionen, sino que inspiren.
        </p>
        <div className="relative  sm:h-72 md:h-80 rounded-lg overflow-hidden flex items-center justify-center">
          <IconCloudDemo />
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
          Mi pasión radica en la creación de experiencias de usuario intuitivas y eficientes, siempre buscando la
          excelencia en cada línea de código. Explora mi trabajo y descubre cómo puedo ayudarte a llevar tu proyecto al
          siguiente nivel. Estoy comprometido con el aprendizaje continuo y la aplicación de las últimas tendencias
          tecnológicas.
        </p>
      </div>
    </div>
  )
}
