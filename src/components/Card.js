export default class Card {
  constructor(text, templateClass) {
    this._text = text;
    this._templateClass = templateClass;
  }

  _setEventListeners() {
    const buttonDelete = this._element.querySelector(".button_type_delete");
    buttonDelete.addEventListener("click", (evt) => {
      this._element.remove();
    });
  }

  _getElement() {
    this._element = document
      .querySelector(this._templateClass)
      .content
      .cloneNode(true)
      .children[0];

    this._element.querySelector(".item__text").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }

  render(container) {
    this._getElement();
    container.prepend(this._element);
  }
}
