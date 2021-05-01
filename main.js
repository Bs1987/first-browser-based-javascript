const usernameInput = document.getElementById("input-username");
const usernameWarning = document.getElementById("username-warning");

usernameInput.addEventListener('keyup', checkUsername);

function checkUsername(e) {
    // if usernameInput contains "@", show following message
    if (e.target.value.includes('@')) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else {
        // don't show message
        usernameWarning.textContent = '';
    }
}

// steps for checking password:
//
// [X] - make variables
// [X] - make eventlistener
// [] - make function

const passwordInput = document.getElementById("input-password");
const passwordWarning = document.getElementById("password-warning");

passwordInput.addEventListener('keyup', checkPassword);