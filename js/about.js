/**
 * Gestion de l'accordéon "Qui sommes-nous"
 */
export function initAboutAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('.accordion-content');

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 1. Fermer tous les autres items
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.accordion-content');
        const otherBadge = otherItem.querySelector('.rounded-full');
        
        otherContent.style.maxHeight = '0px';
        // Reset couleurs badges (Orange clair)
        if (otherBadge) {
          otherBadge.classList.replace('bg-brand-coral', 'bg-brand-coral-light');
          otherBadge.classList.replace('text-white', 'text-brand-coral');
        }
      });

      // 2. Si l'item cliqué n'était pas actif, on l'ouvre
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        
        // Style badge actif (Orange plein)
        const badge = item.querySelector('.rounded-full');
        if (badge) {
          badge.classList.replace('bg-brand-coral-light', 'bg-brand-coral');
          badge.classList.replace('text-brand-coral', 'text-white');
        }
      }
    });
  });
}

// Lancement automatique si on est sur la bonne page
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('aboutAccordion')) {
    initAboutAccordion();
  }
});