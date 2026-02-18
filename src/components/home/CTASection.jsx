import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para proteger tu hogar o negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contáctanos hoy y recibe una visita técnica gratuita con presupuesto sin compromiso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+56955254323">
              <Button size="lg" className="bg-white/20 border border-white/40 text-white hover:bg-white/30 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                <Phone className="mr-2 w-5 h-5" />
                Llamar Ahora
              </Button>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <a href="tel:+56955254323" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>+56 9 5525 4323</span>
            </a>
            <a href="mailto:redcamip.joel@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>redcamip.joel@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}