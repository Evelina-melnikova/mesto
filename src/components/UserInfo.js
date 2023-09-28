export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this.profileName = document.querySelector(nameSelector);
        this.profileJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return { name: this.profileName.textContent, job: this.profileJob.textContent }
    }

    setUserInfo(data) {
        this.profileName.textContent = data.name;
        this.profileJob.textContent = data.job;
    }
}
