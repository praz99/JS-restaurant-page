import '../styles/home.css';

const content = document.getElementById('content');

const showHome = () => {
  const name = document.createElement('div');
  name.classList.add('home-welcome');

  content.appendChild(name);
};

export { showHome };