
export default class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._alt = this._name;
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

    _setEventListeners() {
        const cardImg = this._template.querySelector('.elements__element-img');
        cardImg.addEventListener('click', () => {
            this._openPopupPh();
        });

        const deleteElBtn = this._template.querySelector('.elements__element-delete');
        deleteElBtn.addEventListener('click', () => {
            this._deleteEl();
        });

        const likeBtn = this._template.querySelector('.elements__element-item-group');
        likeBtn.addEventListener('click', () => {
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

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__element-item-text').textContent = this._name;
        this._element.querySelector('.elements__element-img').src = this._link;
        this._element.querySelector('.elements__element-img').alt = this._link;
        this._setEventListeners();

        return this._element;
    };
};
