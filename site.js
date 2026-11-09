document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  const filters = [...document.querySelectorAll('button[data-filter]')];
  const search = document.querySelector('#pub-search');
  const papers = [...document.querySelectorAll('article.publication[data-year]')];
  const count = document.querySelector('#pub-count');
  if (!papers.length) return;
  let selectedYear = 'all';
  const normalize = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().trim();
  function updatePublications() {
    const query = normalize(search ? search.value : '');
    let visible = 0;
    papers.forEach(paper => {
      const matchesYear = selectedYear === 'all' || paper.dataset.year === selectedYear;
      const matchesQuery = !query || normalize(paper.textContent).includes(query);
      const show = matchesYear && matchesQuery;
      paper.hidden = !show;
      if (show) visible++;
    });
    if (count) count.textContent = visible + (visible === 1 ? ' publication' : ' publications');
  }
  filters.forEach(button => button.addEventListener('click', () => {
    selectedYear = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    updatePublications();
  }));
  if (search) {
    search.addEventListener('input', updatePublications);
    search.addEventListener('search', updatePublications);
    search.addEventListener('change', updatePublications);
  }
  updatePublications();
});
