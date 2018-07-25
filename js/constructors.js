    /**
     * CLASS FOR TRAIT CARDS
     */
    var TraitCards = function (each) {
        name = each.name,
            img = each.img,
            description = each.description,
            effectBeforeRound = each.effectBeforeRound,
            effect = each.effect,
            foodValue = each.foodValue,
            copiesNumber = each.copiesNumber;

        return each;
    };

    /**
     * SPECIES CARDS
     */
    var SpeciesCards = function (each) {
        population = each.population,
            size = each.size,
            nourishment = each.nourishment,
            trait1 = each.trait1,
            trait2 = each.trait2,
            trait3 = each.trait3;

        return each;
    };

    /**
     * PLAYER
     */
    var Player = (function (each) {
        name = each.name,
            species = each.species,
            totalScore = each.totalScore;
        return each;
    });