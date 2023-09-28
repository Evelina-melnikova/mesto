
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

    _checkFormValidity = (inputElForm) => {
        if (!inputElForm.validity.valid) {
            this._showInputError(inputElForm);
        } else {
            this._hideInputError(inputElForm);
        }
    };
    resetValidation() {
        this.setSubmitButtonState(false);
        this._inputList.forEach((inputElForm) => {
            this._hideInputError(inputElForm);
        });
    };
    _showInputError = (inputElForm) => {
        const errorEl = this._formElement.querySelector(`#${inputElForm.id}-error`)
        errorEl.textContent = inputElForm.validationMessage;
        inputElForm.classList.add(this._inputErrorClass);
    };

    _hideInputError = (inputElForm) => {
        const errorEl = this._formElement.querySelector(`#${inputElForm.id}-error`)
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
                if (this._formElement.checkValidity()) {
                    this.setSubmitButtonState(true);
                } else {
                    this.setSubmitButtonState(false);
                }
            });
        });
        this.inputElForm.addEventListener('submit', (evt) => {
            evt.target.reset();
        })
    };

    enableValidation() {
        this._setEventListeners()
    };
};
