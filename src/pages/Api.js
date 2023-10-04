export default class Api {
    constructor(url, headers){
        this._url = url;
        this._headers = headers;
    }
    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
            throw new Error ('Что-то пошло не так...')
        })
        .catch((err) => {
            console.log(err)
        })
    };


    createCard (data) {
        return this._getRequest(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
    }


    deleteCard(){

    }
}