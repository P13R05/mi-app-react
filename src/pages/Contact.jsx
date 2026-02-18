import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const env = (import.meta).env;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("¡Mensaje enviado!");
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      toast.error("Error al enviar el mensaje.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-background">
        <div className="text-center p-8 bg-card border border-border rounded-2xl shadow-lg">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-foreground">¡Enviado!</h2>
          <p className="text-muted-foreground mb-6">Te contactaremos pronto en piero.osses16@gmail.com</p>
          <Button onClick={() => setIsSubmitted(false)}>Volver</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Info de contacto */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-4">Contacto</h1>
              <p className="text-muted-foreground text-lg">
                Estamos en Santiago, Chile. Escríbenos para coordinar una visita técnica o solicitar tu presupuesto.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary"><Phone size={20} /></div>
                <span>+56 9 5525 4323</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary"><Mail size={20} /></div>
                <span>contacto@redcamip.cl</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary"><MapPin size={20} /></div>
                <span>Av Cristóbal Colón 9193<br />Las Condes, Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-2xl shadow-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input 
                    id="name" 
                    className="bg-background border-border text-foreground"
                    placeholder="Tu nombre"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input 
                    id="phone" 
                    className="bg-background border-border text-foreground"
                    placeholder="+56 9..."
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  className="bg-background border-border text-foreground"
                  placeholder="ejemplo@correo.com"
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea 
                  id="message" 
                  className="bg-background border-border text-foreground min-h-[150px]"
                  placeholder="Cuéntanos sobre tu requerimiento..."
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  required 
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}