//The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
//The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

const email = document.querySelector('#email');
const btn = document.querySelector('#btn');

const validEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(String(email).toLowerCase());
};

btn.addEventListener('click', () => {
    if (email.value.trim() == '') {
        email.classList.add('invalid');
    }

    else if (!validEmail(email)) {
        email.classList.add('invalid');
        email.value = "";
    }

    else {
        email.classList.remove('invalid');
    }
});