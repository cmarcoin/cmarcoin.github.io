export function initAccordeon() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  function closeItem(item) {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    const label = item.querySelector('.faq-label');

    item.classList.remove('bg-brand-primary', 'shadow-brand');
    item.classList.add('bg-brand-primary-light');

    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }

    if (answer) {
      answer.style.maxHeight = '0px';
    }

    if (icon) {
      icon.textContent = '+';
      icon.classList.remove('text-white', 'rotate-180');
      icon.classList.add('text-brand-primary');
    }

    if (label) {
      label.classList.remove('text-white');
      label.classList.add('text-brand-primary');
    }
  }

  function openItem(item) {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    const label = item.querySelector('.faq-label');

    item.classList.remove('bg-brand-primary-light');
    item.classList.add('bg-brand-primary', 'shadow-brand');

    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }

    if (answer) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }

    if (icon) {
      icon.textContent = '–';
      icon.classList.remove('text-brand-primary');
      icon.classList.add('text-white');
    }

    if (label) {
      label.classList.remove('text-brand-primary');
      label.classList.add('text-white');
    }
  }

  items.forEach((item) => {
    closeItem(item);

    item.addEventListener('mouseenter', () => {
      if (item.getAttribute('data-open') === 'true') return;
      item.classList.remove('bg-brand-primary-light');
      item.classList.add('bg-brand-beige');
    });

    item.addEventListener('mouseleave', () => {
      if (item.getAttribute('data-open') === 'true') return;
      item.classList.remove('bg-brand-beige');
      item.classList.add('bg-brand-primary-light');
    });

    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';

      items.forEach((otherItem) => {
        otherItem.setAttribute('data-open', 'false');
        closeItem(otherItem);
      });

      if (!isOpen) {
        item.setAttribute('data-open', 'true');
        openItem(item);
      }
    });
  });

  window.addEventListener('resize', () => {
    items.forEach((item) => {
      if (item.getAttribute('data-open') !== 'true') return;
      const answer = item.querySelector('.faq-answer');
      if (answer) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}