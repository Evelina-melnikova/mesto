// export default class Api {
//     constructor({ url, headers }) {
//         this._url = url;
//         this._headers = headers;
//     }

//     // _checkRes(res) {
//     //     return res.ok ? res.json() : Promise.reject
//     // }

//     _getRequest(url, options) { 
//         return fetch (url, options)
//         .then((res) => {
//             if (res.ok){
//                 return res.json
//             }

//             throw new Error('Что-то пошло не так')
//         })
//         .catch((err) => {
//             console.log(err)
//         })

//     }

//     getAllCards() {
//         return this._getRequest(`${this._url}/cards`, {
//             method: 'GET',
//             headers: this._headers
//         })
            
//     };

//     getNewAvatar(item) {
//         return this._getRequest(`${this._url}/users/me/avatar`, {
//             method: 'PATCH',
//             headers: this._headers,
//             body: JSON.stringify({
//                 avatar: item['avatar'],
//             }),
//         }
//         )
//     }

//     createCard(data) {
//         return this._getRequest(`${this._url}/cards`, {
//             method: 'POST',
//             headers: this._headers,
//             body: JSON.stringify({
//                 name: data.name,
//                 link: data.link
//             })
//         })
//     }



//     addLike(id) {
//         return this._getRequest(`${this._url}/cards/${id}/likes `,
//             {
//                 method: 'PUT',
//                 headers: this._headers

//             })
//     }

//     removeLike(id) {
//         return this._getRequest(`${this._url}/cards/${id}/likes `,
//             {
//                 method: 'DELETE',
//                 headers: this._headers

//             })
//     }


//     setUserInfo(item) {
//         return this._getRequest(`${this._url}/users/me`, {
//             method: 'PATCH',
//             headers: this._headers,
//             body: JSON.stringify({
//                 name: item.nameInput,
//                 about: item.about
//             }),
//         }
//         )
//     }

//     getUserInfo() {
//         return this._getRequest(`${this._url}/users/me`, {
//             method: 'GET',
//             headers: this._headers
//         })

//     }
//     deleteCard(id) {
//         return this._getRequest(`${this._url}/cards/${id}`,
//             {
//                 method: 'DELETE',
//                 headers: this._headers

//             })
//     }
// }
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

    getNewAvatar (data) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: data.avatar,
        }),
          }
        )
      }

    createCard(data) {
        return fetch (`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
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