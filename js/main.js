    //**              */
    //                //
    // MAIN FUNCTIONS //
    //                //
    //**              */

    /**
     * initPlayers
     * 
     * create players that will play de game using nbPlayers
     * and create names accordingly
     * @return {array} players[] with all players involved
     */
    function initPlayers() {

        let nbPlayers = 1;
        let players = [];

        for (let i = 0; i < nbPlayers; i++) {
            let currentPlayerName = `player${i+1}`;
            let currentPlayer = new Player(currentPlayerName, 1, 3, 0, []);
            players.push(currentPlayer);
        }

        return players;
    }

    /**
     * checkDeckState
     * 
     * evaluate weither or not there still is enough cards in the deck for another round
     * if so, at least two other rounds will follow
     * if not, all the cards are re-shuffled for a last round and the game end.
     * @param {Array} initDeck push the remaining cards into an array
     * @param {Array} players 
     * 
     * @return {boolean} true if there is still enough cards to keep playing, false otherwise
     */
    function checkDeckState(initDeck, players) {

        let remainingCards = initDeck(AllTraitCards).length;
        let totalCardsToDistribute = 0;
        let isCardNumberHighEnough;

        for (let i = 0; i < players.length; i++) {
            let cardsDistrubution = players[i].cardsInit + players[i].species;
            totalCardsToDistribute += cardsDistrubution;
        }

        remainingCards >= totalCardsToDistribute ? isCardNumberHighEnough = true : isCardNumberHighEnough = false;


        return isCardNumberHighEnough;
    }



    //*     */
    //      //
    // MAIN //
    //      //
    //*     */

    //players involved
    var players = initPlayers();



    if (checkDeckState(initDeck, players)) {

        //////////////////////////////
        //FunctionsRoundPartOne.js////
        //////////////////////////////
        roundPartOne(players, AllTraitCards);

        //////////////////////////////
        //FunctionsRoundPartTwo.js////
        //////////////////////////////

        //////////////////////////////
        //FunctionsRoundPartThree.js//
        //////////////////////////////

        //////////////////////////////
        //FunctionsRoundPartFour.js///
        //////////////////////////////

    } else {
        console.log("dernier tour");
    }