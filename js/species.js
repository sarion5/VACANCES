/**
 * TRAIT CARDS DETAILS
 */
const AllTraitCards =[
    Ambush = {
        name : "Ambush",
        img : "./img/traitsCards/Ambush.jpg",
        description : "Allows a Carnivore to attack a species protected by the Warning Call trait.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 3,
        nbCopies : 7
    },
    Burrowing = {
        name : "Burrowing",
        img : "./img/traitsCards/Burrowing.jpg",
        description : "This species may not be attacked by a Carnivore if it has food equal to its Population.",
        effectBeforeRound : false,
        effect : "none",
        foodValue :5,
        nbCopies :7

    },
    Carnivore = {
        name : "Carnivore",
        img : "./img/traitsCards/Carnivore.jpg",
        description : "This species may attack another species during Feeding if its Body Size is greater than the Body Size of the species being attacked, and it has the traits necessary to overcome that species’ defensive traits.Carnivores may never take Plant Food, even with other traits such as Long Neck, Cooperation or Foraging ",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 9,
        nbCopies : 17

    },
    Climbing = {
        name : "Climbing",
        img : "./img/traitsCards/Climbing.jpg",
        description :"A species with Climbing may not be attacked unless the attacking Carnivore also has the Climbing trait.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 5,
        nbCopies : 7

    },
    Cooperation = {
        name : "Cooperation",
        img : "./img/traitsCards/Cooperation.jpg",
        description : "Anytime this species takes food, if you have a species to the right of it, that species takes 1 food from the same source (Watering Hole or Food Bank). This means Cooperation will get triggered by traits such as Long Neck, Scavenger, Intelligence, and even another Cooperation (but not Fat Tissue).",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 5,
        nbCopies : 7

    },

    DefensiveHerding = {
        name : "Defensive Herding",
        img: "./img/traitsCards/Defensive Herding.jpg",
        description :"A species with Defensive Herding may not be attacked unless the attacking Carnivore has a greater Population.",
        effectBeforeRound : false,
        effect :"none",
        foodValue : 6,
        nbCopies : 7

    },

    FatTissue = {
        name : "Fat Tissue",
        img : "./img/traitsCards/Fat Tissue.jpg",
        description : "This species may place food on the Fat Tissue trait card once it has taken food equal to its Population. The food stored on Fat Tissue may not be greater than the Body Size of this species. The food stored on Fat Tissue is neither Plant Food nor Meat Food - it is fat. When the Food Cards are revealed at the beginning of Feeding, move the food on Fat Tissue to this species without exceeding its Population. This does not trigger Cooperation or any other trait that triggers when a species “takes” food. Any food remaining on this trait at the end of the game is discarded and does not count as points.",
        effectBeforeRound : false,
        effect : "none",
        foodValue :5,
        nbCopies : 7

    },

    Fertile = {
        name : "Fertile",
        img : "./img/fertile.jpg",
        description : "Increase this species’ Population by 1 when the Food Cards are revealed at the beginning of the Feeding phase.",
        effectBeforeRound : true,
        effect : "none",
        foodValue: 7,
        nbCopies : 7

    },

    Foraging = {
        name :"Foraging",
        img : "./img/foraging.jpg",
        description : "This species takes 2 food instead of 1 when Feeding from the Watering Hole (unless it does not have enough Population to take the second food). Foraging does not get triggered by other traits such as Cooperation.",
        effectBeforeRound : false,
        effect :"none",
        foodValue : 7,
        nbCopies : 7

    },

    HardShell = {
        name :"Hard Shell",
        img :"./img/hardShell.jpg",
        description : "Add 3 to this species’ Body Size when determining if a Carnivore can attack it. A species with Body Size 6 and Hard Shell will have an effective Body Size of 9. Hard Shell does not increase the amount of Meat Food that a Carnivore takes after an attack.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : -2,
        nbCopies :7

    },

    Horns = {
        name : "Horns",
        img : "./img/horns.jpg",
        description :"A Carnivore must reduce its Population by 1 when attacking this species. The reduction in Population occurs before the Carnivore takes Meat Food for the attack.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 0,
        nbCopies : 7

    },

    Intelligence = {
        name : "Intelligence",
        img : "./img/intelligence.jpg",
        description : "A player with Intelligence on his species may discard a card (or several) from his hand to gain an effect. •	If the species with Intelligence is a Non-Carnivore, the player may discard a card on his turn during Feeding to take 2 Plant Food from the Food Bank. This ability may be used multiple times in a round, but only one card may be discarded during a player’s turn. •	If the species with Intelligence is a Carnivore, the player may discard multiple cards on his turn during Feeding. Each card discarded negates the effect of 1 Trait Card that is protecting a species. This can be used when the Carnivore is about to feed and lasts for 1 attack. This effect may not be used to negate a Scavenger Trait Card or any other trait that is not actively protecting a species from the Carnivore. ",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 1,
        nbCopies : 7

    },

    LongNeck = {
        name: "Long Neck",
        img : "./img/longNeck.jpg",
        description : "Take 1 Plant Food from the Food Bank (not the Watering Hole) when the Food Cards are revealed.",
        effectBeforeRound : true,
        effect : "none",
        foodValue : 3,
        nbCopies : 7
    },

    PackHunting = {
        name :"Pack Hunting",
        img :"./img/hardShell.jpg",
        description : "Add 3 to this species’ Body Size when determining if it can attack another species.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 3,
        nbCopies :7

    },

    Scavenger = {
        name :"Scavenger",
        img :"./img/hardShell.jpg",
        description : "Take 1 Meat Food from the Food Bank anytime a Carnivore takes food after attacking a species, including if a Carnivore attacks the species with the Scavenger trait. If this trait is on a Carnivore, it will take 1 extra Meat Food every time it makes a successful attack.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 3,
        nbCopies :7

    },

    Symbiosis = {
        name :"Symbiosis",
        img :"./img/hardShell.jpg",
        description : "If you have a species to this species’ right with a larger Body Size, this species cannot be attacked.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 3,
        nbCopies :7

    },

    WarningCall = {
        name :"Warning Call",
        img :"./img/hardShell.jpg",
        description : "If you have a species to the right and/or left of a species with Warning Call, it/they cannot be attacked unless the Carnivore has Ambush. Warning Call does not protect the species that has the Warning Call trait.",
        effectBeforeRound : false,
        effect : "none",
        foodValue : 3,
        nbCopies :7

    }
];
