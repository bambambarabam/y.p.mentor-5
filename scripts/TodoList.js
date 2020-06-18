class TodoList {
  static itemTemplate = document.querySelector(".list_template").content;

  constructor(items, createTodoForm, createTodoListItem) {
    this._items = items;
    this._createTodoForm = createTodoForm;
    this._createTodoListItem = createTodoListItem;
  }

  _addItem = (text) => {
    this._createTodoListItem(text).render(this._listContainer);
  };

  render(container) {
    // создаем контейнер
    this._listContainer = TodoList.itemTemplate.cloneNode(true).children[0];

    // добавляем форму
    this._form = this._createTodoForm(this._addItem);
    this._form.render(container);

    // в контейнер добавляем элементы списка
    this._items.forEach((item) => this._addItem(item));

    // добавляем контнейнер на страницу
    container.append(this._listContainer);
  }
}
