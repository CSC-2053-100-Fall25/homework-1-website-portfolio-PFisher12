function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark';

  const div = document.createElement('div');
  div.className = 'container-fluid';

  const brand = document.createElement('a');
  brand.className = 'navbar-brand';
  brand.href = 'index.html';
  brand.textContent = 'My Portfolio';

  const button = document.createElement('button');
  button.className = 'navbar-toggler';
  button.type = 'button';
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarNav');
  button.innerHTML = '<span class="navbar-toggler-icon"></span>';

  const collapse = document.createElement('div');
  collapse.className = 'collapse navbar-collapse';
  collapse.id = 'navbarNav';

  const ul = document.createElement('ul');
  ul.className = 'navbar-nav';

  const navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Hobbies', href: 'hobbies.html' },
    { text: 'Schedule', href: 'schedule.html' }
  ];

  navItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  collapse.appendChild(ul);
  div.appendChild(brand);
  div.appendChild(button);
  div.appendChild(collapse);
  nav.appendChild(div);

  container.appendChild(nav);
}
