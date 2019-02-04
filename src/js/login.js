
window.$ = window.jQuery = require('../assets/jquery.min.js');
const Login = require('../Login/userlogin');
const Event = require('./Event');
const close = document.querySelector('.close');
const image_upload = document.querySelector('#image_upload');

const login = document.querySelector('#login-form');




const userLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const user = new Login(username, password);
}


close.addEventListener('click', Event.closeWindow)
login.addEventListener('submit', userLogin);