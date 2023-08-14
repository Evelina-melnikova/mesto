
const formProf = document.querySelector('.popup__form');
const nameInputForm = formProf.querySelector('#name');
const jobInputForm = formProf.querySelector('#job');
const formCards = document.querySelector('.popup__form_cards-add')
const soundInputForm = formCards.querySelector('#sound');
const linkInputForm = formCards.querySelector('#link');
const submitBtnProf = document.querySelector('.popup__save-button_profile-edit');
const submitBtnCards = document.querySelector('.popup__save-button_cards-add');

const setSubmitButtonStateProf = (isActive) => {
    if (isActive){
        submitBtnProf.removeAttribute('disabled');
        submitBtnProf.classList.add('popup__save-button');
        submitBtnProf.classList.remove('popup__save-button-invalid');
    } else {
        submitBtnProf.setAttribute('disabled', true)
        submitBtnProf.classList.add('popup__save-button-invalid');
        submitBtnProf.classList.remove('popup__save-button');
    }
}

const setSubmitButtonStateCards = (isActive) => {
    if (isActive){
        submitBtnCards.removeAttribute('disabled');
        submitBtnCards.classList.remove('popup__save-button-invalid');
        submitBtnCards.classList.add('popup__save-button');
    } else {
        submitBtnCards.setAttribute('disabled', true)
        submitBtnCards.classList.add('popup__save-button-invalid');
        submitBtnCards.classList.remove('popup__save-button');
    }
}

const validateInput = (inputElForm) => {
    var errorEl = document.querySelector(`#${inputElForm.id}-error`)
    
    
    if (inputElForm.checkValidity()){
        errorEl.textContent ='';
    } else {
        errorEl.textContent = inputElForm.validationMessage;
    }
    
    if (formProf.checkValidity()){
        setSubmitButtonStateProf(true)
    } else {
        setSubmitButtonStateProf(false)
    }

    if (formCards.checkValidity()){
        setSubmitButtonStateCards(true)
    } else {
        setSubmitButtonStateCards(false)
    }


}

const validateFormProf = (evt) => {
    evt.preventDefault();
    validateInput(nameInputForm)
    validateInput(jobInputForm)
    if (formProf.checkValidity()) {
        console.log('valid')
        formProf.reset()
    } else {
        console.log('not valid')
    }
}
const validateFormCards = (evt) => {
    evt.preventDefault();
    validateInput(soundInputForm)
    validateInput(linkInputForm)
    if (formCards.checkValidity()) {
        console.log('valid')
        formCards.reset()

    } else {
        console.log('not valid')
    }
}
const validateFormOnProf = (evt) => {
 validateInput(evt.target);
}
const validateFormOnCards = (evt) => {
    validateInput(evt.target);
}


formProf.addEventListener('submit', validateFormProf);
formProf.addEventListener('input', validateFormOnProf)
formCards.addEventListener('submit', validateFormCards);
formCards.addEventListener('input', validateFormOnCards)




