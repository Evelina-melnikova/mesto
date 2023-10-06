export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkRes(res) {
        return res.ok ? res.json() : Promise.reject
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkRes)

            .catch((err) => {
                console.log(err)
            })
    }

    getNewAvatar (item) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: item['avatar-link'],
          }),
          }
        )
      }

    createCard(item) {
        return fetch (`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(item)
        })
    }



    addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes `,
            {
                method: 'PUT',
                headers: this._headers

            })
            .then(this._checkRes);
    }

    removeLike(id) {
        return fetch(`${this._url}/cards/${id}/likes `,
            {
                method: 'DELETE',
                headers: this._headers

            })
            .then(this._checkRes);
    }


    setUserInfo (item) {
        return fetch (`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              name: item.name,
              about: item.about
            }),
          }
        )
      }

      
    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`,
            {
                method: 'DELETE',
                headers: this._headers

            })
            .then(this._checkRes);
    }

    getUserInfo () {
        return fetch (`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkRes);

      }
}
