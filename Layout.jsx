import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react"; // Quitamos Shield porque usaremos tu logo
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/Footer";

const navLinks = [
  { name: "Inicio", page: "Home" },
  { name: "Servicios", page: "Services" },
  { name: "Proyectos", page: "Projects" },
  { name: "Contacto", page: "Contact" },
];

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Implementado */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg">
                <img 
                  src="/logo-redcamip.png" 
                  alt="RED CAMIP Logo" 
                  className="w-full h-full object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                REDCAMIP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`font-medium transition-colors ${
                    isScrolled 
                      ? 'text-foreground/80 hover:text-blue-400' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+56955254323" className={`flex items-center gap-2 font-medium transition-colors ${
                isScrolled ? 'text-foreground/80' : 'text-white/90'
              }`}>
                <Phone className="w-4 h-4 text-blue-400" />
                +56 9 5525 4323
              </a>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 shadow-lg shadow-blue-500/20">
                  Presupuesto Gratis
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border shadow-xl">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="py-3 px-4 text-foreground/90 hover:bg-primary/10 hover:text-primary rounded-lg font-medium transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <Link to={createPageUrl("Contact")}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12">
                    Presupuesto Gratis
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}