import TodoerSVG from './images/Todoer.png';
const header = document.querySelector('#header');
const headerImage = new Image();
headerImage.src = TodoerSVG;
header.appendChild(headerImage);

export default header;