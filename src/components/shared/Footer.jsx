import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">REDCAMIP</span>
            </div>
            <p className="text-slate-400 mb-6">
              Soluciones integrales de seguridad electrónica y domótica para hogares y empresas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to={createPageUrl("Services")} className="hover:text-white transition-colors">Videovigilancia CCTV</Link></li>
              <li><Link to={createPageUrl("Services")} className="hover:text-white transition-colors">Sistemas de Alarma</Link></li>
              <li><Link to={createPageUrl("Services")} className="hover:text-white transition-colors">Control de Acceso</Link></li>
              <li><Link to={createPageUrl("Services")} className="hover:text-white transition-colors">Domótica</Link></li>
              <li><Link to={createPageUrl("Services")} className="hover:text-white transition-colors">Redes y Comunicaciones</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to={createPageUrl("Home")} className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to={createPageUrl("Services")} className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to={createPageUrl("Projects")} className="hover:text-white transition-colors">Proyectos</Link></li>
              <li><Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Av Cristóbal Colón 9193<br />Las Condes, Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+56955254323" className="hover:text-white transition-colors">+56 9 5525 4323</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:redcamip.joel@gmail.com" className="hover:text-white transition-colors">redcamip.joel@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 REDCAMIP Seguridad. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}