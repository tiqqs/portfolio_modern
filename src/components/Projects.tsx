
import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoLink: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  demoLink,
  delay
}) => {
  return (
    <AnimatedElement animation="fade-up" delay={delay} threshold={0.1}>
      <div className="rounded-[3px] overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
        <div className="h-48 bg-gradient-to-br from-purple-900/30 to-black/30 flex items-center justify-center">
          {image ? <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" /> : <div className="text-4xl font-bold text-white/20">{title}</div>}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 cursor-default">{title}</h3>
          <p className="text-gray-400 mb-4 cursor-default">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => <span key={index} className="px-2 py-1 rounded-[3px] text-xs bg-white/10 text-white/70 cursor-default">
                {tag}
              </span>)}
          </div>
          
          <div className="flex gap-4 mt-auto">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="gap-1 rounded-[3px]">
                <ExternalLink className="h-4 w-4" />
                Besuchen
              </Button>
            </a>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Reinigung Balkan",
      description: "Moderne Landing Page für ein Reinigungsunternehmen",
      tags: ["Landing Page", "Reinigung"],
      image: "/uploads/aa2375d1-747e-499f-9503-0dbfe13791a9.png",
      demoLink: "#"
    }, 
    {
      title: "Mythara",
      description: "Gaming Webseite für einen Minecraft-Server mit interaktiven, animierten Elementen",
      tags: ["Gaming Webseite", "Landing Page", "Minecraft"],
      image: "/uploads/7bc773db-e368-436e-b5ed-4de47b697203.png",
      demoLink: "https://tiqqs.xyz/mythara"
    },
    {
      title: "ALIVE",
      description: "Interaktive und animierte Landing Page als Eigenprojekt erstellt",
      tags: ["Landing Page", "Portfolio Webseite"],
      image: "/uploads/d33d77ab-ed4b-49f2-853e-90c7ae70aa60.png",
      demoLink: "https://tiqqs.xyz/alive"
    }
  ];

  return <div className="py-20 bg-black" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">Projekte</h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">Ob Kundenauftrag oder Eigenentwicklung – diese Projekte zeigen meine Vielseitigkeit</p>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              tags={project.tags} 
              image={project.image} 
              demoLink={project.demoLink}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>;
};

export default Projects;
