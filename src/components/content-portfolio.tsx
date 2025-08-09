import { Badge } from "./ui/badge"

export function PortfolioContent() {
  return (
    <div className="p-6 bg-gray-800 rounded-r-xl shadow-lg flex-grow">
      <h1 className="text-4xl font-bold text-white mb-6">Portafolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
          <img
            src="/placeholder.svg"
            alt="E-commerce Platform"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-1">Plataforma de E-commerce B2B</h3>
            <p className="text-gray-400 text-sm mb-2">Solución completa para ventas al por mayor.</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-emerald-600 text-white">Laravel</Badge>
              <Badge className="bg-blue-600 text-white">Vue.js</Badge>
              <Badge className="bg-gray-600 text-white">PostgreSQL</Badge>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
          <img
            src="/placeholder.svg"
            alt="SaaS Dashboard"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-1">Panel de Administración SaaS</h3>
            <p className="text-gray-400 text-sm mb-2">Interfaz intuitiva para gestión de usuarios y datos.</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-sky-600 text-white">React.js</Badge>
              <Badge className="bg-purple-600 text-white">Node.js</Badge>
              <Badge className="bg-gray-600 text-white">MongoDB</Badge>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
          <img
            src="/placeholder.svg"
            alt="Mobile App"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-1">Aplicación Móvil de Servicios</h3>
            <p className="text-gray-400 text-sm mb-2">Conexión de usuarios con proveedores de servicios locales.</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-sky-600 text-white">React Native</Badge>
              <Badge className="bg-emerald-600 text-white">Laravel API</Badge>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
          <img
            src="/placeholder.svg"
            alt="Data Dashboard"
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-1">Dashboard de Visualización de Datos</h3>
            <p className="text-gray-400 text-sm mb-2">
              Herramienta interactiva para análisis de grandes volúmenes de datos.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-600 text-white">Vue.js</Badge>
              <Badge className="bg-purple-600 text-white">Express.js</Badge>
              <Badge className="bg-gray-600 text-white">MySQL</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
