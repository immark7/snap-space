import { useEffect, useRef, useState } from 'react';

interface Options {
  root?: HTMLDivElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

type ReturnType = [React.RefObject<HTMLDivElement>, boolean];

function useInView(options?: Options): ReturnType {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [options]);

  return [ref, inView];
}

export default useInView;