
const popupProfile = document.querySelector('.popup_type_profile-edit');
const popupOpenButton = document.querySelector('.profile__info-edit-button');
const popupCloseButton = document.querySelector('.popup__close-button_profile-edit');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-popup-job');
const formElement = document.querySelector('.popup__form_profile-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    const profileNameValue = nameInput.value;
    const profileJobValue = jobInput.value;
    profileName.textContent = profileNameValue;
    profileJob.textContent = profileJobValue;
    popupCloseButtonProfile();
}

const popupOpenButtonProfile = function () {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

const popupCloseButtonProfile = function () {
    closePopup(popupProfile);
}


popupOpenButton.addEventListener('click', popupOpenButtonProfile);
popupCloseButton.addEventListener('click', popupCloseButtonProfile);
formElement.addEventListener('submit', handleFormSubmit);















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

const template = document.querySelector('.templateEl')
const elementsContainer = document.querySelector('.elements__element');
const popupAdd = document.querySelector('.popup_type_cards-add');
const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseButtonAdd = document.querySelector('.popup__close-button_cards-add');
const formElAdd = document.querySelector('.popup__form_cards-add');
const sound = document.querySelector('.elements__element-item-text');
const photo = document.querySelector('.elements__element-img');
const soundInput = document.querySelector('.popup__input_type_sound');
const photoInput = document.querySelector('.popup__input_type_link');

const popupPhoto = document.querySelector('.popup_photo');
const popupCloseButtonPhoto = document.querySelector('.popup__close-button_photo');
const popupPhotoText = document.querySelector('.popup__photo-text');
const popupPhotoImg = document.querySelector('.popup__open-img');

const render = () => {
    initialCards.forEach((item) => {
        elementsContainer.append(createElByTemplate(item));
    });
};
const deleteEl = (evt) => {
    const delEl = evt.target.closest('.elements__element-card');
    delEl.remove();
};

const likeBtn = (evt) => {
    evt.target.classList.toggle('elements__element-like-active');
};

const openBtnPopupAdd = function () {
    openPopup(popupAdd);
}
const closeBtnPopupAdd = function () {
    closePopup(popupAdd);
}
const createElByTemplate = (data) => {
    const el = template.content.cloneNode(true);
    const title = el.querySelector('.elements__element-item-text');
    title.textContent = data.name;
    const img = el.querySelector('.elements__element-img');
    img.src = data.link;

    const deleteElBtn = el.querySelector('.elements__element-delete');
    deleteElBtn.addEventListener('click', deleteEl);

    const likeElBtn = el.querySelector('.elements__element-item-group');
    likeElBtn.addEventListener('click', likeBtn);

    const popupOpenButtonPhoto = el.querySelector('.elements__element-img');

    const popupOpenPh = function () {
        openPopup(popupPhoto);

        popupPhotoText.textContent = data.name;
        popupPhotoImg.src = data.link;
    }
    popupOpenButtonPhoto.addEventListener('click', popupOpenPh);
    
    const popupClosePh = function () {
        closePopup(popupPhoto);
      }
      
      popupCloseButtonPhoto.addEventListener('click', popupOpenPh);
      popupCloseButtonPhoto.addEventListener('click', popupClosePh);

    return el;
}




function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    elementsContainer.prepend(createElByTemplate({ name: soundInput.value, link: photoInput.value }));
    evt.target.reset();
    closeBtnPopupAdd();
}


render()
formElAdd.addEventListener('submit', handleFormSubmitAdd);
popupOpenAddButton.addEventListener('click', openBtnPopupAdd);
popupCloseButtonAdd.addEventListener('click', closeBtnPopupAdd);






