export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _getRequest(url, options) {
        return fetch(url, options)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('Что-то пошло не так')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getAllCards() {
        return this._getRequest(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
    };

    createCard(data) {
        return this._getRequest(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
    }

    deleteCard(data) {
        return this._getRequest(`${this._url}/cards/${data}`,
            {
                method: 'DELETE',
                headers: this._headers

            })
    }

    getNewAvatar(item) {
        return this._getRequest(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: item['avatar'],
            }),
        }
        )
    }

    setlikeApi(data) {
        return this._getRequest(`${this._url}/cards/${data}/likes `,
            {
                method: 'PUT',
                headers: this._headers

            })
    }

    removeLikeApi(data) {
        return this._getRequest(`${this._url}/cards/${data}/likes`,
            {
                method: 'DELETE',
                headers: this._headers

            })
    }

    setUserInfo(data) {
        return this._getRequest(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            }),
        }
        )
    }

    getUserInfo() {
        return this._getRequest(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })

    }
}
