document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});

function initializeGame() {
    const gameBoard = document.getElementById('game-area');
    const characters = ['cloud', 'nanaki', 'aerith', 'sephiroth', 'chocobo', 'moogle'];
    let cardDeck = [];
    
    characters.forEach(char => {
        for (let i = 0; i < 2; i++) {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.setAttribute('data-character', char);
            cardElement.innerHTML = `<img src="assets/images/${char}.jpg" alt="${char}">`;
            cardDeck.push(cardElement);
        }
    });

    cardDeck.forEach(card => {
        gameBoard.appendChild(card);
        card.addEventListener('click', function() {
            if (!this.classList.contains('matched')) {
                this.classList.toggle('revealed');
            }
        });
    });
}