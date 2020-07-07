import BaseTemplate from "./BaseTemplate.js";

export default class Form extends BaseTemplate {
  constructor(templateClass, addItem) {
    super(templateClass);
    this._addItem = addItem;
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const text = this._element.querySelector(".form__input").value;
      this._addItem(text);
      this._element.querySelector(".form__input").value = "";
    });
  }

  _getElement() {
    this._element = super._getElement();

    this._setEventListeners();

    return this._element;
  }

  render(container) {
    this._getElement();
    container.append(this._element);
  }
}
