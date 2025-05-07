
import React from "react";
import { Award, BookOpen } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const About: React.FC = () => {
  return <div className="py-20 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold md:text-4xl">Über mich</h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedElement animation="slide-in-left" delay={200}>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg">Mit über 3 Jahren Erfahrung in der Webentwicklung habe ich mich auf die Erstellung moderner, benutzerfreundlicher und leistungsstarker Webanwendungen spezialisiert. Meine Leidenschaft liegt in der Umsetzung komplexer Anforderungen in intuitive Benutzererfahrungen.</p>
              <p className="text-gray-400 text-lg">
                Ich arbeite mit den neuesten Technologien und bin stets bestrebt, mich weiterzuentwickeln und 
                innovative Lösungen zu finden. Mein Ziel ist es, nicht nur funktionale, sondern auch ästhetisch 
                ansprechende Anwendungen zu erstellen, die einen echten Mehrwert bieten.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatedElement animation="fade-up" delay={300}>
              <div className="bg-white/5 rounded-[3px] border border-white/10 p-6 hover:bg-white/10 transition duration-300">
                <Award className="h-10 w-10 text-white/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 cursor-default">Erfahrung</h3>
                <p className="text-gray-400 cursor-default">Über 3 Jahre Webentwicklung mit modernen Frameworks und Technologien.</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={400}>
              <div className="bg-white/5 rounded-[3px] border border-white/10 p-6 hover:bg-white/10 transition duration-300">
                <BookOpen className="h-10 w-10 text-white/70 mb-4" />
                <h3 className="text-xl font-semibold mb-2 cursor-default">Weiterbildung</h3>
                <p className="text-gray-400 cursor-default">Kontinuierliche Fortbildung und Lernen neuer Technologien und Methoden.</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-in-right" delay={500} className="col-span-1 sm:col-span-2">
              <div className="bg-white/5 rounded-[3px] border border-white/10 p-6 hover:bg-white/10 transition duration-300">
                <h3 className="text-xl font-semibold mb-4 cursor-default">Technologien</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-[3px] bg-white/10 text-white/70 text-sm cursor-default">React</span>
                  <span className="px-3 py-1 rounded-[3px] bg-white/10 text-white/70 text-sm cursor-default">TypeScript</span>
                  <span className="px-3 py-1 rounded-[3px] bg-white/10 text-white/70 text-sm cursor-default">Next.js</span>
                  <span className="px-3 py-1 rounded-[3px] bg-white/10 text-white/70 text-sm cursor-default">Tailwind CSS</span>
                  <span className="px-3 py-1 rounded-[3px] bg-white/10 text-white/70 text-sm cursor-default">Node.js</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>;
};

export default About;
