const { chefInventory } = require("./fishMonger.js")



const fishMenu = (dailyPrice) => {
    const chefFishInventory = chefInventory(dailyPrice)
    let fishItem = []
    for (const fish of chefFishInventory) {
        fishItem.push(`\n \t <h2>${fish.species}</h2> \n \t <section class="menu__item">${fish.species} Soup</section> \n \t <section class="menu__item">${fish.species} Sandwich</section> \n \t <section class="menu__item">Grilled ${fish.species}</section> \n`)
    }
    return fishItem
}



module.exports = { fishMenu }


/*

    ```html
    <h1>Menu</h1>
    <article class="menu">
        <h2>Tuna</h2>
        <section class="menu__item">Tuna Soup</section>
        <section class="menu__item">Tuna Sandwich</section>
        <section class="menu__item">Grilled Tuna</section>
    </article>
    ```

*/

