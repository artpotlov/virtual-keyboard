import './style.scss';

const keyboardLayout = {
  en: {
    default: [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
      ['caps_lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
      ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
      ['control', 'lang', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
    shift: [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del'],
      ['caps_lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
      ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift'],
      ['control', 'lang', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
  },
  ru: {
    default: [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
      ['caps_lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
      ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift'],
      ['control', 'lang', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
    shift: [
      ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Й ', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del'],
      ['caps_lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
      ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'shift'],
      ['control', 'lang', 'win', 'alt', 'space_bar', 'alt', 'control', 'arrow_left', 'arrows_up_down', 'arrow_right'],
    ],
  },
  keyCode: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'Lang', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUpDown', 'ArrowRight'],
  func: ['backspace', 'tab', 'del', 'caps_lock', 'shift', 'enter', 'control', 'lang', 'win', 'alt', 'space_bar', 'arrow_left', 'arrows_up_down', 'arrow_right'],
};

let onCaps = false;

const createSpanIcon = (name) => {
  const span = document.createElement('span');
  span.classList.add('material-icons');
  span.textContent = name;
  return span;
};

const updateKeyboard = (elementToInsert, keyLayout, oncaps = false, onshift = false) => {
  document.querySelector('.keyboard').innerHTML = '';
  const keyCode = [...keyLayout.keyCode];
  let layout = keyLayout.en.default;
  if (localStorage.getItem('keyboardLocale')) {
    if (localStorage.getItem('keyboardLocale') === 'en') {
      if (onshift) {
        layout = keyLayout.en.shift;
      } else {
        layout = keyboardLayout.en.default;
      }
    }
    if (localStorage.getItem('keyboardLocale') === 'ru') {
      if (onshift) {
        layout = keyLayout.ru.shift;
      } else {
        layout = keyboardLayout.ru.default;
      }
    }
  } else {
    localStorage.setItem('keyboardLocale', 'en');
  }

  layout.forEach((line) => {
    const keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard__line');

    line.forEach((key) => {
      let keyboardKey = document.createElement('button');

      if (key === 'arrows_up_down') {
        keyboardKey = document.createElement('div');
        const btnUp = document.createElement('button');
        const btnDown = document.createElement('button');

        btnUp.classList.add('keyboard__key');
        btnUp.setAttribute('data-key', 'ArrowUp');
        btnUp.classList.add('keyboard__key--color-secondary');
        btnDown.classList.add('keyboard__key');
        btnDown.setAttribute('data-key', 'ArrowDown');
        btnDown.classList.add('keyboard__key--color-secondary');
        keyboardKey.classList.add('keyboard__key--split');

        btnUp.append(createSpanIcon('keyboard_arrow_up'));
        btnDown.append(createSpanIcon('keyboard_arrow_down'));

        keyboardKey.append(btnUp, btnDown);
      }

      if (key === 'arrow_left' || key === 'arrow_right') {
        keyboardKey.classList.add('keyboard__key--color-secondary');

        if (key === 'arrow_left') {
          keyboardKey.append(createSpanIcon('keyboard_arrow_left'));
        }

        if (key === 'arrow_right') {
          keyboardKey.append(createSpanIcon('keyboard_arrow_right'));
        }
      }

      if (key === 'backspace') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('backspace'));
      }

      if (key === 'tab') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('keyboard_tab'));
      }

      if (key === 'del') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Del';
      }

      if (key === 'caps_lock') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--func-caps');
        keyboardKey.classList.add('keyboard__key--color-primary');
        if (oncaps) {
          keyboardKey.classList.add('keyboard__key--func-caps-active');
        } else {
          keyboardKey.classList.remove('keyboard__key--func-caps-active');
        }
        keyboardKey.textContent = 'Caps Lock';
      }

      if (key === 'enter') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Enter';
      }

      if (key === 'shift') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Shift';
      }

      if (key === 'control') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Ctrl';
      }

      if (key === 'lang') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('language'));
      }

      if (key === 'win') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Win';
      }

      if (key === 'alt') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Alt';
      }

      if (key === 'space_bar') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('space_bar'));
      }

      if (!keyLayout.func.includes(key)) {
        if (oncaps) {
          if (onshift) {
            keyboardKey.textContent = key.toLowerCase();
          } else {
            keyboardKey.textContent = key.toUpperCase();
          }
        } else {
          keyboardKey.textContent = key;
        }
      }

      keyboardKey.classList.add('keyboard__key');

      const keyCurrentCode = keyCode.shift();
      if (keyCurrentCode !== 'ArrowUpDown') {
        keyboardKey.setAttribute('data-key', keyCurrentCode);
      }

      keyboardLine.append(keyboardKey);
    });

    elementToInsert.append(keyboardLine);
  });
};

const initKeyboard = (elementToInsert, keyLayout) => {
  const keyCode = [...keyLayout.keyCode];
  let layout = keyLayout.en.default;
  if (localStorage.getItem('keyboardLocale')) {
    if (localStorage.getItem('keyboardLocale') === 'en') {
      layout = keyLayout.en.default;
    }
    if (localStorage.getItem('keyboardLocale') === 'ru') {
      layout = keyLayout.ru.default;
    }
  } else {
    localStorage.setItem('keyboardLocale', 'en');
  }

  layout.forEach((line) => {
    const keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard__line');

    line.forEach((key) => {
      let keyboardKey = document.createElement('button');

      if (key === 'arrows_up_down') {
        keyboardKey = document.createElement('div');
        const btnUp = document.createElement('button');
        const btnDown = document.createElement('button');

        btnUp.classList.add('keyboard__key');
        btnUp.setAttribute('data-key', 'ArrowUp');
        btnUp.classList.add('keyboard__key--color-secondary');
        btnDown.classList.add('keyboard__key');
        btnDown.setAttribute('data-key', 'ArrowDown');
        btnDown.classList.add('keyboard__key--color-secondary');
        keyboardKey.classList.add('keyboard__key--split');

        btnUp.append(createSpanIcon('keyboard_arrow_up'));
        btnDown.append(createSpanIcon('keyboard_arrow_down'));

        keyboardKey.append(btnUp, btnDown);
      }

      if (key === 'arrow_left' || key === 'arrow_right') {
        keyboardKey.classList.add('keyboard__key--color-secondary');

        if (key === 'arrow_left') {
          keyboardKey.append(createSpanIcon('keyboard_arrow_left'));
        }

        if (key === 'arrow_right') {
          keyboardKey.append(createSpanIcon('keyboard_arrow_right'));
        }
      }

      if (key === 'backspace') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('backspace'));
      }

      if (key === 'tab') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('keyboard_tab'));
      }

      if (key === 'del') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Del';
      }

      if (key === 'caps_lock') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--func-caps');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Caps Lock';
      }

      if (key === 'enter') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Enter';
      }

      if (key === 'shift') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Shift';
      }

      if (key === 'control') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Ctrl';
      }

      if (key === 'lang') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('language'));
      }

      if (key === 'win') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Win';
      }

      if (key === 'alt') {
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.textContent = 'Alt';
      }

      if (key === 'space_bar') {
        keyboardKey.classList.add('keyboard__key--func');
        keyboardKey.classList.add('keyboard__key--color-primary');
        keyboardKey.append(createSpanIcon('space_bar'));
      }

      if (!keyLayout.func.includes(key)) {
        keyboardKey.textContent = key;
      }

      keyboardKey.classList.add('keyboard__key');

      const keyCurrentCode = keyCode.shift();
      if (keyCurrentCode !== 'ArrowUpDown') {
        keyboardKey.setAttribute('data-key', keyCurrentCode);
      }

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

initKeyboard(keyboard, keyboardLayout);

form.append(textArea);
virtualKeyboardComponent.append(textArea);
virtualKeyboardComponent.append(keyboard);

const pElement = document.createElement('p');
pElement.textContent = 'Клавиатура создана в Windows. Переключение языка CTRL + ALT';
virtualKeyboardComponent.append(pElement);

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const element = document.querySelector(`[data-key="${event.code}"]`);
  element.classList.add('keyboard__key--color-primary-pressed');
  updateKeyboard(keyboard, keyboardLayout, event.getModifierState('CapsLock'), event.getModifierState('Shift'));
  if (event.ctrlKey && event.altKey) {
    if (localStorage.getItem('keyboardLocale') === 'en') {
      localStorage.setItem('keyboardLocale', 'ru');
    } else {
      localStorage.setItem('keyboardLocale', 'en');
    }
    updateKeyboard(keyboard, keyboardLayout, event.getModifierState('CapsLock'), event.getModifierState('Shift'));
    onCaps = event.getModifierState('CapsLock');
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  const element = document.querySelector(`[data-key="${event.code}"]`);
  element.classList.remove('keyboard__key--color-primary-pressed');
  updateKeyboard(keyboard, keyboardLayout, event.getModifierState('CapsLock'), event.getModifierState('Shift'));
  onCaps = event.getModifierState('CapsLock');
  if (event.code.match(/(Key[a-zA-Z])|(Digit[0-9])|(Slash)|(Period)|(Comma)|(Quote)|(Semicolon)|(Backslash)/g) !== null) {
    textArea.value += element.textContent;
  }

  if (event.code === 'Space') {
    textArea.value += ' ';
  }

  if (event.code === 'Enter') {
    textArea.value += '\n';
  }

  if (event.code === 'Backspace') {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  }
});

keyboard.addEventListener('click', (event) => {
  if (event.target.dataset.key.match(/(Key[a-zA-Z])|(Digit[0-9])|(Slash)|(Period)|(Comma)|(Quote)|(Semicolon)|(Backslash)/g) !== null) {
    textArea.value += event.target.textContent;
  }

  if (event.target.dataset.key === 'Space') {
    textArea.value += ' ';
  }

  if (event.target.dataset.key === 'Enter') {
    textArea.value += '\n';
  }

  if (event.target.dataset.key === 'Backspace') {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  }

  if (event.target.dataset.key === 'CapsLock') {
    if (onCaps) {
      onCaps = false;
    } else {
      onCaps = true;
    }
    updateKeyboard(keyboard, keyboardLayout, onCaps, false);
  }
});

export default virtualKeyboardComponent;
