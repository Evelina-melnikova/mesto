
export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
    };

    open() {
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown',this._closePopupesc)
    };

    close() {
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown',this._closePopupesc)
    };

    _closePopupesc() {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    _closePopupBtn(){
        this.close()
    };

    _closPopupOverlay(){
        this.popupSelector.addEventListener('mousedown', () => {
            if (evt.currentTarget === evt.target) {
                this.close();
            }
        })
    };

    setEventListeners() {
        this.popup.addEventListener('click', this._closePopupBtn);
        this.popupSelector.addEventListener('mousedown', this._closPopupOverlay);
    };
};