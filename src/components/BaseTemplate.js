export default class BaseTemplate {
    constructor(templateClass) {
      this._templateClass = templateClass;
    }
  
    _getElement() {
      this._element = document
        .querySelector(this._templateClass)
        .content.cloneNode(true).children[0];
  
      return this._element;
    }
  }
  