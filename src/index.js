import './style.scss';
import header from './components/header/index';
import footer from './components/footer/index';
import virtualKeyboard from './components/virtual-keyboard/index';

const main = document.createElement('main');
main.classList.add('main');

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', header);
  main.append(virtualKeyboard);
  document.body.append(main);
  document.body.insertAdjacentHTML('beforeend', footer);
});
