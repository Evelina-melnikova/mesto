
export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
        this.popupCloseButton = document.querySelector('.popup__close-button')
    };

    open() {
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupEsc)
    };

    close() {
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupEsc)
    };

    _closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    _closePopupOverlay() {
    this.popupSelector.addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
            this.close();
        };
    });
    }

    _closePopupBtn = () => {
        this.close()
    };

    setEventListeners() {
        this.popupCloseButton.addEventListener('click', this._closePopupBtn);
    };
}
