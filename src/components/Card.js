import BaseTemplate from "./BaseTemplate.js";

export default class Card extends BaseTemplate{
  constructor(text, templateClass) {
    super(templateClass);
    this._text = text;
  }

  _setEventListeners() {
    const buttonDelete = this._element.querySelector(".button_type_delete");
    buttonDelete.addEventListener("click", (evt) => {
      this._element.remove();
    });
  }

  _getElementCard() {
    this._element = super._getElement();

    this._element.querySelector(".item__text").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }

  render(container) {
    this._getElementCard();
    container.prepend(this._element);
  }
}
