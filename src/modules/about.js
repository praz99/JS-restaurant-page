const content = document.getElementById('content');
const showAbout = () => {
  const heading = document.createElement('h1');
  heading.innerText = 'About goes here!';
  content.appendChild(heading);
}

export { showAbout };