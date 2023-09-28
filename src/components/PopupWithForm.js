import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSubmitter }) {
        super(popupSelector);
        this.formSubmitter = formSubmitter;
        this.formElement = document.querySelector('.popup__form');
        this.input = document.querySelectorAll('.popup__input');
    }

    _getInputsValues() {
        this._formValues = {};
        this.input.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

   
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formSubmitter(this._getInputsValues());
            super.close();
        })
    };



    close() {
        super.close();
        this.formElement.reset();
    }
}


