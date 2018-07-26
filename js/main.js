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
            let currentPlayer = new Player(currentPlayerName, 0, 3, 0, []);
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

    function checkDeckState(players) {

        let cardsDistrubution = currentPlayer.cardsInit + currentPlayer.species;
        let totalCardsToDistribute = 0;
        let isCardNumberHighEnough = false;

        for (let i = 0; i < players.length; i++) {
            totalCardsToDistribute
        }
    }

    ////////////////////////////
    //FunctionsRoundPartOne.js//
    ////////////////////////////
    roundPartOne(players, AllTraitCards);