

import { Home, User, Briefcase, FileText, Mail, Linkedin, Github, Download, Menu } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", icon: Home, label: "Inicio" },
    { id: "about", icon: User, label: "Sobre Mí" },
    { id: "portfolio", icon: Briefcase, label: "Portafolio" },
    { id: "resume", icon: FileText, label: "Currículum" },
    { id: "contact", icon: Mail, label: "Contacto" },
  ]

  const handleSectionChange = (section: string) => {
    onSectionChange(section)
    setIsMobileMenuOpen(false) // Close menu on item click
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          aria-label="Toggle navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 bg-gray-900 text-gray-100 flex-col p-6 border-r border-gray-800 shadow-2xl h-screen sticky top-0 overflow-y-auto custom-scrollbar">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 mt-4">
          <div className="relative w-24 h-24 rounded-full border-4 border-blue-500 overflow-hidden mb-3 shadow-lg">
            <img
              src="/avatar.jpeg"
              alt="Tu Foto de Perfil"
              className="rounded-full"
            />
          </div>
          <h2 className="text-xl font-extrabold text-white mb-1">Javier</h2>
          <p className="text-blue-300 text-base font-medium">Desarrollador Fullstack</p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.linkedin.com/in/javier-cervantes-a40517275/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110" />
            </a>
            <a href="https://github.com/javierDev03" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110" />
            </a>
            <a href="mailto:javicervel250@gmail.com">
              <Mail className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full flex items-center justify-start text-base px-4 py-2.5 rounded-xl transition-all duration-300 group
                  ${activeSection === item.id ? "bg-blue-600 text-white shadow-md hover:bg-blue-700" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
              >
                <Icon
                  className={`w-4 h-4 mr-3 transition-colors duration-300
                    ${activeSection === item.id ? "text-white" : "text-blue-400 group-hover:text-white"}`}
                />
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Resume Download Button */}
        <div className="mt-10">
          <a
            href="https://docs.google.com/document/d/1q89L4l9P83BMnx32MlF9r_p3eFSQSIdZ/edit?usp=sharing&ouid=108776752255416777756&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[200px]"
          >
            <button className="w-full border border-blue-500 text-blue-300 hover:bg-blue-900 hover:text-white transition-colors flex items-center justify-center gap-2 bg-transparent py-2.5 text-base font-semibold rounded-lg">
              <Download className="w-5 h-5" /> Descargar CV
            </button>
          </a>
      </div>
    </aside >

      {/* Mobile Sidebar (Overlay) */ }
  {
    isMobileMenuOpen && (
      <div className="fixed inset-0 bg-gray-950/80 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
    )
  }
  <aside
    className={`fixed top-0 left-0 w-64 bg-gray-900 text-gray-100 flex flex-col p-6 border-r border-gray-800 shadow-2xl h-screen z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
  >
    {/* Profile Section (Mobile) */}
    <div className="flex flex-col items-center mb-8 mt-4">
      <div className="relative w-24 h-24 rounded-full border-4 border-blue-500 overflow-hidden mb-3">
        <img
          src="/placeholder.svg?height=100&width=100"
          alt="Tu Foto de Perfil"

          className="rounded-full"
        />
      </div>
      <h2 className="text-xl font-bold text-white mb-1">Tu Nombre</h2>
      <p className="text-blue-300 text-sm font-medium">Desarrollador Fullstack</p>
      <div className="flex gap-3 mt-3">
        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
        </a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 text-gray-400 hover:text-blue-400" />
        </a>
        <a href="mailto:tu.email@example.com">
          <Mail className="w-5 h-5 text-gray-400 hover:text-blue-400" />
        </a>
      </div>
    </div>

    {/* Navigation Links (Mobile) */}
    <nav className="flex-grow space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.id}
            onClick={() => handleSectionChange(item.id)}
            className={`w-full flex items-center justify-start text-base px-4 py-2 rounded-lg transition-colors duration-200
                  ${activeSection === item.id ? "bg-blue-600 text-white hover:bg-blue-700" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {item.label}
          </button>
        )
      })}
    </nav>

    {/* Resume Download Button (Mobile) */}
    <div className="mt-8">
      <button className="w-full border border-blue-500 text-blue-300 hover:bg-blue-900 hover:text-white transition-colors flex items-center justify-center gap-2 bg-transparent py-2.5 text-base font-semibold rounded-lg">
        <Download className="w-4 h-4" /> Descargar CV
      </button>
    </div>
  </aside>
    </>
  )
}
