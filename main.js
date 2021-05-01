// scripts om te checken voor 6 of meer cijfers
// scripts om de waarschuwing in te voeren

const usernameInput = document.getElementById("input-username");
console.log(usernameInput);

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
