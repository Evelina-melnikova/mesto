import '../src/pages/index.css';
import { FormValidator } from './components/FormValidator.js'
import Card from './components/Card.js'
import { initialCards } from "./components/initialCards.js";
import { configInfo,popup, configValidation, profileName, profileJob, formElProf, nameInput, jobInput, formElAdd, titleInput, linkInput, popupOpenEditButton, popupOpenAddButton } from "./utils/constants.js"
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';

 const section = new Section({
    items: initialCards,
    renderer: (item) => {
        enableValidation(item, template, handleOpenPopup);
    }
}, '.elements');

const userInfo = new UserInfo({ nameSelector: profileName, jobSelector: profileJob });

const popupInfoprofile = new PopupWithForm({
    popupSelector: '.popup_type_profile-edit',
    formSubmitter: (data) => {
        userInfo.setUserInfo(data);
        popupInfoprofile.close();
    }
});

const popupCardsAdd = new PopupWithForm({
    popupSelector: '.popup_type_cards-add',
    formSubmitter: (data) => {
        createCard(data, template, handleOpenPopup);;
        popupCardsAdd.close();
    }
});

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

formElProf.addEventListener('click', () => {
    validatorformElProf.resetValidation();
    popupInfoprofile.setInputsValues(userInfo.getUserInfo())
    popupInfoprofile.open();
});

popupOpenAddButton.addEventListener('click', () => {
    validatorformElAdd.resetValidation();
    popupCardsAdd.open();
});
 

const validatorformElProf = new FormValidator(formElProf);
validatorformElProf.enableValidation();

const validatorformElAdd = new FormValidator(formElAdd);
validatorformElAdd.enableValidation();





