import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, Camera, Bell, Fingerprint, Home, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

const categoryLabels = {
  cctv: { label: "CCTV", icon: Camera },
  alarmas: { label: "Alarmas", icon: Bell },
  control_acceso: { label: "Control de Acceso", icon: Fingerprint },
  domotica: { label: "Domótica", icon: Home },
  redes: { label: "Redes", icon: Wifi }
};

// Tus datos ahora viven aquí permanentemente
const defaultProjects = [
  {
    id: 1,
    title: "Centro Comercial Plaza Mayor",
    description: "Instalación completa de sistema de videovigilancia con 120 cámaras IP 4K y central de monitoreo.",
    category: "cctv",
    image_url: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&q=80",
    client: "Grupo Inmobiliario ABC",
    location: "Madrid"
  },
  {
    id: 2,
    title: "Edificio Corporativo Torres",
    description: "Sistema de control de acceso biométrico para 500 empleados con integración de fichaje.",
    category: "control_acceso",
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    client: "Torres Empresariales S.L.",
    location: "Barcelona"
  },
  {
    id: 3,
    title: "Vivienda Unifamiliar La Moraleja",
    description: "Proyecto integral de domótica con control de iluminación, climatización y seguridad.",
    category: "domotica",
    image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    client: "Cliente Particular",
    location: "Madrid"
  },
  {
    id: 4,
    title: "Nave Industrial Polígono Sur",
    description: "Sistema de alarma perimetral con sensores de movimiento y conexión a CRA.",
    category: "alarmas",
    image_url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    client: "Logística Express",
    location: "Valencia"
  },
  {
    id: 5,
    title: "Hotel Boutique Centro",
    description: "Infraestructura WiFi de alta densidad para 80 habitaciones y zonas comunes.",
    category: "redes",
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    client: "Hoteles Premium S.A.",
    location: "Sevilla"
  },
  {
    id: 6,
    title: "Urbanización Los Pinos",
    description: "Sistema de videoportero IP y control de acceso para comunidad de 200 viviendas.",
    category: "control_acceso",
    image_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    client: "Comunidad Los Pinos",
    location: "Málaga"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  // 2. Quitamos la lógica de carga (IsLoading) y la consulta a la API
  // Ya no necesitamos useQuery porque los datos son estáticos
  const projects = defaultProjects;
  const isLoading = false; 

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Descubre algunos de los proyectos que hemos realizado para nuestros clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === "all" 
                  ? "bg-blue-500 text-white" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Todos
            </button>
            {Object.entries(categoryLabels).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === key 
                    ? "bg-blue-500 text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = categoryLabels[project.category]?.icon || Camera;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image_url || "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80"} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-700 backdrop-blur-sm">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {categoryLabels[project.category]?.label || project.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      {project.client && (
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {project.client}
                        </span>
                      )}
                      {project.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No hay proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}