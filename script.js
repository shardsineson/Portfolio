(() => {
  const menu = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('#mobile-nav');
  if (menu && mobileNav) {
    function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); mobileNav.hidden = true; }
    menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); mobileNav.hidden = !open; });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
  }
  const filters = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-tags]')];
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    projects.forEach(item => { item.hidden = selected !== 'all' && !item.dataset.tags.split(' ').includes(selected); });
  }));
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
