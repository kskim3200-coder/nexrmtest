const numbersContainer = document.getElementById('numbers');
const generateButton = document.getElementById('generate');

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

generateButton.addEventListener('click', generateAndDisplayNumbers);

// Initial generation
generateAndDisplayNumbers();
