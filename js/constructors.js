    /**
     * CLASS FOR TRAIT CARDS
     */
/*     var TraitCards = function (each) {
        each.name = name,
        each.img = img,
        each.description = description,
        each.effectBeforeRound = effectBeforeRound,
        each.effect = effect,
        each.foodValue = foodValue,
        each.copiesNumber = copiesNumber
    }; */

    /**
     * SPECIES CARDS
     */
    var SpeciesCards = function (population, size, nourishment, trait1, trait2, trait3) {
        this.population = population,
            this.size = size,
            this.nourishment = nourishment,
            this.trait1 = trait1,
            this.trait2 = trait2,
            this.trait3 = trait3
    };

    /**
     * PLAYER
     */
    var Player = function (name, species, cardsInit, totalScore, cardsInHand) {
        this.name = name,
            this.species = species,
            this.cardsInit = cardsInit,
            this.totalScore = totalScore,
            this.cardsInHand = cardsInHand
    };