const form = document.querySelector('form');
const inputFields = Array.from(form.children)
                         .filter((input, index) => {
    if (index < 4) {
        return input;
    }
});
const submitButton = form.querySelector('button[type="submit"]');
const telLink = document.getElementById('tel-link');
const mailLink = document.getElementById('mail-link');



submitButton.addEventListener('click', event => {
    event.preventDefault();

    let validated = true;

    for (let i = 0; i < 4; i++) {
        if (inputFields[i].value === '') {
            inputFields[i].classList.add('empty');
            validated = false;
        } else {
            inputFields[i].removeAttribute('class');
        }
    }

    if (validated) {
        inputFields.forEach(inputField => {
            inputField.value = '';
        });
        // Form ile neler yapılacağını ekle...
    }
});

inputFields.forEach(inputField => {
    inputField.addEventListener('input', () => {
        if (inputField.classList.contains('empty')) {
            inputField.removeAttribute('class');
        }
    });
});

telLink.removeEventListener('click', pageChange);
mailLink.removeEventListener('click', pageChange);
