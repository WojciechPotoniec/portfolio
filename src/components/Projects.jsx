import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const navigate = useNavigate();
  
  const projectData = [
    {
      id: "tic-tac-toe",
      title: "Tic-Tac-Toe",
      description: "Un classico gioco del tris interattivo con interfaccia moderna e animazioni fluide.",
      imageUrl: "tictactoe-preview.jpg",
      type: "game",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: "coming-soon-1",
      isComingSoon: true,
      imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop"
    },
    // Progetti commentati per il futuro
    // {
    //   id: "inventory-app",
    //   title: "Progetto Alpha",
    //   description: "Sviluppo di un'applicazione web full-stack per la gestione di inventari.",
    //   imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    //   type: "web-app",
    //   technologies: ["React", "Node.js", "MongoDB"]
    // },
    // {
    //   id: "ecommerce",
    //   title: "Progetto Beta", 
    //   description: "Creazione di un sito e-commerce con React e Node.js.",
    //   imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
    //   type: "web-app",
    //   technologies: ["React", "Node.js", "Stripe"]
    // },
  ];

  const [activeImage, setActiveImage] = useState(projectData[0].imageUrl);

  const handleProjectClick = (projectId) => {
    // Solo per progetti reali, non per le card "coming soon"
    if (!projectId.includes('coming-soon')) {
      navigate(`/project/${projectId}`);
    }
  };

  return (
    <div className="w-full animate-fade-in-up">
      <h1 className="font-heading text-4xl font-bold tracking-widest mb-8 text-center uppercase">
        Progetti
      </h1>

      <div className="lg:flex lg:gap-x-10">
        <div className="hidden lg:block lg:w-1/2">
          <div className="sticky top-20 h-[70vh] rounded-lg overflow-hidden bg-black/20 flex items-center justify-center">
            <img
              key={activeImage}
              src={activeImage}
              alt="Anteprima del progetto"
              className="max-w-full max-h-full object-contain animate-fade-in-up"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="space-y-6 lg:space-y-12 lg:max-h-[70vh] lg:overflow-y-auto lg:scrollbar-hide lg:pr-4">
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onHover={() => setActiveImage(project.imageUrl)}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}