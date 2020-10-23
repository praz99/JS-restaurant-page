import '../styles/navbar.css'

const content = document.getElementById('content');
const navBar = document.createElement('nav');
const navLinksList = document.createElement('ul');
const navMenu = document.createElement('li');
const navContact = document.createElement('li');
const navAbout = document.createElement('li');
const navLeft = document.createElement('div');

const insideNavbar = () => {
  navBar.classList.add('navbar');
  
  navLeft.classList.add('nav-left');
  navLeft.innerText = 'RestYourAnt';
  const navRight = document.createElement('div');
  navRight.classList.add('nav-right');
  navRight.appendChild(navLinks());
  navBar.appendChild(navLeft);
  navBar.appendChild(navRight);
  document.body.insertBefore(navBar, content);
};

const navLinks = () => {
  navLinksList.classList.add('nav-list');
  // navItems = ['menu', 'contact', 'about'];
  navMenu.classList.add('list-item');
  navMenu.innerText = 'menu';
  navLinksList.appendChild(navMenu);

  navContact.classList.add('list-item');
  navContact.innerText = 'contact';
  navLinksList.appendChild(navContact);

  navAbout.classList.add('list-item');
  navAbout.innerText = 'about';
  navLinksList.appendChild(navAbout);
  
  return navLinksList;
}

export { insideNavbar, navMenu, navContact, navAbout, navLeft, };
