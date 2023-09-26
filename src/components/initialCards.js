import novgorodImage from '../images/novgorod.png';
import zelenogradskImage from '../images/zelenogradsk.png';
import dubnaImage from '../images/dubna.png';
import moscowImage from '../images/moscow.jpg';
import sochiImage from '../images/Sochi.jpg';
import kamchatkaImage from '../images/kamchatka.png';

export const initialCards = [
    {
        name: 'Нижний Новгород',
        link: novgorodImage
    },
    {
        name: 'Зеленоградск',
        link: zelenogradskImage
    },
    {
        name: 'Дубна',

        link: dubnaImage
    },
    {
        name: 'Москва',
        link: moscowImage
    },
    {
        name: 'Сочи',
        link: sochiImage
    },
    {
        name: 'Камчатка',
        link: kamchatkaImage
    }
];

export const configInfo = {
    profileNameSelector: '.popup__input_type_name',
    profileJobSelector: '.popup__input_type_job'
}