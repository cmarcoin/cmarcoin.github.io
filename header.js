export async function loadHeader() {
  
  const container = document.getElementById('header');
  if (!container) return;

  try {
    const resp = await fetch('./header.html');
    const html = await resp.text();
    container.innerHTML = html;

    // Gestion du scroll après injection
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        container.classList.add('is-scrolled');
      } else {
        container.classList.remove('is-scrolled');
      }
    });
    // Détecter la page actuelle et ajouter la classe active
const currentPath = window.location.pathname.split("/").pop() || "index.html";
const navLinks = container.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

    // Gestion Menu Mobile
    const btn = document.getElementById('mobileBtn');
    const overlay = document.getElementById('mobileOverlay');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (btn && overlay) {
      btn.onclick = () => {
        const isOpen = overlay.classList.toggle('active');
        if (isOpen) {
          openIcon?.classList.add('hidden');
          closeIcon?.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        } else {
          openIcon?.classList.remove('hidden');
          closeIcon?.classList.add('hidden');
          document.body.style.overflow = '';
        }
      };
    }
  } catch (err) {
    console.error("Erreur chargement header:", err);
  }
}

