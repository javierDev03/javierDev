import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function PortfolioSection() {
    const projects = [
        {
            title: "SaaS AgendaPlus",
            description: "Aplicación SaaS para la gestión de agendas, creación de landing del negocio y citas, con funcionalidades de recordatorios.",
            tech: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS",],
            image: "/agenda.png",
            link: "https://www.agendaplus.com.mx/",
        },
        {
            title: "Sistema Integral de Gestión de Incidentes Hidráulicos del Estado de México",
            description: "Plataforma centralizada para la recepción, registro, seguimiento y resolución de incidentes relacionados con la infraestructura hidráulica en el Estado de México.",
            tech: ["Vue.js", "Laravel", "MySQL", "Leaflet.js", "Chart.js", "Tailwind CSS"],
            image: "/conagua.png",
            link: "https://caem-incidencias.cenidet.tecnm.mx/",
        },
        {
            title: "CITCA",
            description: "CITCA integró registro en línea, administración de ponencias y talleres, seguimiento de evaluaciones, gestión de acreditaciones y publicación de la agenda, optimizando procesos y mejorando la experiencia de organizadores y asistentes.",
            tech: ["Laravel", "Vue.js", "Tailwind CSS",],
            image: "/citca.png",
            link: "#",
        },
        {
            title: "SystemPackage",
            description: "SystemPackage es una plataforma de rastreo y gestión de paquetes que permite a los usuarios monitorear envíos en tiempo real, gestionar órdenes y recibir notificaciones automáticas sobre el estado de sus entregas.",
            tech: ["Laravel", "Livewire", "Tailwind CSS", "Filament"],
            image: "/delivering.png",
            link: "#",
        },
        {
            title: "ERP para Venta y Gestión de Animales",
            description: "Sistema integral para la gestión de la venta y administración de animales, con funcionalidades de seguimiento de inventario y análisis de ventas.",
            tech: ["Laravel", "MySQL", "Filament"],
            image: "/ERP.png",
            link: "#",
        },
        {
            title: "App móvil Inventario con QR",
            description: "Aplicación móvil para la gestión de inventarios utilizando códigos QR, permitiendo un seguimiento eficiente de productos y activos.",
            tech: ["React.js", "Firebase", "Tailwind CSS", "Capacitor"],
            image: "/app.png",
            link: "#",
        },
        {
            title: "Seguimiento de veterinaria",
            description: "Plataforma para la gestión de citas, historial clínico y comunicación entre veterinarios y dueños de mascotas.",
            tech: ["React.js", "Laravel", "Tailwind CSS", "MongoDB"],
            image: "/beet.jpeg",
            link: "#",
        },
    ];
    return (_jsxs("div", { className: "bg-gray-900 border border-gray-800 text-gray-100 shadow-xl p-6 sm:p-8 rounded-xl", children: [_jsx("div", { className: "pb-6", children: _jsx("h2", { className: "text-4xl sm:text-5xl font-bold text-white mb-4", children: "Mis Proyectos Destacados" }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project, index) => (_jsxs("div", { className: "bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl", children: [_jsx("img", { src: project.image || "/placeholder.svg", alt: project.title, width: 400, height: 250, className: "w-full h-40 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-lg sm:text-xl font-semibold text-white mb-1", children: project.title }), _jsx("p", { className: "text-gray-400 text-xs sm:text-sm mb-2 line-clamp-3", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-1 sm:gap-2 mb-2", children: project.tech.map((tech, techIndex) => (_jsx("span", { className: "inline-flex items-center rounded-full bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-200", children: tech }, techIndex))) }), _jsxs("a", { href: project.link, target: "_blank", className: "text-blue-400 hover:underline text-sm sm:text-sm font-medium flex items-center gap-1 mt-1", children: ["Ver Proyecto ", _jsx("span", { className: "ml-1", children: "\u2192" })] })] })] }, index))) })] }));
}
