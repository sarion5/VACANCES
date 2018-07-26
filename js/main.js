    //*//////////////////////////////////////////////////////////////////////////////////////*/
    //                                                                                       //
    //                                       MAIN FUNCTIONS                                  //
    //                                                                                       //
    //*//////////////////////////////////////////////////////////////////////////////////////*/

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



    //*//////////////////////////////////////////////////////////////////////////////////////*/
    //                                                                                       //
    //                                           MAIN                                        //
    //                                                                                       //
    //*//////////////////////////////////////////////////////////////////////////////////////*/

    //players involved
    var players = initPlayers();



    if (checkDeckState(initDeck, players)) {

        //////////////////////////////
        //FunctionsRoundPartOne.js////
        //////////////////////////////

        // cards are distributed, the game is called off
        // if there isn't enough cards left
        roundPartOne(players, AllTraitCards);

        function renderContent(players, AllTraitCards) {
            for (let i = 0; i < players.length; i++) {
                let currentPlayer = players[i];

                jQuery(document).ready(function ($) {

                    function generateTraitCardsList() {

                        let traitCardList = `<ul>`;

                        for (i = 0; i < currentPlayer.cardsInHand.length; i++) {
                            let currentImg = currentPlayer.cardsInHand[i].img;

                            traitCardList += `<li>`;
                            traitCardList += `<img src="${currentImg}" width="120"/>`;
                            traitCardList += `</li>`;
                        }

                        traitCardList += "</ul>";

                        $(`#player1TraitCards`).html(traitCardList);
                    }
                    generateTraitCardsList();


                })
            }
        }

        renderContent(players);

        //////////////////////////////
        //FunctionsRoundPartTwo.js////
        //////////////////////////////
        //
        //
        function roundPartTwo(players) {
            for (let i = 0; i < players.length; i++) {
                let currentPlayer = players[i];


            }
        }

        //////////////////////////////
        //FunctionsRoundPartThree.js//
        //////////////////////////////

        //////////////////////////////
        //FunctionsRoundPartFour.js///
        //////////////////////////////

    } else {
        console.log("dernier tour");
    }