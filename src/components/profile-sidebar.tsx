
import { Button } from "./ui/button"
import { Linkedin, Mail, CalendarDays, Download } from "lucide-react"

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-l-xl shadow-lg w-full max-w-xs md:max-w-none md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="relative w-32 h-32 rounded-full border-4 border-gray-700 overflow-hidden mb-4">
        <img
          src="/profile-avatar.png"
          alt="Fernando Castillo"
          className="rounded-full"
        />
      </div>
      <h2 className="text-2xl font-bold text-white mb-1">Fernando Castillo</h2>
      <p className="text-gray-400 text-sm text-center mb-4">Laravel & Vue/React developer</p>

      <div className="flex gap-4 mb-6">
        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
        </a>
        <a href="mailto:tu.email@example.com">
          <Mail className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
        </a>
        <a href="#">
          <CalendarDays className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
        </a>
      </div>

      <Button
        variant="outline"
        className="w-full max-w-[200px] border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors flex items-center gap-2 bg-transparent"
      >
        <Download className="w-4 h-4" /> Descargar mi currículum
      </Button>

      <p className="text-gray-500 text-xs mt-auto pt-8">©2025 All rights reserved.</p>
    </div>
  )
}
