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
      id: "inventory-app",
      title: "Progetto Alpha",
      description: "Sviluppo di un'applicazione web full-stack per la gestione di inventari.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      type: "web-app",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: "ecommerce",
      title: "Progetto Beta",
      description: "Creazione di un sito e-commerce con React e Node.js.",
      imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
      type: "web-app",
      technologies: ["React", "Node.js", "Stripe"]
    },
    // ... altri progetti
  ];

  const [activeImage, setActiveImage] = useState(projectData[0].imageUrl);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="w-full animate-fade-in-up">
      <h1 className="text-4xl font-bold tracking-widest mb-8 text-center uppercase">
        Progetti
      </h1>

      <div className="flex gap-x-10">
        <div className="w-1/2">
          <div className="sticky top-20 h-[70vh] rounded-lg overflow-hidden">
            <img
              key={activeImage}
              src={activeImage}
              alt="Anteprima del progetto"
              className="w-full h-full object-cover animate-fade-in-up"
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="space-y-12 max-h-[70vh] overflow-y-auto scrollbar-hide pr-4">
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