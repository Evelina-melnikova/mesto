export class FormValidator {
    constructor(form, configValidation) {
        this._formSelector = configValidation._formSelector
        this._inputSelector = configValidation._inputSelector
        this._inputErrorClass = configValidation._inputErrorClass
        this._submitButtonSelector = configValidation._submitButtonSelector
        this._inactiveButtonClass = configValidation._inactiveButtonClass
        this._form = form
        this._btnElement = this._form.querySelector(this._submitButtonSelector)
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
    }

    _setSubmitButtonState() {
        if (this._form.checkValidity()) {
            this._btnElement.classList.remove(this._inactiveButtonClass)
            this._btnElement.removeAttribute('disabled');
        } else {
            this._btnElement.classList.add(this._inactiveButtonClass)
            this._btnElement.setAttribute('disabled', true);
        }
    }
    _checkFormValidity = (inputElForm) => {
        if (!inputElForm.validity.valid) {
            this._showInputError(inputElForm);
        } else {
            this._hideInputError(inputElForm);
        }
    };

    _showInputError = (inputElForm) => {
        const errorEl = this._document.querySelector(`#${inputElForm.id}-error`)
        errorEl.textContent = inputElForm.validationMessage;
        inputElForm.classList.add(this._inputErrorClass);
    }

    _hideInputError = (inputElForm) => {
        const errorEl = this._document.querySelector(`#${inputElForm.id}-error`)
        inputElForm.classList.remove(this._inputErrorClass);
        errorEl.textContent = '';
    }

    _checkInputValidity = (inputElForm) => {
        if (!inputElForm.validity.valid) {
            this._showInputError(inputElForm);
        } else {
            this._hideInputError(inputElForm);
        }
    };

    _setEventListeners = () => {
        this._inputList.forEach((inputElForm) => {
            inputElForm.addEventListener('input', () => {
                this._checkInputValidity(inputElForm);
                this._setSubmitButtonState()
            });
        });
    };

    enableValidation () {
        this._setEventListeners()
        };

};
 