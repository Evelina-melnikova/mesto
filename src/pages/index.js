import './index.css';
import { apiConfig } from '../utils/constants.js';
import {
    configValidation, configInfo, template,
    nameInput, jobInput, formElProf, formElAdd,
    popupOpenEditButton, popupOpenAddButton, avatarImage, formElAvatar,
} from "../utils/constants.js"
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupDeleteCards from '../components/PopupDeleteCards.js';
import { FormValidator } from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Api from '../components/Api.js';




const api = new Api(apiConfig)

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage('.popup_photo')

const createCard = (item) => {
    const card = new Card(item, template, handleOpenPopup,
        {
            handleDeleteCard: () => {
                popupDeleteCards.setSubmit(card);
            }
        },
        {
            setLike: () => {
                api.setlikeApi(card._id)
                    .then((data) => {
                        card.likeEl();
                        card.likeCounter(data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        {
            deleteLike: () => {
                api.removeLikeApi(card._id)
                    .then((data) => {
                        card.removeLike();
                        card.likeCounter(data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        userInfo.userId
    )

    return card.generateCard()

}
function renderCard(data, template, handleOpenPopup) {
    const cardEl = createCard(data, template, handleOpenPopup);

    return cardsContainer.setItem(cardEl)
}

const cardsContainer = new Section({

    renderer: (data) => {
        renderCard(data, template, handleOpenPopup)
    }
}, '.elements');


const popupInfoProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile-edit',
    formSubmitter: (data) => {
        popupInfoProfile.setLoader();
        api.setUserInfo(data)
            .then((data) => {
                userInfo.setUserInfo(data);
                popupInfoProfile.close();
            })
            .catch((err) => {
                console.log(`Ошибка редактирования профиля: ${err}`);
            })
            .finally(() => {
                popupInfoProfile.removeLoader();
            })
    }
});


const popupCardsAdd = new PopupWithForm({
    popupSelector: '.popup_type_cards-add',
    formSubmitter: (data) => {

        popupCardsAdd.setLoader();
        api.createCard(data, template, handleOpenPopup)

            .then((data) => {
                renderCard(data, template, handleOpenPopup)
                popupCardsAdd.close();

            })
            .catch((err) => {
                console.log(`Ошибка добавления карточки: ${err}`);
            })
            .finally(() => {
                popupCardsAdd.removeLoader();
            })
    }
});

const popupAvatar = new PopupWithForm({
    popupSelector: '.popup_update-avatar',
    formSubmitter: (item) => {
        popupAvatar.setLoader();
        api.getNewAvatar(item)
            .then((item) => {
                userInfo.setUserInfo(item);
                popupAvatar.close();
            })
            .catch((err) => {
                console.log(`Ошибка при редактировании аватара: ${err}`);
            })
            .finally(() => {
                popupAvatar.removeLoader();
            })
    }
});

const popupDeleteCards = new PopupDeleteCards({
    popupSelector: '.popup_approval',
    formSubmitter: (data) => {
        api.deleteCard(data._id)

            .then(() => {
                popupDeleteCards.close();
                data.deleteEl();
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
);


function handleOpenPopup(link, name) {
    popupImage.open(link, name);
}

const validatorFormElProf = new FormValidator(configValidation, formElProf);
validatorFormElProf.enableValidation();

const validatorFormElAdd = new FormValidator(configValidation, formElAdd);
validatorFormElAdd.enableValidation();

const validatorFormAvatar = new FormValidator(configValidation, formElAvatar);
validatorFormAvatar.enableValidation()

popupOpenEditButton.addEventListener('click', () => {
    validatorFormElProf.resetValidation();
    popupInfoProfile.open();
    const userInf = userInfo.getUserInfo();
    nameInput.value = userInf.name;
    jobInput.value = userInf.about;
});

popupOpenAddButton.addEventListener('click', () => {
    validatorFormElAdd.resetValidation();
    popupCardsAdd.open();
});

avatarImage.addEventListener('click', function () {
    popupAvatar.open();
    validatorFormAvatar.resetValidation();

});


popupDeleteCards.setEventListeners()
popupInfoProfile.setEventListeners();
popupCardsAdd.setEventListeners();
popupImage.setEventListeners()
popupAvatar.setEventListeners();

Promise.all([api.getAllCards(), api.getUserInfo()])
    .then(([items, item]) => {
        userInfo.setUserInfo(item);
        cardsContainer.renderItems(items);
    })
    .catch((err) => {
        console.log(err);
    });




