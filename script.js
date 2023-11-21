function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strength = checkPasswordStrengthRules(password);
    var strengthPercentage = strength * 20;

    var strengthBar = document.getElementById("strength-bar");
    var strengthLabel = document.getElementById("strength-label");

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

function checkPasswordStrengthRules(password) {
    // Implement your password strength rules here
    var lengthRule = Math.min(password.length, 8); // Increment strength for each character beyond 8
    var uppercaseRule = /[A-Z]/.test(password);
    var lowercaseRule = /[a-z]/.test(password);
    var digitRule = /\d/.test(password);
    var specialCharRule = /[!@#$%^&*()-_=+[\]{}|;:'<>,.?/]/.test(password);

    // Sum the rules to get a strength value between 0 and 5
    var strength = lengthRule + uppercaseRule + lowercaseRule + digitRule + specialCharRule;

    return strength;
}

