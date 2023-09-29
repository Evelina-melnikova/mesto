
export class FormValidator {
    constructor(configValidation, formElement) {
        this._inputSelector = configValidation.inputSelector
        this._inputErrorClass = configValidation.inputErrorClass
        this._submitButtonSelector = configValidation.submitButtonSelector
        this._inactiveButtonClass = configValidation.inactiveButtonClass
        this._formElement = formElement
        this._btnElement = this._formElement.querySelector(this._submitButtonSelector)
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    };

    setSubmitButtonState() {
        if (this._formElement.checkValidity()) {
            this._btnElement.classList.remove(this._inactiveButtonClass)
            this._btnElement.removeAttribute('disabled');
        } else {
            this.submitButtonDisabled()
        }
    };

    submitButtonDisabled() {
        this._btnElement.classList.add(this._inactiveButtonClass);
        this._btnElement.setAttribute('disabled', true);
    };

    _checkFormValidity = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);
        }
    };
    resetValidation() {
        this.setSubmitButtonState(false);
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        });
    };
    _showInputError = (input) => {
        const errorEl = this._formElement.querySelector(`#${input.id}-error`)
        errorEl.textContent = input.validationMessage;
        input.classList.add(this._inputErrorClass);
    };

    _hideInputError = (input) => {
        const errorEl = this._formElement.querySelector(`#${input.id}-error`)
        errorEl.textContent = '';
        input.classList.remove(this._inputErrorClass);
    };

    _checkInputValidity = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);
        }
    };

    _setEventListeners = () => {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                if (this._formElement.checkValidity()) {
                    this.setSubmitButtonState(true);
                } else {
                    this.setSubmitButtonState(false);
                }
            });
        });
    };


    enableValidation() {
        this._setEventListeners()
    };
};
