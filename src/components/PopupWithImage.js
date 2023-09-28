import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupSelector = document.querySelector(popupSelector)
        this.popupImg = this.popupSelector.querySelector('.popup__open-img');
        this.imagePopupTitle = this.popupSelector.querySelector('.popup__photo-text')
    }
    open(link, name) {
        super.open()
        this.popupImg.src =name;
        this.popupImg.alt = link;
        this.imagePopupTitle.textContent = link;
    }
    
}
