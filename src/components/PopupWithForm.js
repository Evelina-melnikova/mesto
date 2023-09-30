import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSubmitter }) {
        super(popupSelector);
        this._formSubmitter = formSubmitter;
        this._formElement = this._popup.querySelector('.popup__form');
        this._input = this._popup.querySelectorAll('.popup__input');
    }

    _getInputsValues() {
        this._formValues = {};
        this._input.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmitter(this._getInputsValues());
        })

    };



    close() {
        super.close();
        this._formElement.reset();
    }
}


