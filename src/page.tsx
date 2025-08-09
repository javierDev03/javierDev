"use client"

import { useState } from "react"
import { Sidebar } from "./layout/sidebar"
import { HomeSection } from "./components/content/home-section"
import { AboutSection } from "./components/content/AboutSection"
import { PortfolioSection } from "./components/content/portfolio-section"
import { ResumeSection } from "./components/content/resume-section"
import { ContactSection } from "./components/content/contact-section"
import { motion, AnimatePresence } from "framer-motion"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home")

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
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar mt-16 md:mt-0">
        <div className="max-w-full md:max-w-5xl lg:max-w-6xl mx-auto py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  )
}
