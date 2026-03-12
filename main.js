const numbersContainer = document.getElementById('numbers');
const generateButton = document.getElementById('generate');
const themeToggle = document.getElementById('theme-toggle');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
    }
}

function generateAndDisplayNumbers() {
    const winningNumbers = generateNumbers();
    displayNumbers(winningNumbers);
}

// Theme Toggle Logic
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

generateButton.addEventListener('click', generateAndDisplayNumbers);

// Initial generation
generateAndDisplayNumbers();
