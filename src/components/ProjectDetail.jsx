import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TicTacToeGame from "./TicTacToeGame";

// Configurazione progetti con i loro componenti
const PROJECT_CONFIGS = {
  "tic-tac-toe": {
    title: "Tic-Tac-Toe",
    description:
      "Un classico gioco del tris con interfaccia moderna, animazioni fluide e possibilità di personalizzare i nomi dei giocatori.",
    component: TicTacToeGame,
    technologies: ["React", "JavaScript", "CSS Animations"],
    features: [
      "Gioco interattivo del tris",
      "Personalizzazione nomi giocatori",
      "Animazioni fluide",
      "Sistema di vittoria intelligente",
      "Log delle mosse",
      "Rigiocabilità istantanea",
    ],
    githubUrl: "https://github.com/WojciechPotoniec/Tic-tac-toe-project",
    liveUrl: null,
    year: "2025",
  },
  // Configurazioni per altri progetti...
  // progetto di esempio
  "inventory-app": {
    title: "Inventory Management",
    description:
      "Applicazione completa per la gestione degli inventari aziendali.",
    component: null, // Solo preview/demo
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Dashboard analytics",
      "Gestione prodotti",
      "Sistema di notifiche",
      "Report automatici",
    ],
    githubUrl: "https://github.com/WojciechPotoniec/inventory-app",
    liveUrl: "https://inventory-demo.vercel.app",
    year: "2024",
  },
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
            onClick={() => navigate("/")}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft size={16} className="sm:hidden" />
            <FaArrowLeft size={20} className="hidden sm:block" />
            <span className="hidden sm:inline">Portfolio</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={16} className="sm:hidden" />
                <FaGithub size={20} className="hidden sm:block" />
                <span className="hidden sm:inline">Codice</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaExternalLinkAlt size={16} className="sm:hidden" />
                <FaExternalLinkAlt size={20} className="hidden sm:block" />
                <span className="hidden sm:inline">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:pt-12">
        <div className="px-4 sm:px-6">
          {/* Informazioni progetto */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                {project.title}
              </h1>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm self-start sm:self-center">
                {project.year}
              </span>
            </div>

            <p className="font-body text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Tecnologie */}
              <div>
                <h3 className="font-heading text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Tecnologie utilizzate
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="font-code px-2.5 sm:px-3 py-1 bg-white/10 rounded-lg text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-heading text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Caratteristiche
                </h3>
                <ul className="space-y-2 text-white/80">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="font-body flex items-center gap-2 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Componente del progetto */}
        {ProjectComponent ? (
          <div className="w-full min-h-screen">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center">
              Prova il progetto
            </h2>
            <ProjectComponent />
          </div>
        ) : (
          <div className="bg-white/5 rounded-xl p-6 sm:p-8 lg:p-12 text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Demo non disponibile
            </h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base">
              Questo progetto è disponibile tramite link esterno
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base"
              >
                <FaExternalLinkAlt size={16} className="sm:hidden" />
                <FaExternalLinkAlt size={20} className="hidden sm:block" />
                Visita il progetto
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
