import '../styles/home.css'
const content = document.getElementById('content');

const showHome = () => {
  const welcomeMessage = document.createElement('div');
  welcomeMessage.classList.add('home-welcome');
  welcomeMessage.innerText = "Welcome fellas";
  content.appendChild(welcomeMessage);
}

export { showHome };