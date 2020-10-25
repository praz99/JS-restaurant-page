import '../styles/menu.css';
import MenuItem1 from '../img/menu-item-1.jpg';
import MenuItem2 from '../img/menu-item-2.jpg';
import MenuItem3 from '../img/menu-item-3.jpg';

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

    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');

    const menuImage1 = new Image();
    const menuImage2 = new Image();
    const menuImage3 = new Image();

    menuImage1.src = MenuItem1;
    menuImage1.classList.add('menu-image');
    menuImage2.src = MenuItem2;
    menuImage2.classList.add('menu-image');
    menuImage3.src = MenuItem3;
    menuImage3.classList.add('menu-image');

    menuItem1.classList.add('menu-item');
    menuItem2.classList.add('menu-item');
    menuItem3.classList.add('menu-item');

    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuItem3);

    menuItem1.appendChild(menuImage1);
    menuItem2.appendChild(menuImage2);
    menuItem3.appendChild(menuImage3);
};

export { showMenu };