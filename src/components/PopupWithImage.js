import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupSelector = document.querySelector(popupSelector)
        this.popupImg = this.popupSelector.querySelector('.elements__element-img');
        this.imagePopupTitle = this.popupSelector.querySelector('.popup__photo-text')
    }
    open = (img, text) => {
        this.popupImg.src = img;
        this.popupImg.alt = text;
        this.imagePopupTitle.textContent = text;
        super.open()
    }
}
