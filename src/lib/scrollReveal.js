// Simple scroll reveal using IntersectionObserver
export function initScrollReveal(options = {}) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const selector = options.selector || '.reveal-on-scroll';
  const rootMargin = options.rootMargin || '0px 0px -8% 0px';
  const threshold = typeof options.threshold === 'number' ? options.threshold : 0.08;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin, threshold });

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));

  return observer;
}
