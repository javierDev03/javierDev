"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css"; // Importa el CSS global
import { Sidebar } from "./layout/sidebar";
import { HomeSection } from "./components/content/home-section";
import { AboutSection } from "./components/content/AboutSection";
import { PortfolioSection } from "./components/content/portfolio-section";
import { ResumeSection } from "./components/content/resume-section";
import { ContactSection } from "./components/content/contact-section";
function App() {
    const [activeSection, setActiveSection] = useState("home"); // Default active section
    const renderContent = () => {
        switch (activeSection) {
            case "home":
                return _jsx(HomeSection, {});
            case "about":
                return _jsx(AboutSection, {});
            case "portfolio":
                return _jsx(PortfolioSection, {});
            case "resume":
                return _jsx(ResumeSection, {});
            case "contact":
                return _jsx(ContactSection, {});
            default:
                return _jsx(HomeSection, {});
        }
    };
    return (_jsxs("div", { className: "flex min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950", children: [_jsx(Sidebar, { activeSection: activeSection, onSectionChange: setActiveSection }), _jsx("main", { className: "flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar mt-16 md:mt-0", children: _jsx("div", { className: "max-w-full md:max-w-5xl lg:max-w-6xl mx-auto py-4", children: renderContent() }) })] }));
}
export default App;
