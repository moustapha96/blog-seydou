import { useEffect } from 'react';

// Observe globalement tous les elements .reveal et leur ajoute .is-visible
// quand ils entrent dans le viewport. Couvre aussi le contenu ajoute
// dynamiquement (changements de route, donnees chargees en async) grace a
// un MutationObserver. A appeler une seule fois, au plus haut niveau.
export default function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const register = (node) => {
      if (!node || node.nodeType !== 1) return;
      if (node.classList?.contains('reveal') && !node.classList.contains('is-visible')) io.observe(node);
      node.querySelectorAll?.('.reveal:not(.is-visible)').forEach((el) => io.observe(el));
    };

    register(document.body);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach(register));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}
