import React from 'react';
import { Camera, Bell, Fingerprint, Home, Wifi, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    icon: Camera,
    title: "Videovigilancia CCTV",
    description: "Cámaras IP de alta definición, grabadores NVR y acceso remoto desde cualquier dispositivo.",
    color: "blue"
  },
  {
    icon: Bell,
    title: "Sistemas de Alarma",
    description: "Alarmas anti-intrusión con sensores de movimiento, apertura y conexión a central receptora.",
    color: "red"
  },
  {
    icon: Fingerprint,
    title: "Control de Acceso",
    description: "Cerraduras inteligentes, lectores biométricos y sistemas de control de presencia.",
    color: "purple"
  },
  {
    icon: Home,
    title: "Domótica",
    description: "Automatización del hogar: iluminación, climatización, persianas y control por voz.",
    color: "green"
  },
  {
    icon: Wifi,
    title: "Redes y Comunicaciones",
    description: "Instalación de redes estructuradas, WiFi profesional y sistemas de telecomunicaciones.",
    color: "cyan"
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Servicio técnico especializado y contratos de mantenimiento preventivo y correctivo.",
    color: "orange"
  }
];

const colorClasses = {
  blue: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500",
  red: "bg-red-500/10 text-red-500 group-hover:bg-red-500",
  purple: "bg-purple-500/10 text-purple-500 group-hover:bg-purple-500",
  green: "bg-green-500/10 text-green-500 group-hover:bg-green-500",
  cyan: "bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500",
  orange: "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500"
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Soluciones completas de seguridad
          </h2>
          <p className="text-slate-600 text-lg">
            Ofrecemos servicios integrales de instalación y mantenimiento de sistemas de seguridad electrónica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-slate-50 rounded-2xl hover:bg-slate-900 transition-all duration-500 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${colorClasses[service.color]} group-hover:text-white`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-400 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to={createPageUrl("Services")}>
            <button className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-4 transition-all">
              Ver todos los servicios
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}