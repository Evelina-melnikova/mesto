export default class Section {
  constructor({ renderer }, formSelector) {
    this.renderer = renderer;
    this._formSelector = document.querySelector(formSelector);
  };

  setItem(item) {
    this._formSelector.prepend(item);
  };

  renderItems(items) {
    items.reverse().forEach((item) => {
      this.renderer(item);
    });
  }

}

