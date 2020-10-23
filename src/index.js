import './style.css';
import * as Navbar from './modules/navbar';
import { showMenu } from './modules/menu';
import { showContact } from './modules/contact';
import { showAbout } from './modules/about';

// const body = document.querySelector('body');
const content = document.getElementById('content');

const clearContent = () => {
  content.innerHTML = '';
}

Navbar.insideNavbar();

Navbar.navMenu.addEventListener('click', () => {
  clearContent();
  showMenu();
})

Navbar.navContact.addEventListener('click', () => {
  clearContent();
  showContact();
})

Navbar.navAbout.addEventListener('click', () => {
  clearContent();
  showAbout();
})

// content.classList.add('home-page');
