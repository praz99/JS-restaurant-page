const content = document.getElementById('content');
const showContact = () => {
  const heading = document.createElement('h1');
  heading.innerText = 'Contact goes here!';
  content.appendChild(heading);
}

export { showContact };