import { popupPhoto, openPopup, popupPhotoImg, popupPhotoText } from './index.js'


export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._alt = data.name;
        this._templateSelector = templateSelector;

    }

    _getTemplate() {
        const cardEl = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.elements__element-card')
            .cloneNode(true)

            
        return cardEl;

    }       


    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.elements__element-item-text').textContent = this._name;
        this._element.querySelector('.elements__element-img').src = this._link;



        return this._element;
    };

    _setEventListeners() {

        const cardImg = this._element.querySelector('.elements__element-img');
        cardImg.addEventListener('click', () => {
            this._openPopupPh();
        });

        const deleteElBtn = this._element.querySelector('.elements__element-delete');
        deleteElBtn.addEventListener('click', () => {
            this._deleteEl();
        });

        const likeBtn = this._element.querySelector('.elements__element-item-group');
        likeBtn.addEventListener('click', () => {
            this._likeEl();
        });
    };

    _openPopupPh() {
        openPopup(popupPhoto);
        popupPhotoImg.src = this._link;
        popupPhotoImg.alt = this._name;
        popupPhotoText.textContent = this._name;
    }
    
    _deleteEl() {
        this._element.remove();
    }

    _likeEl() {
        const likeElBtn = this._element.querySelector('.elements__element-item-group');
        likeElBtn.classList.toggle('elements__element-like-active');
    }

}
