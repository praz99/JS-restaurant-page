import '../styles/menu.css';
import Starter from '../img/starter.jpg';

const content = document.getElementById('content');
const showMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  content.appendChild(menuContainer);

    const heading = document.createElement('h1');
    heading.innerText = 'menu';
    menuContainer.appendChild(heading);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menuContainer.appendChild(menuItems);

export { showMenu };