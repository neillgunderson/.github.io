function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthPercentage = calculatePasswordStrength(password);

    var strengthBar = document.getElementById("strength-bar");
    var strengthLabel = document.getElementById("strength-label");

    // Update the color of the strength bar based on the percentage
    if (strengthPercentage < 40) {
        strengthBar.style.backgroundColor = 'red';
    } else if (strengthPercentage < 60) {
        strengthBar.style.backgroundColor = 'orange';
    } else if (strengthPercentage < 80) {
        strengthBar.style.backgroundColor = 'yellow';
    } else {
        strengthBar.style.backgroundColor = '#00ff00';  // Bright green
    }

    strengthLabel.innerHTML = "Strength: " + strengthPercentage + "%";
}

function calculatePasswordStrength(password) {
    var lengthRule = Math.min(password.length, 8); // Increment strength for each character beyond 8

    // If there's at least one character, start with 20%
    var initialStrength = password.length > 0 ? 20 : 0;

    // Sum the rules to get a strength value between 1 and 5
    var strength = lengthRule;

    // Calculate the percentage with a maximum of 100%
    var strengthPercentage = Math.min(initialStrength + strength * 20, 100);

    return strengthPercentage;
}

