import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__open-img');
        this._imagePopupTitle = this._popup.querySelector('.popup__photo-text')
    }
    open(link, name) {
        super.open()
        this._popupImg.src = name;
        this._popupImg.alt = link;
        this._imagePopupTitle.textContent = link;
    }
    
}
