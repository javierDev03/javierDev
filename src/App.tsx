"use client"

import { useState } from "react"
import "./App.css" // Importa el CSS global
import { Sidebar } from "./layout/sidebar"
import { HomeSection } from "./components/content/home-section"
import { AboutSection } from "./components/content/AboutSection"
import { PortfolioSection } from "./components/content/portfolio-section"
import { ResumeSection } from "./components/content/resume-section"
import { ContactSection } from "./components/content/contact-section"

function App() {
  const [activeSection, setActiveSection] = useState("home") // Default active section

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />
      case "about":
        return <AboutSection />
      case "portfolio":
        return <PortfolioSection />
      case "resume":
        return <ResumeSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
      {/* Left Sidebar (Desktop) and Mobile Menu Button */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar mt-16 md:mt-0">
        <div className="max-w-full md:max-w-5xl lg:max-w-6xl mx-auto py-4">{renderContent()}</div>
      </main>
    </div>
  )
}

export default App
