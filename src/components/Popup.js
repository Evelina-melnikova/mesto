
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupCloseButton = document.querySelector('.popup__close-button')
    };

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown',this._closePopupEsc)
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown',this._closePopupEsc)
    };

    _closePopupEsc() {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    _closePopupBtn = () =>{
        this.close()
    };

    _closePopupOverlay(){
        this._popupSelector.addEventListener('mousedown', () => {
            if (evt.currentTarget === evt.target) {
                this.close();
            }
        })
    };

    setEventListeners() {
        this._popupSelector.addEventListener('click', this._closePopupBtn);
        this._popupCloseButton.addEventListener('click', this._closePopupBtn)
    };
};