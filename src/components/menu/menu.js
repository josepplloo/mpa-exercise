import template from './menu.pug'
import './menu.scss'
import Logo from './logo/logo'
import Links from './links/links'
import Hamburger from './hamburger/hamburger'

export default function Menu(node) {
  node.innerHTML = template();
  const menuElement = node.querySelector('.header');
  const logo =  Logo(menuElement);
  const hamburger = Hamburger(menuElement);
  const links =  Links(menuElement);
}

