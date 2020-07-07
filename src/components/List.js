import BaseTemplate from "./BaseTemplate.js";

export default class List extends BaseTemplate {
  constructor(items, templateClass, container, createItem, createForm) {
    super(templateClass);
    this._items = items;
    this._container = container;
    this._createItem = createItem;
    this._createForm = createForm;
  }

  _addItem(item) {
    console.log(this);
    this._createItem(item).render(this._element);
  }

  render() {
    this._element = super._getElement();

    this._items.forEach((item) => {
      this._addItem(item);
    });

    this._form = this._createForm((item) => {
      this._addItem(item);
    });

    this._form.render(this._container);

    this._container.append(this._element);
  }
}
