
export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
        this.popupCloseButton = document.querySelector('.popup__close-button')
    };

    open() {
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown',this._closePopupEsc)
    };

    close() {
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown',this._closePopupEsc)
    };

    _closePopupEsc() {
        if (evt.key === 'Escape') {
            this.close(evt.currentTarget.querySelector('.popup_opened'));
                };
    };

    _closePopupBtn = () =>{
        this.close()
    };

    _closePopupOverlay(){
        this.popupSelector.addEventListener('mousedown', () => {
            if (evt.currentTarget === evt.target) {
                this.close();
            }
        })
    };

    setEventListeners() {
        this.popupSelector.addEventListener('click', this._closePopupOverlay);
        this.popupCloseButton.addEventListener('click', this._closePopupBtn)
    };
};