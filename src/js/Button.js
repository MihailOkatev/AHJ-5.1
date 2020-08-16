// eslint-disable-next-line import/prefer-default-export
export class Button {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `<button type="button" class="button_main">Нажми на кнопку - получишь результат</button>
`;
  }

  static get popoverSelector() {
    return '.popover';
  }

  static get coordinates() {
    const coord = document.querySelector('.button_main').getBoundingClientRect();
    // eslint-disable-next-line max-len
    const popCoords = document.querySelector('.popover').getBoundingClientRect();
    const a = [coord.left, popCoords.left, coord.top, popCoords.bottom];
    return a;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    document.querySelector(this.constructor.buttonSelector).addEventListener('click', () => {
      if (document.querySelector(this.constructor.popoverSelector) === null) {
        // eslint-disable-next-line max-len
        const buttonCoords = document.querySelector(this.constructor.buttonSelector).getBoundingClientRect();
        const popover = document.createElement('div');
        popover.innerHTML = this.constructor.popover;
        popover.classList.add('popover');
        popover.style.top = `${buttonCoords.top - 125}px`;
        popover.style.left = `${buttonCoords.left}px`;
        this.parentEl.append(popover);
      } else {
        document.querySelector(this.constructor.popoverSelector).remove();
      }
      if (document.querySelector('.popover') !== null) {
      }
    });
  }

  static get popover() {
    return `
    <div class="popover_title">Всплывающая подсказка</div>
    <div class="popover_text">Эта подсказка отображается здесь, потому что вы нажали на кнопку, если нажать на кнопку еще раз - подсказка исчезнет</div>
`;
  }

  static get buttonSelector() {
    return '.button_main';
  }
}
