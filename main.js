// scripts om the checken voor @
// scripts om te checken voor 6 of meer cijfers
// scripts om de waarschuwing in te voeren

//plan for username warning:

//if we find an "@"
//display warning message
//if there is no "@"
//don't display warning message

// Steps:

// [X] - make variable to check username form
const usernameInput = document.getElementById("input-username");
console.log(usernameInput);

// [X] - make variable to input string into username warning
const usernameWarning = document.getElementById("username-warning");
console.log(usernameWarning);

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
// [X] - make function to act on output from username check