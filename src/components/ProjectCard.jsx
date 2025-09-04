import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function ProjectCard({ project, index, onHover, onClick }) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const transitionDelay = `${index * 100}ms`;

  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      onClick={onClick}
      className={`transition-all duration-700 ease-out cursor-pointer group ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay }}
    >
      <div className="p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
        <h3 className="text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-4">
          {project.description}
        </p>
        
        {/* Badge del tipo di progetto */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.type === 'game' 
              ? 'bg-purple-500/20 text-purple-300' 
              : 'bg-blue-500/20 text-blue-300'
          }`}>
            {project.type === 'game' ? 'Gioco Interattivo' : 'Applicazione Web'}
          </span>
        </div>
        
        {/* Tecnologie */}
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-4 text-white/40 group-hover:text-white/60 text-sm">
          Clicca per esplorare →
        </div>
      </div>
    </div>
  );
}