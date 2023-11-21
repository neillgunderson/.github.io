function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthPercentage = calculatePasswordStrength(password);

    var strengthBar = document.getElementById("strength-bar");
    var strengthLabel = document.getElementById("strength-label");

    // Update the color of the strength bar based on the percentage
    if (strengthPercentage < 20) {
        strengthBar.style.backgroundColor = 'red';
    } else if (strengthPercentage < 40) {
        strengthBar.style.backgroundColor = 'orange';
    } else if (strengthPercentage < 60) {
        strengthBar.style.backgroundColor = 'yellow';
    } else if (strengthPercentage < 80) {
        strengthBar.style.backgroundColor = 'green';
    } else {
        strengthBar.style.backgroundColor = '#00ff00';  // Bright green
    }

    strengthLabel.innerHTML = "Strength: " + strengthPercentage + "%";
}

function calculatePasswordStrength(password) {
    // If there's at least one character and the length is less than 8, start with 20%
    var initialStrength = password.length > 0 && password.length < 8 ? 20 : 0;

    // Increment strength for each character, with a maximum of 80%
    var strength = Math.min(password.length * 10, 80);

    // Calculate the percentage with a maximum of 100%
    var strengthPercentage = Math.min(initialStrength + strength, 100);

    return strengthPercentage;
}
