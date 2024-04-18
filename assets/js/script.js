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

    cardDeck = shuffle(cardDeck);

    cardDeck.forEach(card => {
        gameBoard.appendChild(card);
        card.addEventListener('click', function() {
            if (!this.classList.contains('matched')) {
                this.classList.toggle('revealed');
                checkForMatch();
            }
        });
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkForMatch() {
    const revealedCards = document.querySelectorAll('.card.revealed:not(.matched)');
    
    if(revealedCards.length === 2) {
        let playerChoiceOne = revealedCards[0].getAttribute('data-character');
        let playerChoiceTwo = revealedCards[1].getAttribute('data-character');
        
        if(playerChoiceOne === playerChoiceTwo) {
            revealedCards.forEach(card => card.classList.add('matched'));
        } else {
            setTimeout(()=> {
                revealedCards.forEach(card => card.classList.remove('revealed'));
            }, 500);
        }
    } else if(revealedCards.length > 2) {
        revealedCards.forEach(card => card.classList.remove('revealed'));
    }
}