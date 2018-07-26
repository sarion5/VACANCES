/*****************************
 ******************************
 *********FUNCTION*************
 ******************************
 *****************************/

/**
 * initPlayers
 * create players that will play de game using nbPlayers
 * and create names accordingly
 * @return {array} players[] with all players involved
 */
function initPlayers() {

    let nbPlayers = 1;
    let players = [];

    for (let i = 0; i < nbPlayers; i++) {
        let currentPlayerName = `player${i+1}`;
        let currentPlayer = new Player(currentPlayerName, 0, 3, 0, []);
        players.push(currentPlayer);
    }

    return players;
}

//***************************************************************
//***************************************************************
//***************************************************************
//***************************************************************

//players involved
var players = initPlayers();

function roundPartOne(players, AllTraitCards) {

    //loop on every players
    for (let i = 0; i < players.length; i++) {

        let currentPlayer = players[i];

        //as a player needs at least 1 specie to keep playing,
        //all players with no specie will be attributed one
        if (currentPlayer.species < 1) {
            currentPlayer.species = 1;
        }

        function shuffleDeck(AllTraitCards, currentPlayer) {


            let deck = [];

            //add one trait card by copies this trait card has left
            //e.g if there is 7 copies of the object "Ambush", there will be
            //7 copies of "Ambush" in the deck
            for (let j = 0; j < AllTraitCards.length; j++) {
                for (let k = 0; k < AllTraitCards[j].nbCopies; k++) {
                    deck.push(AllTraitCards[j]);
                }
            }

            //addition of the three initial cards and the +1 by specie owned by the player
            let cardsDistrubution = currentPlayer.cardsInit + currentPlayer.species;

            //shuffle and take off cards distributed using slice()
            for (let j = 0; j < cardsDistrubution; j++) {

                //shuffle
                let currentCardNumber = Math.floor(Math.random() * Math.floor(deck.length));
                let currentCard = deck[currentCardNumber];
                console.log(currentCard);
                (currentPlayer.cardsInHand).push(currentCard)

                //take off
                currentCard.nbCopies
            }



            return newDeck;
        }


        console.log(shuffleDeck(AllTraitCards, currentPlayer));
    }
}

roundPartOne(players, AllTraitCards);