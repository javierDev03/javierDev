"use client"

import { Home, User, GraduationCap, Briefcase, Mail } from "lucide-react"
import { cn } from "../lib/utils"

interface VerticalNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function VerticalNav({ activeSection, onSectionChange }: VerticalNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Inicio" },
    { id: "about", icon: User, label: "Sobre Mí" },
    { id: "education", icon: GraduationCap, label: "Educación" },
    { id: "portfolio", icon: Briefcase, label: "Portafolio" },
    { id: "contact", icon: Mail, label: "Contacto" },
  ]

  return (
    <div className="hidden md:flex flex-col items-center justify-center bg-gray-800 rounded-full p-2 shadow-lg space-y-4 h-fit sticky top-1/2 -translate-y-1/2">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "p-3 rounded-full transition-colors duration-200",
              activeSection === item.id
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-400 hover:bg-gray-700 hover:text-white",
            )}
            aria-label={item.label}
          >
            <Icon className="w-6 h-6" />
          </button>
        )
      })}
    </div>
  )
}
