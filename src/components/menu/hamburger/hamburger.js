import template from './hamburger.pug'
import './hamburger.scss'

export default function Hamburger(node){
  const parser = new DOMParser();
  const parsedDOM = parser.parseFromString(template(), "text/html")
          .body.children[0];
  node.appendChild(parsedDOM);

  const trigger = node.querySelector('.nav-button')

  trigger.addEventListener('click', (event) => {
    const clickedElement = event.target.closest('.nav-button')
    clickedElement.classList.remove('animation--off')
    clickedElement.classList.toggle('menu--open')
    document.querySelector('.nav-bar').classList.toggle('menu-hide')
  })
}
