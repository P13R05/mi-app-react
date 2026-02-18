import React from 'react';
import { CheckCircle2, Award, Clock, HeadphonesIcon, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { createPageUrl } from "@/lib/utils";
const features = [
  {
    icon: Award,
    title: "Profesionales Certificados",
    description: "Técnicos con formación especializada y certificaciones oficiales."
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description: "Atención urgente en menos de 24 horas para cualquier incidencia."
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte 24/7",
    description: "Servicio de atención al cliente disponible todos los días del año."
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "Garantía de 2 años en todas las instalaciones y equipos."
  },
  {
    icon: Zap,
    title: "Tecnología Avanzada",
    description: "Trabajamos con las mejores marcas del mercado internacional."
  },
  {
    icon: CheckCircle2,
    title: "Presupuesto Sin Compromiso",
    description: "Visita técnica gratuita y presupuesto detallado sin coste."
  }
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">¿Por qué elegirnos?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Confianza y profesionalidad en cada proyecto
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              En REDCAMIP Seguridad nos dedicamos a proteger lo que más importa. Con más de 15 años de experiencia, 
              ofrecemos soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80" 
              alt="Técnico instalando sistema de seguridad" 
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-blue-100 text-sm">Clientes satisfechos</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}