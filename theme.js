const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

toggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.replace('bx-sun', 'bx-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('bx-moon', 'bx-sun');
  }
});