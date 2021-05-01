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
// [] - make variables
// [] - make eventlistener
// [] - make function