import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js'
import {initialCards} from "./initialCards.js";
import {popupProfile, popupOpenButton, popupCloseButton, profileName, profileJob, formElProf, nameInput, jobInput, popupAdd, popupOpenAddButton, closePopupButtonAdd, formElAdd, titleInput, linkInput, popupPhoto, popupCloseButtonPhoto } from "./constants.js"

 const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button-invalid',
    inputErrorClass: 'popup__input_type_error',
};

const openButtonPopupProfile = function () {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

const openBtnPopupAdd = function () {
    openPopup(popupAdd);
};

const closeButtonPopupProfile = function () {
    closePopup(popupProfile);
};

const closeBtnPopupAdd = function () {
    closePopup(popupAdd);
};

const closePopupPh = function () {
    closePopup(popupPhoto);
};

const validatorformElProf = new FormValidator(formElProf, configValidation);
validatorformElProf.enableValidation();

const validatorformElAdd = new FormValidator(formElAdd, configValidation);
validatorformElAdd.enableValidation();

const closeOverlayPopup = function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target);
    };
}; 

const createCard = (item) => {
    const card = new Card(item, '.templateEl');
    return card.generateCard();
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupClosed = document.querySelector('.popup_opened');
        closePopup(popupClosed);
    };
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)
};

function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    const profileNameValue = nameInput.value;
    const profileJobValue = jobInput.value;
    profileName.textContent = profileNameValue;
    profileJob.textContent = profileJobValue;
    closeButtonPopupProfile();
};


function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    const cardsInfo = {
    name: titleInput.value,
    link: linkInput.value }
    createCard(cardsInfo, '.templateEl');
    document.querySelector('.elements').prepend(createCard(cardsInfo));
    formElAdd.reset();
    validatorformElAdd.setSubmitButtonState();
    closeBtnPopupAdd();
};

initialCards.forEach((item) => {
    createCard(item, '.templateEl')
    document.querySelector('.elements').append(createCard(item));
  });

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc)
};

popupOpenButton.addEventListener('click', openButtonPopupProfile);
popupCloseButton.addEventListener('click', closeButtonPopupProfile);
formElProf.addEventListener('submit', handleFormSubmitProfile);
formElAdd.addEventListener('submit', handleFormSubmitAdd);
popupCloseButtonPhoto.addEventListener('click', closePopupPh);
popupOpenAddButton.addEventListener('click', openBtnPopupAdd);
closePopupButtonAdd.addEventListener('click', closeBtnPopupAdd);
popupPhoto.addEventListener('click', closeOverlayPopup)
popupAdd.addEventListener('mousedown', closeOverlayPopup)
popupProfile.addEventListener('mousedown', closeOverlayPopup)
 


