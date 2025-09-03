import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function ProjectCard({ project, index }) {
  // L'animazione parte quando il 10% dell'elemento è visibile.
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  // Stile di transizione per un ritardo progressivo
  const transitionDelay = `${index * 100}ms`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay }}
    >
      <div className="flex bg-white/10 rounded-lg p-6 items-center">
        <img src={project.imageUrl} alt={project.title} className="w-56 h-32 object-cover rounded mr-6"/>
        <div>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}