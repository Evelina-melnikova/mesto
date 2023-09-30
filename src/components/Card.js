
export default class Card {
    constructor(data, template, handleOpenPopup) {
        this._name = data.name;
        this._link = data.link;
        this._alt = this._name;
        this._template = template;
        this.handleOpenPopup = handleOpenPopup;
    }

    _getTemplate() {
        this._cardEl = this._template
            .content
            .querySelector('.elements__element-card')
            .cloneNode(true)

        return this._cardEl;
    };
    generateCard() {
        this._cardEl = this._getTemplate();
        this._cardEl.querySelector('.elements__element-item-text').textContent = this._name;
        this._cardImg = this._cardEl.querySelector('.elements__element-img')
        this._cardImg.src = this._link;
        this._cardImg.alt = this._link;
        this._setEventListeners();

        return this._cardEl;

    };

    _setEventListeners() {
        this._cardImg.addEventListener('click', () => {
            this.handleOpenPopup( this._name, this._link);;
        });

        const deleteElBtn = this._cardEl.querySelector(".elements__element-delete");
        deleteElBtn.addEventListener('click', () => {
            this._deleteEl();
        });

        const likeBtn = this._cardEl.querySelector('.elements__element-item-group');
        likeBtn.addEventListener('click', () => {
            this._likeEl();
        });
    };

    _deleteEl() {
        this._cardEl.remove();
    };

    _likeEl() {
        const likeElBtn = this._cardEl.querySelector('.elements__element-item-group');
        likeElBtn.classList.toggle('elements__element-like-active');
    };

   
  
};