import '../styles/about.css';
import AboutItem1 from '../img/about-1.jpg';
import AboutItem2 from '../img/about-2.jpg';
import AboutItem3 from '../img/about-3.jpg';

const content = document.getElementById('content');
const showAbout = () => {
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');
  content.appendChild(aboutContainer);

  const heading = document.createElement('h1');
  heading.innerText = 'www.abcrestaurant.com';
  aboutContainer.appendChild(heading);

  const aboutItems = document.createElement('div');
  aboutItems.classList.add('about-items');
  aboutContainer.appendChild(aboutItems);

  const aboutItem1 = document.createElement('div');
  const aboutItem2 = document.createElement('div');
  const aboutItem3 = document.createElement('div');

  const aboutImage1 = new Image();
  const aboutImage2 = new Image();
  const aboutImage3 = new Image();

  aboutImage1.src = AboutItem1;
  aboutImage1.classList.add('about-image');
  aboutImage2.src = AboutItem2;
  aboutImage2.classList.add('about-image');
  aboutImage3.src = AboutItem3;
  aboutImage3.classList.add('about-image');

  aboutItem1.classList.add('about-item');
  aboutItem2.classList.add('about-item');
  aboutItem3.classList.add('about-item');

  aboutItems.appendChild(aboutItem1);
  aboutItems.appendChild(aboutItem2);
  aboutItems.appendChild(aboutItem3);

  aboutItem1.appendChild(aboutImage1);
  aboutItem2.appendChild(aboutImage2);
  aboutItem3.appendChild(aboutImage3);
};

export default showAbout;