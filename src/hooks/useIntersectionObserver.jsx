import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(options) {
  const [isIntersecting, setIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aggiorna lo stato solo quando l'elemento diventa visibile
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target); // Smetti di osservare dopo la prima volta
        }
      },
      options
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Funzione di pulizia per disconnettere l'observer
    const element = elementRef.current;
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
}