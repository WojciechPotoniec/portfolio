import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TicTacToeGame from "./TicTacToeGame";

// Configurazione progetti con i loro componenti
const PROJECT_CONFIGS = {
  "tic-tac-toe": {
    title: "Tic-Tac-Toe",
    description: "Un classico gioco del tris con interfaccia moderna, animazioni fluide e possibilità di personalizzare i nomi dei giocatori.",
    component: TicTacToeGame,
    technologies: ["React", "JavaScript", "CSS Animations"],
    features: [
      "Gioco interattivo del tris",
      "Personalizzazione nomi giocatori",
      "Animazioni fluide",
      "Sistema di vittoria intelligente",
      "Log delle mosse",
      "Rigiocabilità istantanea"
    ],
    githubUrl: "https://github.com/WojciechPotoniec/Tic-tac-toe-project",
    liveUrl: null,
    year: "2024"
  },
  // Configurazioni per altri progetti...
  "inventory-app": {
    title: "Inventory Management",
    description: "Applicazione completa per la gestione degli inventari aziendali.",
    component: null, // Solo preview/demo
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Dashboard analytics",
      "Gestione prodotti",
      "Sistema di notifiche",
      "Report automatici"
    ],
    githubUrl: "https://github.com/WojciechPotoniec/inventory-app",
    liveUrl: "https://inventory-demo.vercel.app",
    year: "2024"
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = PROJECT_CONFIGS[projectId];
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Progetto non trovato</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            ← Torna al portfolio
          </button>
        </div>
      </div>
    );
  }

  const ProjectComponent = project.component;

  return (
    <div className="min-h-screen text-white">
      {/* Header con navigazione */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft size={20} />
            Portfolio
          </button>
          
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={20} />
                Codice
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaExternalLinkAlt size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Informazioni progetto */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="font-display text-5xl font-bold">{project.title}</h1>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
              {project.year}
            </span>
          </div>
          
          <p className="font-body text-xl text-white/80 mb-8 max-w-3xl">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Tecnologie */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Tecnologie utilizzate</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="font-code px-3 py-1 bg-white/10 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Caratteristiche</h3>
              <ul className="space-y-2 text-white/80">
                {project.features.map((feature, i) => (
                  <li key={i} className="font-body flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Componente del progetto */}
        {ProjectComponent ? (
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Prova il progetto
            </h2>
            <ProjectComponent />
          </div>
        ) : (
          <div className="bg-white/5 rounded-xl p-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Demo non disponibile</h3>
            <p className="text-white/80 mb-6">
              Questo progetto è disponibile tramite link esterno
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <FaExternalLinkAlt size={20} />
                Visita il progetto
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}