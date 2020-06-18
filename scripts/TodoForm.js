class TodoForm {
  static itemTemplate = document.querySelector(".form_template").content;

  constructor(addItem) {
    this._addItem = addItem;
  }

  _addEventListeners(form) {
    const formInput = this._element.querySelector(".form__input");

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const text = formInput.value;

      this._addItem(text);

      // сбрасываем состояние
      formInput.value = "";
    });
  }

  render(container) {
    this._element = TodoForm.itemTemplate.cloneNode(true);

    const form = this._element.querySelector(".form");

    this._addEventListeners(form);

    container.append(this._element);
  }
}
