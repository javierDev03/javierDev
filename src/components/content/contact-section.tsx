import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";



export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Construir el body del correo en texto plano y URL encoded
    const subject = encodeURIComponent(`Nuevo mensaje de ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nMensaje:\n${form.message}`
    );
    // Abrir cliente de correo con mailto
    window.location.href = `mailto:tu.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-900 border border-gray-800 text-gray-100 shadow-xl p-6 sm:p-8 rounded-xl">
      <div className="pb-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Conectemos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        <div className="space-y-6 sm:space-y-8 text-gray-300 text-lg sm:text-xl">
          <p className="leading-relaxed">
            Estoy siempre abierto a nuevas oportunidades, colaboraciones emocionantes o simplemente para charlar sobre
            tecnología. No dudes en enviarme un mensaje. Mi bandeja de entrada está siempre abierta y me esfuerzo por
            responder a la brevedad.
          </p>
          <div className="flex items-center gap-4 sm:gap-5">
            <Mail className="w-7  sm:w-8 h-8 text-blue-400 flex-shrink-0" />
            <span className="font-medium">javicervel250@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <Phone className="w-7 sm:w-8 h-8 text-blue-400 flex-shrink-0" />
            <span className="font-medium">+52 9681295289</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <MapPin className="w-7  sm:w-8 h-8 text-blue-400 flex-shrink-0" />
            <span className="font-medium">Chiapas, México</span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 sm:space-y-6"
          aria-label="Formulario de contacto"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-gray-200 text-base sm:text-lg font-medium">
              Nombre Completo
            </label>
            <input
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu Nombre"
              required
              className="bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg text-base sm:text-lg outline-none"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-gray-200 text-base sm:text-lg font-medium">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu.correo@example.com"
              required
              className="bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg text-base sm:text-lg outline-none"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-gray-200 text-base sm:text-lg font-medium">
              Tu Mensaje
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              rows={6}
              required
              className="bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg text-base sm:text-lg outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-3.5 text-lg sm:text-xl font-semibold rounded-lg shadow-md transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
