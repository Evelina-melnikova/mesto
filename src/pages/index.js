import './index.css';
import { apiConfig } from '../utils/constants.js';
import {
    configValidation, configInfo, template,
    nameInput, jobInput, formElProf, formElAdd,
    popupOpenEditButton, popupOpenAddButton, avatarImage, formElavatar
} from "../utils/constants.js"
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupDeleteCards from '../components/PopupDeleteCards.js';
import { FormValidator } from '../components/FormValidator.js'
import Card from '../components/Card.js'
import Api from './Api.js';
// import { initialCards } from "../utils/initialCards.js";




const api = new Api(apiConfig)

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage('.popup_photo')

const section = new Section({
    renderer: (item) => {
        createCard(item, template, handleOpenPopup);
    }
}, '.elements');

// const openPopupProfile = function () {
//     popupInfoProfile.open();
//     const userInf = userInfo.getUserInfo();
//     nameInput.value = userInf.name;
//     jobInput.value = userInf.about;
// }

const popupInfoProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile-edit',
    formSubmitter: (item) => {
        popupInfoProfile.close();
        popupInfoProfile.setLoader();
        api.setUserInfo(item)
            .then((item) => {
                userInfo.setUserInfo(item);
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
        validatorFormElAdd.submitButtonDisabled();
        popupCardsAdd.setLoader();
        api.createCard(data)
            .then((data) => {
                createCard(data, template, handleOpenPopup);
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

// const popupDeleteCards = new PopupDeleteCards({
//     popupSelector: '.popup_approval',
//     formSubmitter: (item) => {
//         api.deleteCard(item._id)
//             .then(() => {
//                 item.deleteCard();
//                 popupDeleteCards.close();
//             })

//             .catch(err => console.log(`Статус ошибки: ${err}`))
//     }
// });


const createCard = (item) => {
    const card = new Card(item, template, handleOpenPopup)
        // {
        //     deleteCard: () => {
        //         popupDeleteCards.submitDeleteCard(card);
        //         validatorFormAvatar.setSubmitButtonState(true);
        //     }
        // },
        // {
        //     setLike: (id, likeCounter) => {
        //         api.addLike(id)

        //             .then((data) => {
        //                 card._likeEl();
        //                 likeCounter.textContent = data.likes.length;
        //             })

        //             .catch((err) => {
        //                 console.log(err);
        //             })
        //     }
        // },
        // {
        //     deleteLike: (id, likeCounter) => {
        //         api.removeLike(id).then((data) => {
        //             card.removeLike();
        //             likeCounter.textContent = data.likes.length;
        //         })
        //             .catch((err) => {
        //                 console.log(err);
        //             })
        //     }
        // },
        // userInfo.userId
    
    // card.handleDelete();
    return section.setItem(card.generateCard());
}

function handleOpenPopup(link, name) {
    popupImage.open(link, name);
}

const validatorFormElProf = new FormValidator(configValidation, formElProf);
validatorFormElProf.enableValidation();

const validatorFormElAdd = new FormValidator(configValidation, formElAdd);
validatorFormElAdd.enableValidation();

const validatorFormAvatar = new FormValidator(configValidation, formElavatar);
validatorFormAvatar.enableValidation()





// popupOpenEditButton.addEventListener('click', openPopupProfile);
popupInfoProfile.setEventListeners();
popupCardsAdd.setEventListeners();
popupImage.setEventListeners()
popupAvatar.setEventListeners();

popupOpenEditButton.addEventListener('click', () => {
    validatorFormElProf.resetValidation();
    popupInfoProfile._getInputsValues(userInfo.getUserInfo())
    popupInfoProfile.open();

});

popupOpenAddButton.addEventListener('click', () => {
    validatorFormElAdd.resetValidation();
    popupCardsAdd.open();
});

avatarImage.addEventListener('click', function () {
    popupAvatar.open();
    validatorFormAvatar.resetValidation();

});



Promise.all([api.getAllCards(), api.getUserInfo()])
    .then(([items, item]) => {
        section.renderItems(items);
        userInfo.setUserInfo(item);
    })
    // .then((items) => {
    //     items.forEach((item) => {
    //         createCard(item);
    //     })
    // })

    .catch((err) => {
        console.log(err);
    });



api.getAllCards()
    .then((item) => {
        item.forEach((item) => {
            createCard(item);
        })
    })