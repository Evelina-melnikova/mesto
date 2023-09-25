import Popup from '../components/Popup.js';
 
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmitter}) {
        super(popupSelector);
        this.formSubmitter = formSubmitter;
        this.popup = document.querySelector(popupSelector);
        this._formElement = document.querySelector('.popup__form');
        this._input = document.querySelector('.popup__input');
    }

      _getInputsValues() {
        this._values = {};
        this._input.forEach(input => {
            this._values[input.name] = input.value
        })
        return this._values
    }

    setInputsValues(dataUser) {
        this._input.forEach(input => {
            input.value = dataUser[input.name];
        })
    }
    setEventListeners() {
        super.setEventListeners();
        this.formSubmitter.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formSubmitter(this._getInputsValues());
            super.close();
        })
    };
    
    close() {
        super.close();
        this._formElement.reset();
    }
}

 
