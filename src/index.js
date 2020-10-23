import './style.css';

// const body = document.querySelector('body');
const content = document.getElementById('content');
const navBar = document.createElement('nav');
const ul = document.createElement('ul');
const li = document.createElement('li');

const insideNavbar = () => {
  navBar.classList.add('navbar');
  const navLeft = document.createElement('div');
  navLeft.classList.add('nav-left');
  navLeft.innerText = 'Rest-Your-Ant';
  const navRight = document.createElement('div');
  navRight.classList.add('nav-right');
  navRight.innerHTML = navLinks();
  navBar.appendChild(navLeft);
  navBar.appendChild(navRight);
  document.body.appendChild(navBar);
};

const navLinks = () => {
  return ['menu', 'about', 'contact'];
};

insideNavbar();

content.classList.add('home-page');
