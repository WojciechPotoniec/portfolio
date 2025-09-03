import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectData = [
    { id: 1, title: "Progetto Alpha", description: "Una breve descrizione del Progetto Alpha.", imageUrl: "https://via.placeholder.com/400x200?text=Progetto+Alpha" },
    { id: 2, title: "Progetto Beta", description: "Una breve descrizione del Progetto Beta.", imageUrl: "https://via.placeholder.com/400x200?text=Progetto+Beta" },
    { id: 3, title: "Progetto Gamma", description: "Una breve descrizione del Progetto Gamma.", imageUrl: "https://via.placeholder.com/400x200?text=Progetto+Gamma" },
    { id: 4, title: "Progetto Delta", description: "Una breve descrizione del Progetto Delta.", imageUrl: "https://via.placeholder.com/400x200?text=Progetto+Delta" },
    { id: 5, title: "Progetto Epsilon", description: "Una breve descrizione del Progetto Epsilon.", imageUrl: "https://via.placeholder.com/400x200?text=Progetto+Epsilon" },
  ];

  return (
    <div className="w-full animate-fade-in-up">
      <h1 className="text-4xl font-bold tracking-widest mb-8 text-center">PROGETTI</h1>
      
      {/* Contenitore scrollabile */}
      <div className="space-y-8 overflow-y-auto max-h-[70vh] pr-4">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}