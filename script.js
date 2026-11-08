const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
// Prevent placeholder destinations from opening invalid links.
document.querySelectorAll('[data-placeholder="true"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    alert('This link is a placeholder. Please replace it with your real URL before publishing.');
  });
});
