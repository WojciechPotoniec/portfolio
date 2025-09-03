import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Progetto Alpha",
      description:
        "Sviluppo di un'applicazione web full-stack per la gestione di inventari.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Progetto Beta",
      description: "Creazione di un sito e-commerce con React e Node.js.",
      imageUrl:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Progetto Gamma",
      description:
        "Design e implementazione di un'interfaccia UI/UX per un'app mobile.",
      imageUrl:
        "https://images.unsplash.com/photo-1559028006-44a3e3e4a42b?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Progetto Delta",
      description: "Dashboard di visualizzazione dati con D3.js e React.",
      imageUrl:
        "https://images.unsplash.com/photo-1560472354-b33ff08c84a5?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Progetto Epsilon",
      description: "Un bot per Discord che integra le API di OpenAI.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Progetto Epsilon",
      description: "Un bot per Discord che integra le API di OpenAI.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Progetto Epsilon",
      description: "Un bot per Discord che integra le API di OpenAI.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Progetto Epsilon",
      description: "Un bot per Discord che integra le API di OpenAI.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Progetto Epsilon",
      description: "Un bot per Discord che integra le API di OpenAI.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Progetto Epsilon",
      description: "Un bot per Discord che integra le API di OpenAI.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=1974&auto=format&fit=crop",
    },{
      id: 5,
      title: "Progetto Epsilon",
      description: "Un bot per Discord che integra le API di OpenAI.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const [activeImage, setActiveImage] = useState(projectData[0].imageUrl);

  return (
    <div className="w-full animate-fade-in-up">
      <h1 className="text-4xl font-bold tracking-widest mb-8 text-center uppercase">
        Progetti
      </h1>

      {/* 3. Nuovo layout a due colonne con Flexbox */}
      <div className="flex gap-x-10">
        {/* Colonna Sinistra: Immagine Fissa */}
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

        {/* Colonna Destra: Card Scrollabili */}
        <div className="w-1/2">
          <div className="space-y-12 max-h-[70vh] overflow-y-auto scrollbar-hide pr-4">
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onHover={() => setActiveImage(project.imageUrl)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
