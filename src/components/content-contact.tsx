import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

export function ContactContent() {
  return (
    <div className="p-6 bg-gray-800 rounded-r-xl shadow-lg flex-grow">
      <h1 className="text-4xl font-bold text-white mb-6">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 text-gray-400">
          <p className="text-lg">
            Estoy disponible para nuevos proyectos y colaboraciones. No dudes en enviarme un mensaje.
          </p>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-400" />
            <span>tu.email@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-blue-400" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-blue-400" />
            <span>Tu Ciudad, Tu País</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-gray-300">
              Nombre
            </Label>
            <Input
              id="name"
              placeholder="Tu Nombre"
              className="bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-300">
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu.correo@example.com"
              className="bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-gray-300">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Tu mensaje..."
              rows={5}
              className="bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
            />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar Mensaje</Button>
        </div>
      </div>
    </div>
  )
}
