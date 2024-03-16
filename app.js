document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameReg = document.getElementById('usernameReg').value;
    const passwordReg = document.getElementById('passwordReg').value;

    if (passwordReg.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (/^\d+$/.test(passwordReg)) {
        alert('Password must contain at least one letter.');
        return;
    }

    if (!/[a-z]/.test(passwordReg) || !/[A-Z]/.test(passwordReg)) {
        alert('Password must contain at least one uppercase and one lowercase letter.');
        return;
    }

    // Assuming the registration process is successful
    alert('Registration successful!');
    // Show the login form and hide the registration form
    document.querySelector('.regForm').style.display = 'none';
    document.querySelector('.logForm').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Assuming the login process is successful
    document.getElementById('greeting').textContent = `Welcome, ${username}!`;
});