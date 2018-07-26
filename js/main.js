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



    //*     */
    //      //
    // MAIN //
    //      //
    //*     */

    //players involved
    var players = initPlayers();

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

    if (checkDeckState(initDeck, players)) {
        ////////////////////////////
        //FunctionsRoundPartOne.js//
        ////////////////////////////
        roundPartOne(players, AllTraitCards);
    } else {
        console.log("dernier tour");
    }