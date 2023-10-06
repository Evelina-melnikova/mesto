export default class Section {
  constructor({ renderer }, formSelector) {
    this._renderer = renderer;
    this._formSelector = document.querySelector(formSelector);
  };

  setItem(item) {
    this._formSelector.prepend(item);
  };

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}

