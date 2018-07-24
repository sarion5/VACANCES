var Traits = {

    //basic characteristics of all creatures
    Characteristics = function (each) {
        name = each.name,
            img = each.img,
            description = each.description,
            effectBeforeRound = each.effectBeforeRound,
            effect = each.effect,
            foodValue = each.foodValue,
            copiesNumber = each.copiesNumber

        return each;
    },

    showCaract = function () {
        console.log(Characteristics);
    }

}

var TraitCards = {
    Ambush = [{
        name = "Ambush",
        img = "",
        description = "Allows a Carnivore to attack a species protected by the Warning Call trait.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =
    }],
    Burrowing = [{
        name = "Burrowing",
        img = "",
        description = "This species may not be attacked by a Carnivore if it has food equal to its Population.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],
    Carnivore = [{
        name = "Carnivore",
        img = "",
        description = "This species may attack another species during Feeding if its Body Size is greater than the Body Size of the species being attacked, and it has the traits necessary to overcome that species’ defensive traits.Carnivores may never take Plant Food, even with other traits such as Long Neck, Cooperation or Foraging ",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],
    Climbing = [{
        name = "Climbing",
        img = "",
        description = "A species with Climbing may not be attacked unless the attacking Carnivore also has the Climbing trait.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],
    Cooperation = [{
        name = "Cooperation",
        img = "",
        description = "Anytime this species takes food, if you have a species to the right of it, that species takes 1 food from the same source (Watering Hole or Food Bank). This means Cooperation will get triggered by traits such as Long Neck, Scavenger, Intelligence, and even another Cooperation (but not Fat Tissue).",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    DefensiveHerding = [{
        name = "Defensive Herding",
        img = "",
        description = "A species with Defensive Herding may not be attacked unless the attacking Carnivore has a greater Population.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    FatTissue = [{
        name = "Fat Tissue",
        img = "",
        description = "This species may place food on the Fat Tissue trait card once it has taken food equal to its Population. The food stored on Fat Tissue may not be greater than the Body Size of this species. The food stored on Fat Tissue is neither Plant Food nor Meat Food - it is fat. When the Food Cards are revealed at the beginning of Feeding, move the food on Fat Tissue to this species without exceeding its Population. This does not trigger Cooperation or any other trait that triggers when a species “takes” food. Any food remaining on this trait at the end of the game is discarded and does not count as points.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    Fertile = [{
        name = "Fertile",
        img = "",
        description = "Increase this species’ Population by 1 when the Food Cards are revealed at the beginning of the Feeding phase.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    Foraging = [{
        name = "Foraging",
        img = "",
        description = "This species takes 2 food instead of 1 when Feeding from the Watering Hole (unless it does not have enough Population to take the second food). Foraging does not get triggered by other traits such as Cooperation.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    HardShell = [{
        name = "Hard Shell",
        img = "",
        description = "Add 3 to this species’ Body Size when determining if a Carnivore can attack it. A species with Body Size 6 and Hard Shell will have an effective Body Size of 9. Hard Shell does not increase the amount of Meat Food that a Carnivore takes after an attack.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    Horns = [{
        name = "Horns",
        img = "",
        description = "A Carnivore must reduce its Population by 1 when attacking this species. The reduction in Population occurs before the Carnivore takes Meat Food for the attack.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    Intelligence = [{
        name = "Intelligence",
        img = "",
        description = "A player with Intelligence on his species may discard a card (or several) from his hand to gain an effect. •	If the species with Intelligence is a Non-Carnivore, the player may discard a card on his turn during Feeding to take 2 Plant Food from the Food Bank. This ability may be used multiple times in a round, but only one card may be discarded during a player’s turn. •	If the species with Intelligence is a Carnivore, the player may discard multiple cards on his turn during Feeding. Each card discarded negates the effect of 1 Trait Card that is protecting a species. This can be used when the Carnivore is about to feed and lasts for 1 attack. This effect may not be used to negate a Scavenger Trait Card or any other trait that is not actively protecting a species from the Carnivore. ",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

    LongNeck = [{
        name = "Long Neck",
        img = "",
        description = "Take 1 Plant Food from the Food Bank (not the Watering Hole) when the Food Cards are revealed.",
        effectBeforeRound = ,
        effect = ,
        foodValue = ,
        copiesNumber =

    }],

}