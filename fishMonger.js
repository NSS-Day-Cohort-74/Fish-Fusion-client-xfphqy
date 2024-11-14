const { getBoatInventory } = require("./fishingBoat.js")

const fishInventory = getBoatInventory()

const mongerInventory = (allFish) => {
    let mongerFishBought = []
    for (const fish of allFish) {
        if(fish.amount > 10 && fish.price < 7.50) {
            mongerFishBought.push(fish)
        }
    }
    return mongerFishBought
}

const mongerFishBought = mongerInventory(fishInventory)

const chefInventory = (chefPrice) => {
    let chefList = []
    for (const fish of mongerFishBought) {
        if(fish.price <= chefPrice) {
            fish.amount = fish.amount / 2
         chefList.push(fish)
        }
    }
        return chefList
}


module.exports = { mongerInventory, chefInventory }



