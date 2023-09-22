export class FormValidator {
    constructor(form, configValidation) {
        this._formSelector = configValidation.formSelector
        this._inputSelector = configValidation.inputSelector
        this._inputErrorClass = configValidation.inputErrorClass
        this._submitButtonSelector = configValidation.submitButtonSelector
        this._inactiveButtonClass = configValidation.inactiveButtonClass
        this._form = form
        this._btnElement = this._form.querySelector(this._submitButtonSelector)
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
    };

    setSubmitButtonState() {
        if (this._form.checkValidity()) {
            this._btnElement.classList.remove(this._inactiveButtonClass)
            this._btnElement.removeAttribute('disabled');
        } else {
            this._btnElement.classList.add(this._inactiveButtonClass)
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
        const errorEl = this._form.querySelector(`#${inputElForm.id}-error`)
        errorEl.textContent = inputElForm.validationMessage;
        inputElForm.classList.add(this._inputErrorClass);
    };

    _hideInputError = (inputElForm) => {
        const errorEl = this._form.querySelector(`#${inputElForm.id}-error`)
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
        this._inputList.forEach((inputElForm) => {
            inputElForm.addEventListener('input', () => {
                this._checkInputValidity(inputElForm);
                this.setSubmitButtonState()
            });
        });
    };

    enableValidation () {
        this._setEventListeners()
        };
};
 