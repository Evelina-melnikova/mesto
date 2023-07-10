console.log("скрипт подключен");

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.info__edit-button');
const popupSave = document.querySelector ('.popup__save-button');
const popupCloseButton = document.querySelector('.popup__close-button');
let Name = document.querySelector('.info__name');
let Job = document.querySelector('.info__job');

const formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function handleFormSubmit(evt) {
    evt.preventDefault();
    let NameValue = nameInput.value;
    let JobValue = jobInput.value;
    Name.textContent = NameValue;
    Job.textContent = JobValue;
}

popupOpenButton.addEventListener("click", function() {
    popup.classList.toggle('popup_opened');
    nameInput.value = Name.textContent;
    jobInput.value = Job.textContent;
});

popupCloseButton.addEventListener("click", function(){
    popup.classList.toggle('popup_opened');
}) ;

popupSave.addEventListener("click", function(){
    popup.classList.toggle('popup_opened');

});
formElement.addEventListener('submit', handleFormSubmit);


