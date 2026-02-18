
import React from 'react';
import { Camera, Bell, Fingerprint, Home, Wifi, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    id: "cctv",
    icon: Camera,
    title: "Videovigilancia CCTV",
    description: "Sistemas de videovigilancia profesional con cámaras IP de alta definición para proteger tu hogar o negocio.",
    features: [
      "Cámaras IP 4K Ultra HD",
      "Visión nocturna avanzada",
      "Grabadores NVR con almacenamiento",
      "Acceso remoto desde móvil",
      "Detección de movimiento inteligente",
      "Integración con sistemas de alarma"
    ],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
    color: "blue"
  },
  {
    id: "alarmas",
    icon: Bell,
    title: "Sistemas de Alarma",
    description: "Protección anti-intrusión con los sistemas de alarma más avanzados del mercado.",
    features: [
      "Centrales de alarma certificadas",
      "Sensores de movimiento PIR",
      "Detectores de apertura",
      "Sirenas interiores y exteriores",
      "Conexión a Central Receptora",
      "App de control y notificaciones"
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    color: "red"
  },
  {
    id: "control_acceso",
    icon: Fingerprint,
    title: "Control de Acceso",
    description: "Gestiona quién entra a tu empresa o comunidad con tecnología biométrica y tarjetas de proximidad.",
    features: [
      "Lectores biométricos de huella",
      "Tarjetas de proximidad RFID",
      "Cerraduras electrónicas",
      "Control de presencia laboral",
      "Videoporteros IP",
      "Gestión centralizada de usuarios"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    color: "purple"
  },
  {
    id: "domotica",
    icon: Home,
    title: "Domótica e IoT",
    description: "Automatiza tu hogar y controla todo desde tu smartphone o con comandos de voz.",
    features: [
      "Control de iluminación inteligente",
      "Termostatos y climatización",
      "Persianas y toldos motorizados",
      "Integración con Alexa y Google",
      "Escenas y automatizaciones",
      "Control energético"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    color: "green"
  },
  {
    id: "redes",
    icon: Wifi,
    title: "Redes y Comunicaciones",
    description: "Infraestructura de red profesional para garantizar conectividad estable y segura.",
    features: [
      "Cableado estructurado Cat6/Cat6A",
      "WiFi empresarial de alta densidad",
      "Switches y routers gestionables",
      "Fibra óptica",
      "Centralitas telefónicas IP",
      "VPN y seguridad perimetral"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    color: "cyan"
  },
  {
    id: "mantenimiento",
    icon: Wrench,
    title: "Mantenimiento y Soporte",
    description: "Servicio técnico especializado para mantener tus sistemas siempre operativos.",
    features: [
      "Mantenimiento preventivo",
      "Reparaciones urgentes",
      "Actualizaciones de firmware",
      "Soporte remoto 24/7",
      "Contratos de mantenimiento",
      "Ampliaciones y mejoras"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    color: "orange"
  }
];

const colorClasses = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
  cyan: "bg-cyan-500",
  orange: "bg-orange-500"
};

export default function Services() {
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
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Soluciones de seguridad a medida
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ofrecemos servicios completos de instalación, configuración y mantenimiento de sistemas de seguridad electrónica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                  
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={createPageUrl("Contact") + `?service=${service.id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-5">
                      Solicitar Información
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tus necesidades de seguridad.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-8">
              Contactar Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}