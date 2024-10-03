// Function to validate username
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9]{6,12}$/;
    return usernameRegex.test(username);
}

// Function to validate password
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Clear error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    let valid = true;

    // Validate username
    if (!validateUsername(username)) {
        document.getElementById('usernameError').textContent = 'Invalid username. Must be 6-12 characters, alphanumeric.';
        valid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
        document.getElementById('passwordError').textContent = 'Invalid password. Must be 8+ characters, with an uppercase, lowercase, digit, and special character.';
        valid = false;
    }

    // Show success message if valid
    if (valid) {
        document.getElementById('successMessage').textContent = 'Login successful!';
    }
});
