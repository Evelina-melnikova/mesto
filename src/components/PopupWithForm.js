import Popup from '../components/Popup.js';
 
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmitter}) {
        super(popupSelector);
        this.formSubmitter = formSubmitter;
        this.popup = document.querySelector(popupSelector);
        this.formElement = document.querySelector('.popup__form');
        this.input = document.querySelector('.popup__input');
    }

      _getInputsValues() {
        this.values = {};
        this.input.forEach(input => {
            this.values[input.name] = input.value
        })
        return this.values
    }

    setInputsValues(dataUser) {
        this.input.forEach(input => {
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
        this.formElement.reset();
    }
}

 
