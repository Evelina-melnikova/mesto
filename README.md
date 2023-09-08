# Проект: Место

https://evelina-melnikova.github.io/mesto/

---
### Основной темой проекта является путешествие по России, есть примеры красивых мест, а также добавлены изображения для каждого из них.

___
*В проекте использовался язык программирования JavaScript, который помог осуществить следующие функции:*

* возможность изменять информацию о себе;
* отмечать понравившиеся места лайками;
* возможность добавления новых мест с названиями и изображениями;
* возможность удалять ненужные карточки;
* лайв-валидация полей для ввода данных;
* реализовано закрытие модальных окон на клавиши esc, enter и нажатием на оverlay: 

```
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupClosed = document.querySelector('.popup_opened');
        closePopup(popupClosed);
    };
};
```  

----

```
const closeOverlayPopup = function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target);
    };
}; 
```
----
```
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)
};
```
---- 