import '../styles/home.css';

const content = document.getElementById('content');

const showHome = () => {
  const name = document.createElement('div');
  name.classList.add('home-welcome');
  content.appendChild(name);

  const homeHeading = document.createElement('h1');
  homeHeading.innerText = `Welcome!
  ABC Restaurant online`;
  name.appendChild(homeHeading);
};

export default showHome;