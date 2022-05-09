import './style.scss';

const keyboardLayout = {
  en: {
    default: [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
      ['caps_lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
      ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
      ['control', 'fn', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
    shift: [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del'],
      ['caps_lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
      ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift'],
      ['control', 'fn', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
  },
  ru: {
    default: [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
      ['caps_lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
      ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift'],
      ['control', 'fn', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
    shift: [
      ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Й ', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del'],
      ['caps_lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
      ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'shift'],
      ['control', 'fn', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
  },
};

const generateKeyLayout = (elementToInsert, keyLayout) => {
  let layout = keyLayout.en.default;
  if (localStorage.getItem('keyboardLocale')) {
    if (localStorage.getItem('keyboardLocale') === 'en') {
      layout = keyLayout.en.default;
    }
    if (localStorage.getItem('keyboardLocale') === 'ru') {
      layout = keyLayout.ru.default;
    }
  }
  layout.forEach((line) => {
    const keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard__line');

    line.forEach((key) => {
      const keyboardKey = document.createElement('button');
      keyboardKey.classList.add('keyboard__key');
      if (['backspace', 'tab', 'del', 'caps_lock', 'enter', 'shift', 'space_bar'].includes(key)) {
        keyboardKey.classList.add('keyboard__key--func');
      }

      if (key === 'caps_lock') {
        keyboardKey.classList.add('keyboard__key--func-caps');
      }

      keyboardKey.textContent = key;

      keyboardLine.append(keyboardKey);
    });
    elementToInsert.append(keyboardLine);
  });
};

const virtualKeyboardComponent = document.createElement('section');
const form = document.createElement('form');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const keyboardLine = document.createElement('div');

virtualKeyboardComponent.classList.add('virtual-keyboard');
textArea.classList.add('text-field');
textArea.setAttribute('placeholder', 'Enter some text');
keyboard.classList.add('keyboard');
keyboardLine.classList.add('keyboard__line');

generateKeyLayout(keyboard, keyboardLayout);

form.append(textArea);
virtualKeyboardComponent.append(textArea);
virtualKeyboardComponent.append(keyboard);

export default virtualKeyboardComponent;
