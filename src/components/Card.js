
export default class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }

    _getTemplate() {
        const cardEl = document
            .querySelector(this._template)
            .content
            .querySelector('.elements__element-card')
            .cloneNode(true)

        return cardEl;
    };
    generateCard() {
        this._elementText = this._template.querySelector('.popup__photo-text');
        this._elementText.textContent = this._name;
        this._cardImg = this._template.querySelector('.elements__element-img');
        this._cardImg.src = this._link;
        this._cardImg.alt = this._link;
        this._setEventListeners();

        return this._template;
    };

    _setEventListeners() {
        this._cardImg.addEventListener('click', () => {
            this.openPopupPh();
        });

        this._deleteElBtn.addEventListener('click', () => {
            this._deleteEl();
        });

        this._likeBtn.addEventListener('click', () => {
            this._likeEl();
        });

    };

    _deleteEl() {
        this._template.remove();
    };

    _likeEl() {
        const likeElBtn = this._template.querySelector('.elements__element-item-group');
        likeElBtn.classList.toggle('elements__element-like-active');
        };
};
