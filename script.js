const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const savedTheme = localStorage.getItem('tvio-theme');

if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      themeToggle.setAttribute('aria-pressed', 'true');
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }

    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      localStorage.setItem('tvio-theme', isLight ? 'light' : 'dark');
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Toggle light mode');
    });

    menuToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
      });
    });