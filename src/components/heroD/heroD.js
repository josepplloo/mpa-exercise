import data from './../../data/HeroD.json'
import template from './heroD.pug'
import './heroD.scss'

export default function HeroD(node) {
    const parser = new DOMParser();
    const parsedDOM = parser.parseFromString(template(data), "text/html")
          .body.children[0];
  node.appendChild(parsedDOM);
}