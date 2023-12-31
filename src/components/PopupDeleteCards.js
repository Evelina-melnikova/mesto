import Popup from "./Popup.js";
export default class PopupDeleteCards extends Popup {
    constructor({formSubmitter,popupSelector}) {
        super(popupSelector);
        this.formSubmitter = formSubmitter   
    }

    setSubmit(card) {
        super.open();
        this._card = card;
    }
      
    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formSubmitter(this._card);
        });
    };

}