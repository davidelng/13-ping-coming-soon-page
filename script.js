const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
const emailEmpty = document.querySelector('.empty');
const emailFormat = document.querySelector('.formatting');

const validEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(String(email).toLowerCase());
};

btn.addEventListener('click', () => {
    if (email.value.trim() == '') {
        email.classList.add('invalid');
        emailEmpty.classList.add('invalid');
        setTimeout(() => {
            email.classList.remove('invalid');
            emailEmpty.classList.remove('invalid');
        }, 2500);
    }

    else if (!validEmail(email)) {
        email.classList.add('invalid');
        email.value = "";
        emailFormat.classList.add('invalid');
        setTimeout(() => {
            email.classList.remove('invalid');
            emailFormat.classList.remove('invalid');
        }, 2500);
    }

    else {
        email.classList.remove('invalid');
        emailEmpty.classList.remove('invalid');
        emailFormat.classList.remove('invalid');
    }
});