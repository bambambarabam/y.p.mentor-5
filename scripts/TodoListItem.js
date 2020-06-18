class TodoListItem {
  static itemTemplate = document.querySelector(".item_template").content;

  constructor(text) {
    this._text = text;
  }

  render(container) {
    this._element = TodoListItem.itemTemplate.cloneNode(true);
    this._element.querySelector(".item__text").textContent = this._text;

    container.prepend(this._element);
  }
}
