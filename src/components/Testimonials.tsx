
import React from "react";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AnimatedElement from "./AnimatedElement";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  content,
  rating
}) => {
  return (
    <AnimatedElement animation="scale-in" delay={200}>
      <div className="p-6 rounded-[3px] border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col h-full max-w-xl">
        <div className="flex mb-4">
          {Array(5).fill(0).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`} />)}
        </div>
        <p className="text-gray-300 mb-6 flex-grow cursor-default">"{content}"</p>
        <div className="mt-auto">
          <Separator className="mb-4 bg-white/20" />
          <div>
            <p className="font-medium cursor-default">{name}</p>
            <p className="text-sm text-gray-400 cursor-default">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

const Testimonials: React.FC = () => {
  const testimonial = {
    name: "Zivko J.",
    role: "Inhaber, Reinigung Balkan",
    content: "Ich bin sehr beeindruckt von der neuen Landing Page für mein Reinigungsunternehmen! Die Zusammenarbeit war professionell und freundlich. Das moderne, übersichtliche Design passt perfekt zu unserem Firmenauftritt. Besonders überzeugt hat mich die schnelle und zuverlässige Umsetzung.",
    rating: 5
  };
  
  return <div className="py-20 bg-black" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kundenstimmen</h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Was meine Kunden über die Zusammenarbeit und die Ergebnisse sagen
            </p>
          </div>
        </AnimatedElement>
        
        <div className="flex justify-center">
          <TestimonialCard 
            name={testimonial.name} 
            role={testimonial.role} 
            content={testimonial.content} 
            rating={testimonial.rating} 
          />
        </div>
      </div>
    </div>;
};

export default Testimonials;
