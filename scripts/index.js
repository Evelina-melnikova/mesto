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
const form = document.querySelector('.popup__form');
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


const popupOpenButtonProfile = function () {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};
const openBtnPopupAdd = function () {
    openPopup(popupAdd);
};

const popupCloseButtonProfile = function () {
    closePopup(popupProfile);
};

const closeBtnPopupAdd = function () {
    closePopup(popupAdd);
};

const popupClosePh = function () {
    closePopup(popupPhoto);
};

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
    return el;
};

function popupCloseEsc (evt) {
    if ( evt.keyCode == 27){
        const popupClosed = document.querySelector('.popup_opened');
        closePopup(popupClosed);
    };
};




const popupCloseOverlay = function (evt) {
    if (evt.currentTarget === evt.target){
        closePopup(evt.target);
};
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseEsc)
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseEsc)
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    const profileNameValue = nameInput.value;
    const profileJobValue = jobInput.value;
    profileName.textContent = profileNameValue;
    profileJob.textContent = profileJobValue;
    popupCloseButtonProfile();
};

function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    elementsContainer.prepend(createElByTemplate({ name: soundInput.value, link: photoInput.value }));
    evt.target.reset();
    closeBtnPopupAdd();
};

render();

popupOpenButton.addEventListener('click', popupOpenButtonProfile);
popupCloseButton.addEventListener('click', popupCloseButtonProfile);
formElProf.addEventListener('submit', handleFormSubmit);
formElAdd.addEventListener('submit', handleFormSubmitAdd);
popupCloseButtonPhoto.addEventListener('click', popupClosePh);
popupOpenAddButton.addEventListener('click', openBtnPopupAdd);
popupCloseButtonAdd.addEventListener('click', closeBtnPopupAdd);
popupPhoto.addEventListener('click',popupCloseOverlay)
popupAdd.addEventListener('click',popupCloseOverlay)
popupProfile.addEventListener('click', popupCloseOverlay)



