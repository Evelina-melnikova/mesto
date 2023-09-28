import '../src/pages/index.css';
import { FormValidator } from './components/FormValidator.js'
import Card from './components/Card.js'
import { initialCards } from "./components/initialCards.js";
import { configValidation, template, formElProf, formElAdd, popupOpenEditButton, popupOpenAddButton } from "./utils/constants.js"
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';

 const section = new Section({
    items: initialCards,
    renderer: (item) => {
        createCard(item, template, handleOpenPopup);
    }
}, '.elements');


const userInfo = new UserInfo({ nameSelector: '.popup__input_type_name', jobSelector: '.popup__input_type_job' });

const popupInfoProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile-edit',
    formSubmitter: (data) => {
        userInfo.setUserInfo(data);
        popupInfoProfile.close();
    }
});
popupInfoProfile.setEventListeners();

const popupCardsAdd = new PopupWithForm({
    popupSelector: '.popup_type_cards-add',
    formSubmitter: (data) => {
        createCard(data);
        validatorformElAdd.submitButtonDisabled();

        popupCardsAdd.close();
    }
});
popupCardsAdd.setEventListeners();


const popupImage = new PopupWithImage('.popup_photo')

  function handleOpenPopup(link, name) {
    popupImage.open(link, name);
  }

  const createCard = (item) => {
    const card = new Card(item, '.templateEl', handleOpenPopup);
    return card.generateCard();
}

initialCards.forEach((item) => {
    createCard(item, '.templateEl')
    document.querySelector('.elements').append(createCard(item));
});

popupOpenEditButton.addEventListener('click', () => {
    validatorformElProf.resetValidation();
    popupInfoProfile._getInputsValues(userInfo.getUserInfo())
    popupInfoProfile.open();
});

popupOpenAddButton.addEventListener('click', () => {
    validatorformElAdd.resetValidation();
    popupCardsAdd.open();
});
 

const validatorformElProf = new FormValidator(configValidation, formElProf);
validatorformElProf.enableValidation();

const validatorformElAdd = new FormValidator(configValidation, formElAdd);
validatorformElAdd.enableValidation();





