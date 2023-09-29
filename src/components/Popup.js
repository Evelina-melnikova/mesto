
export default class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
        this.popupCloseButton = document.querySelector('.popup__close-button')
    };

    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupEsc)
    };

    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupEsc)
    };

    _closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    _closePopupOverlay() {
        this.popup.addEventListener('click', (evt) => {
            if (evt.currentTarget === evt.target) {
                this.close();
            };
        });
    }

    _closePopupBtn = () => {
        this.close()
    };

    setEventListeners() {
        this.popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
                this.close();
            };
        });
    };
}
