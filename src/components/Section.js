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
    this._initialCards.forEach((element) => {
      this.setItem(this._renderer(element));
    });
  }
}