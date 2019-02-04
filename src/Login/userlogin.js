const {ipcRenderer} = window.require('electron');

const fakeuser = {
    username:'asim',
    password:'asim'
}

class Login {
    constructor(username,password){
        this.username = username;
        this.password = password;
        this.login()
    }
    login(){
        if(this.username === fakeuser.username && this.password === fakeuser.password){
            this.openDashboard();
        }
        else{
            this.showError(`Username/password error`)
        }
    }
    showError(error){
        let toastHTML = `<span>${error}</span>`;
        M.toast({html: toastHTML, classes: 'small-toast'});
    }
    openDashboard(){
        ipcRenderer.send('open:dashboard');
    }
}

module.exports = Login;