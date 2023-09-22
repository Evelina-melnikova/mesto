import Popup from '../components/Popup.js';
 
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmitter}) {
        super(popupSelector);
        this.formSubmitter = formSubmitter;
        this.popup = document.querySelector(popupSelector);
        this._formElement = this.popup.querySelector('.popup__form');
        this._input = this.popup.querySelectorAll('.popup__input');
    }

      _getInputsValues() {
        this._values = {};
        this._input.forEach(input => {
            this._values[input.name] = input.value
        })
        return this._values
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputsValues());
            super.close();
        })
    };
    
    close() {
        super.close();
        this._formElement.reset();
    }
}

 
