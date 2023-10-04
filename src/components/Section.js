export default class Section {
  constructor({ items, renderer }, formSelector) {
    this._items = items;
    this._renderer = renderer;
    this._formSelector = document.querySelector(formSelector);
  };

  setItem(item) {
    this._formSelector.prepend(item);
  };

  // renderItems() {
  //   this._items.forEach((item) => {
  //     this._renderer(item);
  //   });
  // }
}