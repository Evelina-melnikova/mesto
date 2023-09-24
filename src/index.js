import '../src/pages/index.css';
import { FormValidator } from './components/FormValidator.js'
import Card from './components/Card.js'
import { initialCards } from "./components/initialCards.js";
import { configInfo, configValidation, profileName, profileJob, formElProf, nameInput, jobInput, formElAdd, titleInput, linkInput, popupOpenEditButton, popupOpenAddButton } from "./utils/constants.js"
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
const section = new Section({
    items: initialCards,
    renderer: (item) => {
        enableValidation(item, template, openPopupPh);
    }
}, '.elements__element-card');

const userInfo = new UserInfo({ nameSelector: profileName, jobSelector: profileJob });

const popupInfoprofile= new PopupWithForm({
    popupSelector: '.popup popup_type_profile-edit',
    formSubmitter: (data) => {
        userInfo.setUserInfo(data);
        popupInfoprofile.close();
    }
});

const popupCardsAdd = new PopupWithForm( {
    popupSelector: '.popup_type_cards-add',
    formSubmitter: (data) => {
      createCard(data, template, openPopupPh);;
      popupCardsAdd.close();
      }
    });

const popupImg = new PopupWithImage('.popup_photo')

const createCard = (item) => {
    const card = new Card(item, '.templateEl');
    return section.addItem(card.generateCard());
}

const createValidatorForms = (configValidation, formElement) => {
    const validator = new FormValidator(configValidation, formElement);
    const nameForm = formElement.getAttribute('name');
    formValidators[nameForm] = validator;
    validator.enableValidation();
}

const enableValidation = (configValidation) => {
    const formList = Array.from(document.querySelectorAll(configValidation.formSelector))
    formList.forEach((formElement) => {
        createValidatorForms(configValidation, formElement);
    });
  };
  enableValidation(configValidation);

  function openPopupPh(name, link) {
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
        link: linkInput.value
    }

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

popupOpenEditButton.addEventListener('click', function () {
    const { name, job } = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = job;
    formValidators['profile'].resetValidation();
    popupOpenEditButton.open();
  });
  
  popupOpenAddButton.addEventListener('click', function () {
    popupOpenAddButton.open();
    formValidators['add'].resetValidation();
  });


formElProf.addEventListener('submit', handleFormSubmitProfile);
formElAdd.addEventListener('submit', handleFormSubmitAdd);



