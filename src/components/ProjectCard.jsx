import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function ProjectCard({ project, index, onHover, onClick }) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const transitionDelay = `${index * 100}ms`;

  // Card per "progetti in arrivo"
  if (project.isComingSoon) {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out group ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay }}
      >
        <div className="p-4 sm:p-5 lg:p-6 rounded-lg border border-dashed border-white/30 hover:border-white/40 bg-gradient-to-br from-white/5 to-white/10 hover:bg-white/5 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
          {/* Effetto di brillamento */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

          <div className="relative z-10 text-center">
            {/* Icona */}
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center group-hover:border-white/60 transition-colors duration-300">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white/60 group-hover:text-white/80 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-2">
              Nuovi Progetti in Arrivo
            </h3>

            <p className="font-body text-sm sm:text-base text-white/50 group-hover:text-white/70 transition-colors duration-300 mb-3 sm:mb-4 leading-relaxed px-2 sm:px-0">
              Sto lavorando su nuovi progetti entusiasmanti che saranno presto
              disponibili
            </p>

            {/* Badge animato */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 justify-center">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/20">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <span className="font-body text-xs font-medium text-white/70">
                  In Sviluppo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Card normale per progetti esistenti
  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      onClick={onClick}
      className={`transition-all duration-700 ease-out cursor-pointer group ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay }}
    >
      <div className="p-4 sm:p-5 lg:p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="font-body text-sm sm:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Badge del tipo di progetto */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span
            className={`font-body px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium ${
              project.type === "game"
                ? "bg-purple-500/20 text-purple-300"
                : "bg-blue-500/20 text-blue-300"
            }`}
          >
            {project.type === "game" ? "Gioco Interattivo" : "Applicazione Web"}
          </span>
        </div>

        {/* Tecnologie */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies?.map((tech, i) => (
            <span
              key={i}
              className="font-code px-2 py-1 bg-white/10 text-white/70 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="font-body mt-3 sm:mt-4 text-white/40 group-hover:text-white/60 text-xs sm:text-sm">
          Clicca per esplorare →
        </div>
      </div>
    </div>
  );
}
