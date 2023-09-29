export default class UserInfo {
    constructor(configInfo) {
        this._userName = document.querySelector(configInfo.profileNameSelector);
        this._userleJob = document.querySelector(configInfo.profileJobSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userleJob.textContent
        }
    }

    setUserInfo({name, job}) {
        this._userName.textContent = name;
        this._userleJob.textContent = job;
    }
}
