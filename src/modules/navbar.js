const navBar = document.createElement('nav');

const insideNavbar = () => {
  navBar.classList.add('navbar');
  const navLeft = document.createElement('div');
  navLeft.classList.add('nav-left');
  navLeft.innerText = 'RestYourAnt';
  const navRight = document.createElement('div');
  navRight.classList.add('nav-right');
  navRight.innerHTML = `<ul class="nav-list">
  <li class="list-item">menu</li>
  <li class="list-item">about</li>
  <li class="list-item">contact</li>
  </ul>`
  navBar.appendChild(navLeft);
  navBar.appendChild(navRight);
  document.body.appendChild(navBar);
};

export default insideNavbar;
