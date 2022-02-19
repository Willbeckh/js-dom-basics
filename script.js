'use strict';
const docTitle = "Carpe diem";

// set site title
document.title = docTitle;

// add form heading
const formTitle = document.querySelector('.heading');
formTitle.innerHTML = "Register";

// get form from site structure;
let form = document.querySelector('#registerForm');

// form action onsubmit
let submitForm = (e) => {
    e.preventDefault();

    // get form input data
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;

    // prevents empty submits
    if(username == '' && password == '') {
        console.log("yoow, I need some data in there!");
        // return true; 
    } else {
        // hide form on submit
        const hideForm = document.querySelector('.signup');
        hideForm.style.display = 'none';

        // show welcome user after submit
        const homepage = document.querySelector('#home').innerHTML = `Hello ${username}, Welcome!`;
    }
}

form.addEventListener('submit', submitForm);
