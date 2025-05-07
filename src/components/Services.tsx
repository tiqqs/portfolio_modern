import React from "react";
import { Layout, Gamepad, Image, UserRound } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay
}) => {
  return <AnimatedElement animation="fade-up" delay={delay}>
      <div className="p-6 rounded-[3px] border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
        <div className="mb-4 text-white">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 cursor-default">{title}</h3>
        <p className="text-gray-400 cursor-default">{description}</p>
      </div>
    </AnimatedElement>;
};
const Services: React.FC = () => {
  const services = [{
    icon: <Layout className="h-8 w-8" />,
    title: "Landing Page",
    description: "Professionelle Landing Pages, die Besucher in Kunden verwandeln durch ansprechendes Design und klare Konversionswege."
  }, {
    icon: <Gamepad className="h-8 w-8" />,
    title: "Gaming Webseite",
    description: "Interaktive Gaming-Webseiten mit schnellen Ladezeiten, responsivem Design und modernen Gaming-Features."
  }, {
    icon: <Image className="h-8 w-8" />,
    title: "Bildergalerie Webseite",
    description: "Elegante Bildergalerien mit optimierter Darstellung, schnellen Ladezeiten und benutzerfreundlicher Navigation."
  }, {
    icon: <UserRound className="h-8 w-8" />,
    title: "Portfolio Webseite",
    description: "Maßgeschneiderte Portfolio-Webseiten, die Ihre Arbeit, Fähigkeiten und Persönlichkeit professionell präsentieren."
  }];
  return <div className="py-20 bg-black" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">Meine Leistungen</h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">Entdecken Sie die verschiedenen Arten von Webseiten, die ich individuell für Ihre Anforderungen gestalte</p>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} delay={(index + 1) * 100} />)}
        </div>
      </div>
    </div>;
};
export default Services;