
export default class Card {
    constructor(data, template, handleOpenPopup, { handleDeleteCard }, { setLike }, { deleteLike }, userId) {
        this._name = data.name;
        this._data = data;
        this._link = data.link;
        this._alt = this._name;
        this._setLike = setLike;
        this._template = template;
        this._id = data._id;
        this._likes = data.likes;
        this._deleteLike = deleteLike
        this._owner = data.owner;
        this._handleOpenPopup = handleOpenPopup;
        this._handleDeleteCard = handleDeleteCard
        this.userId = userId;
    }

    _getTemplate() {
        this._cardEl = this._template
            .content
            .querySelector('.elements__element-card')
            .cloneNode(true)

        const deleteBtn = this._cardEl.querySelector('.elements__element-delete');
        if (this._owner._id !== this.userId) {
            deleteBtn.style.display = 'none';
        }
        return this._cardEl;

    };

    generateCard() {
        this._cardEl = this._getTemplate();
        this._cardEl.querySelector('.elements__element-item-text').textContent = this._name;
        this._cardImg = this._cardEl.querySelector('.elements__element-img')
        this._cardImg.src = this._link;
        this._cardImg.alt = this._link;
        this._counter = this._cardEl.querySelector('.elements__element-like-counter');
        this.likeCounter(this._data);

        this._setEventListeners();

        const likeBtn = this._cardEl.querySelector('.elements__element-item-group');
        this._likes.forEach(like => {
            if (like._id === this.userId) {
                likeBtn.classList.add('elements__element-like-active');
            }
        })
        return this._cardEl;
    };

    _setEventListeners() {
        this._cardImg.addEventListener('click', () => {
            this._handleOpenPopup(this._name, this._link);
        });

        const likeBtn = this._cardEl.querySelector('.elements__element-item-group');
        likeBtn.addEventListener('click', () => {
            if (likeBtn.classList.contains('elements__element-like-active')) {
                this._deleteLike()
            } else this._setLike()
        });

        const deleteBtn = this._cardEl.querySelector('.elements__element-delete');
        deleteBtn.addEventListener('click', () => {
            this._handleDeleteCard();
        });


    }

    _deleteEl() {
        this._cardEl.remove();
    };

    _likeEl() {
        const likeBtn = this._cardEl.querySelector('.elements__element-item-group');
        likeBtn.classList.add('elements__element-like-active');
    };

    _removeLike() {
        const likeBtn = this._cardEl.querySelector('.elements__element-item-group');
        likeBtn.classList.remove('elements__element-like-active');
    }

    likeCounter(data) {
        this._likes = data.likes;
        this._counter.textContent = this._likes.length;

    }
};