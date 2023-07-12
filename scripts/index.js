
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__info-edit-button');

const popupCloseButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__info-name');
let profileJob = document.querySelector('.profile__info-popup-job');

const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

const popupToggle = function (){
    popup.classList.toggle('popup_opened'); 
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let profileNameValue = nameInput.value;
    let profileJobValue = jobInput.value;
    profileName.textContent = profileNameValue;
    profileJob.textContent = profileJobValue;
    popupToggle()
}



popupOpenButton.addEventListener("click", function() {
    popupToggle()
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

popupCloseButton.addEventListener("click", function(){
    popupToggle()
}) ;



formElement.addEventListener('submit', handleFormSubmit);


