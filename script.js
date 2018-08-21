//
// Blackjack
// by Ricardo Fonseca
//

let tiposDeCartas = ["Copas", "Damas", "Espadas", "Ouros"];

let valores = ["Ás", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Valete", "Dama", "Rei"];

function createDeck() {

    let deck = [];

    for (let i = 0; i < tiposDeCartas.length; i++) {

        for (let j = 0; j < valores.length; j++) {

            deck.push(valores[j] + ' de ' + tiposDeCartas[i]);
        }
    }

    return deck;
}

let deck = createDeck();

function getNextCard(){
    return deck.shift();
}

let playerCards = [ getNextCard() , getNextCard() ];

console.log("Bem-Vindo ao BlackJack");
console.log("As tuas cartas são: ");
console.log("   " +  playerCards[0] );
console.log("   " + playerCards[1] );