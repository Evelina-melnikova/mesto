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
const photoInput = document.querySelector('.popup__input_type_link');
const popupPhoto = document.querySelector('.popup_photo');
const popupCloseButtonPhoto = document.querySelector('.popup__close-button_photo');
const popupPhotoText = document.querySelector('.popup__photo-text');
const popupPhotoImg = document.querySelector('.popup__open-img');
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


const openButtoPopupnProfile = function () {
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
    img.alt = data.name;

    const deleteElBtn = el.querySelector('.elements__element-delete');
    deleteElBtn.addEventListener('click', deleteEl);

    const likeElBtn = el.querySelector('.elements__element-item-group');
    likeElBtn.addEventListener('click', likeBtn);


    const openPopupPh = function () {
        openPopup(popupPhoto);

        popupPhotoText.textContent = data.name;
        popupPhotoImg.src = data.link;
    }
    img.addEventListener('click', openPopupPh);
    return el;
};

function closepopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupClosed = document.querySelector('.popup_opened');
        closePopup(popupClosed);
    };
};




const closeOverlayPopup = function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target);
    };
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closepopupEsc)
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closepopupEsc)
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
    elementsContainer.prepend(createElByTemplate({ name: titleInput.value, link: photoInput.value }));
    evt.target.reset();
    evt.submitter.classList.add('popup__save-button-invalid')
    evt.submitter.disabled = true;
    closeBtnPopupAdd();
};

render();

popupOpenButton.addEventListener('click', openButtoPopupnProfile);
popupCloseButton.addEventListener('click', closeButtonPopupProfile);
formElProf.addEventListener('submit', handleFormSubmitProfile);
formElAdd.addEventListener('submit', handleFormSubmitAdd);
popupCloseButtonPhoto.addEventListener('click', closePopupPh);
popupOpenAddButton.addEventListener('click', openBtnPopupAdd);
closePopupButtonAdd.addEventListener('click', closeBtnPopupAdd);
popupPhoto.addEventListener('click', closeOverlayPopup)
popupAdd.addEventListener('mousedown', closeOverlayPopup)
popupProfile.addEventListener('mousedown', closeOverlayPopup)



