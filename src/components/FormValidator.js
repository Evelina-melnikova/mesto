
export class FormValidator {
    constructor(configValidation) {
        this._formSelector = configValidation.formSelector
        this._inputSelector = configValidation.inputSelector
        this._inputErrorClass = configValidation.inputErrorClass
        this._submitButtonSelector = configValidation.submitButtonSelector
        this._inactiveButtonClass = configValidation.inactiveButtonClass
        this._btnElement = document.querySelector(configValidation.submitButtonSelector)
        this._inputs = Array.from(document.querySelectorAll(configValidation.inputSelector))
    };

    setSubmitButtonState(isActive) {
        if (isActive) {
            this._btnElement.removeAttribute('disabled');
        } else {
            this._btnElement.setAttribute('disabled', true);
        }
    };
    _checkFormValidity = (inputElForm) => {
        if (!inputElForm.validity.valid) {
            this._showInputError(inputElForm);
        } else {
            this._hideInputError(inputElForm);
        }
    };

    _showInputError = (inputElForm) => {
        const errorEl = this._formSelector.querySelector(`#${inputElForm.id}-error`)
        errorEl.textContent = inputElForm.validationMessage;
        inputElForm.classList.add(this._inputErrorClass);
    };

    _hideInputError = (inputElForm) => {
        const errorEl = this._formSelector.querySelector(`#${inputElForm.id}-error`)
        inputElForm.classList.remove(this._inputErrorClass);
        errorEl.textContent = '';
    };

    _checkInputValidity = (inputElForm) => {
        if (!inputElForm.validity.valid) {
            this._showInputError(inputElForm);
        } else {
            this._hideInputError(inputElForm);
        }
    };

    _setEventListeners = () => {
        this._inputs.forEach((inputElForm) => {
            inputElForm.addEventListener('input', () => {
                this._checkInputValidity(inputElForm);
                this.setSubmitButtonState()
            });
        });
    };

    resetValidation() {
        this.setButtonState(false);
        this._inputs.forEach((input) => {
            this._hideInputError(input);
        });
    };

    enableValidation() {
        this._setEventListeners()
    };
};
