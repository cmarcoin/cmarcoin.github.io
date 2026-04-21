export async function loadFooter() {
  const footerContainer = document.getElementById('footer');
  if (!footerContainer) return;

  const response = await fetch('./footer.html');
  const html = await response.text();
  footerContainer.innerHTML = html;

  const year = footerContainer.querySelector('#footerYear');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}