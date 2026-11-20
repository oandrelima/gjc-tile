// GJC Tile Inc. — Core Interactive Scripts

function toggleNav() {
  const nav = document.getElementById('mainNav');
  const btn = document.querySelector('.menu-toggle');
  if (!nav || !btn) return;
  nav.classList.toggle('is-open');
  const expanded = nav.classList.contains('is-open');
  btn.setAttribute('aria-expanded', expanded);
}

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  content.hidden = isExpanded;
}

// Scroll Reveal with Opacity
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }
});
