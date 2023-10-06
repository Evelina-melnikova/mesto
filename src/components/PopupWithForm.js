import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSubmitter }) {
        super(popupSelector);
        this._formSubmitter = formSubmitter;
        this._formElement = this._popup.querySelector('.popup__form');
        this._input = this._popup.querySelectorAll('.popup__input');
        this._button = this._popup.querySelector('.popup__save-button');
        this._buttonText = this._button.textContent
    }

    _getInputsValues() {
        this._formValues = {};
        this._input.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setInputValues(data) {
        this._input.forEach(input => {
          input.value = data[input.name];
        });
      }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmitter(this._getInputsValues());
        })

    }

    setLoader() {
        this._button.textContent = 'Сохранение...';
    }

    removeLoader() {
        this._button.textContent = this._buttonText;
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}


