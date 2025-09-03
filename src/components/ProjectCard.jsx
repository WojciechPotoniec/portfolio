import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function ProjectCard({ project, index, onHover }) {

  // L'animazione parte quando il 10% dell'elemento è visibile.
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  // Stile di transizione per un ritardo progressivo
  const transitionDelay = `${index * 100}ms`;

  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      className={`transition-all duration-700 ease-out cursor-pointer ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay }}
    >
      <h3 className="text-5xl font-bold text-white/60 hover:text-white transition-colors duration-300">
        {project.title}
      </h3>
    </div>
  );
}