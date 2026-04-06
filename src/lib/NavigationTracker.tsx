import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavigationTracker() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there's no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, scroll to the element
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to top if element not found
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, key]);

  return null;
}
