function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthPercentage = calculatePasswordStrength(password);

    var strengthBar = document.getElementById("strength-bar");
    var strengthLabel = document.getElementById("strength-label");

    // Update the color of the strength bar based on the percentage
    if (strengthPercentage < 10) {
        strengthBar.style.backgroundColor = 'white';
    } else if (strengthPercentage < 20) {
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
}

   // Set the width directly based on the percentage
   strengthBar.style.width = strengthPercentage + '%';

   strengthLabel.innerHTML = "Strength: " + strengthPercentage + "%";

function calculatePasswordStrength(password) {
    // Increment strength for each character, with a maximum of 100%
    var strength = Math.min(password.length * 10, 100);

    return strength;
}