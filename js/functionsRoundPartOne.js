/**
 * initDeck
 * 
 * create a deck by pushing all trait cards into an aray
 * 
 * @return {Array} deck with all trait cards
 */
function initDeck(AllTraitCards) {

    //initialize deck
    let deck = [];

    //add one trait card by copies this trait card has left
    //e.g if there is 7 copies of the object "Ambush", there will be
    //7 copies of "Ambush" in the deck
    for (let j = 0; j < AllTraitCards.length; j++) {
        for (let k = 0; k < AllTraitCards[j].nbCopies; k++) {
            deck.push(AllTraitCards[j]);
        }
    }

    return deck;
}

/**
 * shuffleDeckAndDistribute
 * 
 * distribute random cards from the deck to the current player's hand
 * and remove cards distributed from the deck
 * @param {Array} AllTraitCards all trait cards that will be push into the deck
 * @param {Object} currentPlayer player who's turn is currently running
 * 
 * @return {Array} deck minus cards distributed 
 */
function shuffleDeckAndDistribute(initDeck, currentPlayer) {

    //create a deck
    let deck = initDeck(AllTraitCards);

    //the player receives 3 cards + one for each specie they own
    //addition of the three initial cards and the +1 by specie owned by the player
    let cardsDistrubution = currentPlayer.cardsInit + currentPlayer.species;

    //shuffle and take off cards distributed
    for (let j = 0; j < cardsDistrubution; j++) {
        //shuffle
        let currentCardNumber = Math.floor(Math.random() * Math.floor(deck.length));
        let currentCard;
        do {
            currentCard = deck[currentCardNumber];
            console.log(currentCard)
        } while (currentCard.nbCopies < 1);


        //take off from main deck
        currentCard.nbCopies -= 1;

        //put into currentPlayerHand
        (currentPlayer.cardsInHand).push(currentCard);
    }

    deck = initDeck(AllTraitCards);

    return deck;
}

/**
 * roundPartOne
 * 
 * each player gets their cards regarding what remains into the main deck
 * @param {Object} players
 */
function roundPartOne(players) {

    //loop on every players
    for (let i = 0; i < players.length; i++) {

        let currentPlayer = players[i];

        //as a player needs at least 1 specie to keep playing,
        //all players with no specie will be attributed one
        if (currentPlayer.species < 1) {
            currentPlayer.species = 1;
        }

        // shuffle deck and distribute cards
        console.log(shuffleDeckAndDistribute(initDeck, currentPlayer));


    }
}

/**
 * renderContent
 * 
 * display content from shuffled deck and render it using jQuery methods
 * @param {Array} players 
 */
function renderContent(players) {
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i];

        jQuery(document).ready(function ($) {

            (function generateTraitCardsList() {

                let traitCardList = `<ul>`;

                for (i = 0; i < currentPlayer.cardsInHand.length; i++) {
                    let currentImg = currentPlayer.cardsInHand[i].img;

                    traitCardList += `<li>`;
                    traitCardList += `<img src="${currentImg}" width="120"/>`;
                    traitCardList += `</li>`;
                }

                traitCardList += "</ul>";

                $(`#player1TraitCards`).html(traitCardList);
            })();

        })
    }
}