import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.screen.width);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cr = entry.contentRect;

        setWindowWidth(cr.width);
      });
    });

    ro.observe(document.body);

    return () => ro.unobserve(document.body);
  }, []);

  return { windowWidth };
};
