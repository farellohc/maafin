const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

// Make the "Enggak" button run away
noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const randomX = Math.random() * (containerRect.width - buttonRect.width);
    const randomY = Math.random() * (containerRect.height - buttonRect.height);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Handle "Maafin Aku" button click
function forgive() {
    response.style.display = 'block';
    response.textContent = "Makasih sayang udah maafin aku, aku janji nggak bakal ulangi lagi ❤️";
    const confettiColors = ['#ff6f61', '#ffcc61', '#61ffca', '#619dff'];

    // Simple confetti animation
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.top = `${Math.random() * window.innerHeight}px`;
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear`;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
    }
}
