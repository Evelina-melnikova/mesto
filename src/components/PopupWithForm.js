import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSubmitter }) {
        super(popupSelector);
        this.formSubmitter = formSubmitter;
        this.formElement = this.popup.querySelector('.popup__form');
        this.input = this.popup.querySelectorAll('.popup__input');
    }

    _getInputsValues() {
        this._formValues = {};
        this.input.forEach(input => {
            this._formValues[input.id] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formSubmitter(this._getInputsValues());
        })

    };



    close() {
        super.close();
        this.formElement.reset();
    }
}


