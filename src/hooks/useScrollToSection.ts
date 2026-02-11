import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SectionConfig {
  validSections: string[];
  headerOffset?: number;
  basePath: string;
}

export function useScrollToSection({ validSections, headerOffset = 100, basePath }: SectionConfig) {
  const location = useLocation();

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    },
    [headerOffset],
  );

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const sectionId = pathParts[pathParts.length - 1];

    if (validSections.includes(sectionId)) {
      setTimeout(() => scrollToSection(sectionId), 100);
    } else if (location.pathname === basePath || location.pathname === `${basePath}/`) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, validSections, basePath, scrollToSection]);

  return { scrollToSection };
}
