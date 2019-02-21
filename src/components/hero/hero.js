import data from './../../data/hero.json'
import template from './hero.pug'
import './hero.scss'

export default function Hero(node) {
    const parser = new DOMParser();
    const parsedDOM = parser.parseFromString(template(data), "text/html")
          .body.children[0];
  node.appendChild(parsedDOM);
}