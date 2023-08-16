const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button-invalid',
    inputErrorClass: 'popup__input_type_error',
};

const setSubmitButtonState = (form, btnElement, configValidation) => {
    if (form.checkValidity()) {
        btnElement.classList.remove(configValidation.inactiveButtonClass)
        btnElement.removeAttribute('disabled');
    } else {
        btnElement.classList.add(configValidation.inactiveButtonClass)
        btnElement.setAttribute('disabled', true);
    }
};


const checkFormValidity = (form, btnElement) => {
    if (form.checkValidity()) {
        setSubmitButtonState(true, form, btnElement);
    } else {
        setSubmitButtonState(false, form, btnElement);
    }
};

const showInputError = (inputElForm, configValidation) => {
    var errorEl = document.querySelector(`#${inputElForm.id}-error`)
    errorEl.textContent = inputElForm.validationMessage;
    inputElForm.classList.add(configValidation.inputErrorClass);
}
const hideInputError = (inputElForm, configValidation) => {
    var errorEl = document.querySelector(`#${inputElForm.id}-error`)
    errorEl.textContent = '';
    inputElForm.classList.remove(configValidation.inputErrorClass);
}

const checkInputValidity = (inputElForm, form) => {
    if (!inputElForm.validity.valid) {
        showInputError(inputElForm, configValidation);
    } else {
        hideInputError(inputElForm, configValidation);
    }
}


const setEventListeners = (form, configValidation) => {
    const inputList = Array.from(form.querySelectorAll(configValidation.inputSelector))
    const btnElement = form.querySelector(configValidation.submitButtonSelector)
    inputList.forEach((inputElForm) => {
        inputElForm.addEventListener('input', function () {
            checkInputValidity(inputElForm);
            setSubmitButtonState(form, btnElement, configValidation)
        });
    });
};


const enableValidation = (configValidation) => {
    const formList = Array.from(document.querySelectorAll(configValidation.formSelector));
    formList.forEach((form, inputSelector, submitButtonSelector) => {
        setEventListeners(form, configValidation)
    })
}

enableValidation(configValidation)


