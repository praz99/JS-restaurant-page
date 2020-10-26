import '../styles/contact.css';
import ContactItem1 from '../img/contact-1.jpg';
import ContactItem2 from '../img/contact-2.jpg';
import ContactItem3 from '../img/contact-3.jpg';

const content = document.getElementById('content');
const showContact = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  content.appendChild(contactContainer);

  const heading = document.createElement('h1');
  heading.innerText = `+12 234 578 901
  contact@abcrestaurant.com`;
  contactContainer.appendChild(heading);

  const contactItems = document.createElement('div');
  contactItems.classList.add('contact-items');
  contactContainer.appendChild(contactItems);

    const contactItem1 = document.createElement('div');
    const contactItem2 = document.createElement('div');
    const contactItem3 = document.createElement('div');

    const contactImage1 = new Image();
    const contactImage2 = new Image();
    const contactImage3 = new Image();

    contactImage1.src = ContactItem1;
    contactImage1.classList.add('contact-image');
    contactImage2.src = ContactItem2;
    contactImage2.classList.add('contact-image');
    contactImage3.src = ContactItem3;
    contactImage3.classList.add('contact-image');

    contactItem1.classList.add('contact-item');
    contactItem2.classList.add('contact-item');
    contactItem3.classList.add('contact-item');

    contactItems.appendChild(contactItem1);
    contactItems.appendChild(contactItem2);
    contactItems.appendChild(contactItem3);

    contactItem1.appendChild(contactImage1);
    contactItem2.appendChild(contactImage2);
    contactItem3.appendChild(contactImage3);
};

export { showContact };