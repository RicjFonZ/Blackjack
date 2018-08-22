//
// Blackjack
// by Ricardo Fonseca
//

let tiposDeCartas = ["Copas", "Damas", "Espadas", "Ouros"];

let valores = ["Ás", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Valete", "Dama", "Rei"];

let textArea = document.getElementById("text-area");

let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");


hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener("click", function () {

    textArea.innerText = "Started....";
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';

});



function createDeck() {

    let deck = [];

    for (let i = 0; i < tiposDeCartas.length; i++) {

        for (let j = 0; j < valores.length; j++) {

            let card = {
                suit: tiposDeCartas[i],
                value: valores[j]
            };

            deck.push(card);
        }
    }

    return deck;
}

let deck = createDeck();

function getNextCard(){
    return deck.shift();
}

function getCardString(card) {

    return card.value + ' of ' + card.suit;
}

let playerCards = [ getNextCard() , getNextCard() ];

console.log("Bem-Vindo ao BlackJack");
console.log("As tuas cartas são: ");
console.log("   " + getCardString(playerCards[0]));
console.log("   " + getCardString(playerCards[1]));