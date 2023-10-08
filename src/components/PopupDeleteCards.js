import Popup from "./Popup.js";
export default class PopupDeleteCards extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._submitButton = this._popup.querySelector('.popup__save-button');
        
    }

    setSubmit(card) {
        this._card = card;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formSubmitter(this._card);
        });
    };

    setupDefaultText() {
        this._defaultButtonText = this._submitButton.textContent;
        this._submitButton.textContent = this._defaultButtonText;
    }

}