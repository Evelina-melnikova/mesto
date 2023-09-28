export default class Section {
  constructor({ items, renderer }, formSelector) {
    this._initialCards = items;
    this._renderer = renderer;
    this._formSelector = document.querySelector(formSelector);
  };

  setItem(element) {
    this._formSelector.append(element);
  };

  renderItems() {
    this._initialCards.forEach((item) => {
      this._renderer(item);
    });
  }
}