
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__info-edit-button');

const popupCloseButton = document.querySelector('.popup__close-button');
let Name = document.querySelector('.profile__info-name');
let Job = document.querySelector('.profile__info-popup-job');

const formElement = document.querySelector('.name');
let nameInput = document.querySelector('.popup__name_value');
let jobInput = document.querySelector('.popup__job_value');

const popupToggle = function (){
    popup.classList.toggle('popup_opened'); 
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let NameValue = nameInput.value;
    let JobValue = jobInput.value;
    Name.textContent = NameValue;
    Job.textContent = JobValue;
    popup.classList.toggle('popup_opened');
}



popupOpenButton.addEventListener("click", function() {
    popup.classList.toggle('popup_opened');
    nameInput.value = Name.textContent;
    jobInput.value = Job.textContent;
});

popupCloseButton.addEventListener("click", function(){
    popup.classList.toggle('popup_opened');
}) ;



formElement.addEventListener('submit', handleFormSubmit);


