import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram } from "lucide-react";
import { siDiscord } from "simple-icons";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
const Contact: React.FC = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      id,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validierung
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive"
      });
      return;
    }

    // Überprüfung der E-Mail-Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const serviceId = "service_h5oa2vi";
      const templateId = "template_slpqs7i";
      const publicKey = "CubV6ezxWMlZL7FeM";
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: "emirslaimani@gmail.com" // Ziel-E-Mail-Adresse
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Erfolg!",
        description: "Ihre Nachricht wurde erfolgreich gesendet."
      });

      // Formular zurücksetzen
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Fehler beim Senden der E-Mail:", error);
      toast({
        title: "Fehler",
        description: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="py-20 bg-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Kontakt aufnehmen</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto mt-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">Fragen? Projektideen? Ich freue mich auf Ihre Nachricht</p>
        </div>
        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-[3px] border border-white/10 backdrop-blur-sm bg-white/5 p-8">
            <h3 className="text-2xl font-semibold mb-6">Nachricht senden</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-300">Name</label>
                <Input id="name" placeholder="Ihr Name" className="bg-black/50 border-white/10 rounded-[3px]" value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-300">E-Mail</label>
                <Input id="email" type="email" placeholder="ihre.email@addresse.com" className="bg-black/50 border-white/10 rounded-[3px]" value={formData.email} onChange={handleChange} />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-300">Nachricht</label>
                <Textarea id="message" placeholder="Ihre Nachricht..." className="bg-black/50 border-white/10 min-h-[150px] rounded-[3px]" value={formData.message} onChange={handleChange} />
              </div>
              
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-medium rounded-[3px]" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Verbinden</h3>
            
            <div className="space-y-6">
              <p className="text-gray-400">
                Ich bin immer offen für Diskussionen über neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Vision zu werden.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:kontakt@tiqqs.xyz" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <span>kontakt@tiqqs.xyz</span>
                </a>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium mb-4">Soziale Medien</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/tiqqs.wqz/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[3px] border border-white/10 hover:bg-white/10 transition-colors" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://discord.gg/fZcw3JtME2" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[3px] border border-white/10 hover:bg-white/10 transition-colors" aria-label="Discord">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <title>Discord</title>
                      <path d={siDiscord.path} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;
