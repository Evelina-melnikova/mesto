export default class UserInfo {
    constructor(configInfo) {
        this._userName = document.querySelector(configInfo.profileNameSelector);
        this._userJob = document.querySelector(configInfo.profileJobSelector);
        this._profileAvatar = document.querySelector(configInfo.avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userJob.textContent,
            avatar: this._profileAvatar.src
        }
    }

    setUserInfo({name, about, avatar, _id}) {
        this._userName.textContent = name;
        this._userJob.textContent = about;
        this._profileAvatar.src = avatar;
        this.userId = _id;
    }
}
