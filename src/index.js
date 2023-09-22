import '../src/pages/index.css';
import {FormValidator} from './components/FormValidator.js'
import Card from './components/Card.js'
import {initialCards} from "./components/initialCards.js";
import {popupProfile, photo, cardSelector, popupOpenButton, popupCloseButton, profileName, profileJob, formElProf, nameInput, jobInput, popupAdd, popupOpenAddButton, closePopupButtonAdd, formElAdd, titleInput, linkInput, popupPhoto, popupCloseButtonPhoto } from "./utils/constants.js"
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';


 const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button-invalid',
    inputErrorClass: 'popup__input_type_error',
    popupProfileSelector: 'popup_type_profile-edit'
};

const validatorformElProf = new FormValidator(formElProf, configValidation);
validatorformElProf.enableValidation();

const validatorformElAdd = new FormValidator(formElAdd, configValidation);
validatorformElAdd.enableValidation();

const section = new Section({
    items: initialCards,
    renderer: (item) => {
      createCard(item, template, openPopupPh);
      }
    },'.elements__element-card');


const createCard = (item, cardTemplate) => {
    const cardElement = new Card(item, cardTemplate);
    return section.addItem(section.generateCard());
  }

const popupCardAdd = new PopupWithForm( {
    popupSelector: '.popup_type_cards-add',
    formSubmitter: (data) => {
      createCard(data, template, openPopupPh);;
      popupCardAdd.close();
      }
    });

const popupImg = new PopupWithImage('.popup_photo')

function openPopupPh (name, link) {
    popupImg.open(name, link);
}

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


formElProf.addEventListener('submit', handleFormSubmitProfile);
formElAdd.addEventListener('submit', handleFormSubmitAdd);



