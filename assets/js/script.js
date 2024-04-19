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
            cardElement.innerHTML = `<img src="assets/images/${char}.webp" alt="${char}">`;
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
            setTimeout(()=>{
                gameEnd(cardDeck);
            }, 100);
        });
        card.addEventListener('mouseover', function() {
            card.style.scale = '1.02';
            card.style.transition = '0.25s ease';
        });
        card.addEventListener('mouseleave', function() {
            card.style.scale = '1';
            card.style.transition = '0.25s ease';
        });
    });
}
// Fisher Yates shuffle borrowed from Javascript.info
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
// Modal based on tutorial from freeCodeCamp.org and modified
function gameEnd(array) {
    const modal = document.querySelector('.game-end-modal');
    const overlay = document.querySelector('.overlay');
    const playAgainBtn = document.querySelector('.play-again');

    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      };

    const closeModal = function() {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    const playAgain = function() {
        let resetBoard = document.getElementById('game-area');
        resetBoard.innerHTML = '';
        initializeGame();
    };

    let allCardsMatched = document.querySelectorAll('.matched');
	if(array.length === allCardsMatched.length) {
        openModal();
        playAgainBtn.addEventListener('click', playAgain);
        playAgainBtn.addEventListener('click', closeModal);
        overlay.addEventListener("click", closeModal);
        document.addEventListener("keydown", function (esc) {
        if (esc.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
        }
        });
	} else {
        return;
    }
}