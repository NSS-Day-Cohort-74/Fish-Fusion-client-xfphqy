const { fishMenu } = require("./restaurant.js")


const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)
console.log(`<h1>Menu</h1> \n \n <article class="menu">${menu.join(" ")} \n </article>`)

