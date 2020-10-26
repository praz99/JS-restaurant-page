import * as Navbar from './modules/navbar';
import showMenu from './modules/menu';
import showContact from './modules/contact';
import showAbout from './modules/about';
import showHome from './modules/home';

const content = document.getElementById('content');


showHome();

const clearContent = () => {
  content.innerHTML = '';
};

Navbar.brand.onclick = () => {
  clearContent();
  showHome();
};

Navbar.insideNavbar();

Navbar.navMenu.addEventListener('click', () => {
  clearContent();
  showMenu();
});

Navbar.navContact.addEventListener('click', () => {
  clearContent();
  showContact();
});

Navbar.navAbout.addEventListener('click', () => {
  clearContent();
  showAbout();
});