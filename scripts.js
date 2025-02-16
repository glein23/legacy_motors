document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const inventoryLink = document.getElementById('inventory-link');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');

    const homeSection = document.getElementById('home-section');
    const inventorySection = document.getElementById('inventory-section');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    homeLink.addEventListener('click', () => {
        showSection(homeSection);
    });

    inventoryLink.addEventListener('click', () => {
        showSection(inventorySection);
    });

    loginLink.addEventListener('click', () => {
        showSection(loginSection);
    });

    registerLink.addEventListener('click', () => {
        showSection(registerSection);
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const loginMessage = document.getElementById('login-message');
        
        // Simulated login validation
        if (username === 'user' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Invalid username or password';
            loginMessage.style.color = 'red';
        }
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const registerMessage = document.getElementById('register-message');
        
        // Simulated registration validation
        if (username && password) {
            registerMessage.textContent = 'Registration successful!';
            registerMessage.style.color = 'green';
        } else {
            registerMessage.textContent = 'Please fill in all fields';
            registerMessage.style.color = 'red';
        }
    });

    document.querySelectorAll('.car button').forEach(button => {
        button.addEventListener('click', () => {
            const carElement = button.parentElement;
            const carName = carElement.querySelector('h3').textContent;
            const carPrice = carElement.querySelector('p').textContent;

            alert(`Car Selected:\n\nName: ${carName}\nPrice: ${carPrice}`);
        });
    });

    function showSection(section) {
        homeSection.style.display = 'none';
        inventorySection.style.display = 'none';
        loginSection.style.display = 'none';
        registerSection.style.display = 'none';
        section.style.display = 'block';
    }

    // Show the home section by default
    showSection(homeSection);
});