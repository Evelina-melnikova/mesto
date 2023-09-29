import '../src/pages/index.css';
import { FormValidator } from './components/FormValidator.js'
import Card from './components/Card.js'
import { initialCards } from "./components/initialCards.js";
import { configValidation, configInfo, template, nameInput, jobInput, formElProf, formElAdd, popupOpenEditButton, popupOpenAddButton } from "./utils/constants.js"
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

const userInfo = new UserInfo(configInfo);

const openPopupProfile = function () {
    popupInfoProfile.open();
    const userInf = userInfo.getUserInfo();
    nameInput.value = userInf.name;
    jobInput.value = userInf.job;
}


const popupInfoProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile-edit',
    formSubmitter: (item) => {
        userInfo.setUserInfo(item);
        popupInfoProfile.close();
    }

});

popupInfoProfile.setEventListeners();

const popupCardsAdd = new PopupWithForm({
    popupSelector: '.popup_type_cards-add',
    formSubmitter: (item) => {
        createCard(item);
        validatorformElAdd.submitButtonDisabled();
        popupCardsAdd.close();
        console.log(item)
    }
});
popupCardsAdd.setEventListeners();


const popupImage = new PopupWithImage('.popup_photo')
popupImage.setEventListeners()


function handleOpenPopup(link, name) {
    popupImage.open(link, name);
}

const createCard = (item) => {
    const card = new Card(item, '.templateEl', handleOpenPopup);
    const cardElement = card.generateCard();
    section.setItem(cardElement);
}

// initialCards.forEach((item) => {
//     document.querySelector('.elements').append(createCard(item));
// });



section.renderItems();

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


popupOpenEditButton.addEventListener('click', openPopupProfile);





