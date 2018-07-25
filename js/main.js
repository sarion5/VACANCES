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

    let nbPlayers = 3;
    let players = [];

    for (let i = 0; i < nbPlayers; i++) {
        let currentPlayerName = `player${i+1}`;
        let currentPlayer = new Player(currentPlayerName, 0, 3, 0);
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

    for (let i = 0; i < players.length; i++) {

        let currentPlayer = players[i];
        
        //as a player needs at least 1 specie to keep playing, all players with no specie will be attributed one
        if (currentPlayer.species < 1) {
            currentPlayer.species =1;
        }

        /* let deck = [];

        for (let i = 0; i < AllTraitCards.length; i++) {
            deck.push(AllTraitCards[i]);
        }
        console.log(deck);
 */



    }
}



roundPartOne(players, AllTraitCards);