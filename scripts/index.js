import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js'

const popupProfile = document.querySelector('.popup_type_profile-edit');
const popupOpenButton = document.querySelector('.profile__info-edit-button');
const popupCloseButton = document.querySelector('.popup__close-button_profile-edit');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-popup-job');
const formElProf = document.querySelector('.popup__form_profile-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const template = document.querySelector('.templateEl');
const elementsContainer = document.querySelector('.elements__element');
const popupAdd = document.querySelector('.popup_type_cards-add');
const popupOpenAddButton = document.querySelector('.profile__add-button');
const closePopupButtonAdd = document.querySelector('.popup__close-button_cards-add');
const formElAdd = document.querySelector('.popup__form_cards-add');
const title = document.querySelector('.elements__element-item-text');
const photo = document.querySelector('.elements__element-img');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link')
const photoInput = document.querySelector('.popup__input_type_link');
export const popupPhoto = document.querySelector('.popup_photo');
const popupCloseButtonPhoto = document.querySelector('.popup__close-button_photo');
export const popupPhotoText = document.querySelector('.popup__photo-text');
export const popupPhotoImg = document.querySelector('.popup__open-img');
const input = document.querySelector('.popup__input');

const initialCards = [
    {
        name: 'Нижний Новгород',
        link: 'images/novgorod.png'
    },
    {
        name: 'Зеленоградск',
        link: 'images/zelenogradsk.png'
    },
    {
        name: 'Дубна',
        link: 'images/dubna.png'
    },
    {
        name: 'Москва',
        link: 'images/moscow.jpg'
    },
    {
        name: 'Сочи',
        link: 'images/Sochi.jpg'
    },
    {
        name: 'Камчатка',
        link: 'images/kamchatka.png'
    }
];

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

// const render = () => {
//     initialCards.forEach((item) => {
//         elementsContainer.append(createElByTemplate(item));
//     });
// };

// const deleteEl = (evt) => {
//     const delEl = evt.target.closest('.elements__element-card');
//     delEl.remove();
// };

// const likeBtn = (evt) => {
//     evt.target.classList.toggle('elements__element-like-active');
// };

// const createElByTemplate = (data) => {
//     const el = template.content.cloneNode(true);
//     const title = el.querySelector('.elements__element-item-text');
//     title.textContent = data.name;
//     const img = el.querySelector('.elements__element-img');
//     img.src = data.link;
//     img.alt = data.name;

//     // const deleteElBtn = el.querySelector('.elements__element-delete');
//     // deleteElBtn.addEventListener('click', deleteEl);

//     // const likeElBtn = el.querySelector('.elements__element-item-group');
//     // likeElBtn.addEventListener('click', likeBtn);


//     const openPopupPh = function () {
//         openPopup(popupPhoto);

//         popupPhotoText.textContent = data.name;
//         popupPhotoImg.src = data.link;
//         popupPhotoImg.alt = data.name;
//     }
//     img.addEventListener('click', openPopupPh);
//     return el;
// };


function closepopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupClosed = document.querySelector('.popup_opened');
        closePopup(popupClosed);
    };
};


function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closepopupEsc)
};

initialCards.forEach((item) => {
    const card = new Card(item, '.templateEl');
    const cardEl = card.generateCard();
  
    document.querySelector('.elements').append(cardEl);
  });

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
    const card = new Card({ name: titleInput.value, link: linkInput.value }, '.templateEl');
    const cardEl = card.generateCard();
    document.querySelector('.elements__element-card').prepend(cardEl);
    formElAdd.reset();
    validatorformElAdd._setSubmitButtonState();
    closeBtnPopupAdd();

    evt.target.reset();
    evt.submitter.classList.add('popup__save-button-invalid')
    evt.submitter.disabled = true;
    closeBtnPopupAdd();
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closepopupEsc)
};

// render();

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
 


