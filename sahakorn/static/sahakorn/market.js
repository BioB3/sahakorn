import { universalFetcher } from './utils.js'


const filterBtn = {}
// btnName: actualBtn

async function populateMarketTable(marketItems) {
  // not test yet.
  for (let marketItem of marketItems) {
    const stock = await universalFetcher(`stock/${marketItem.stock}`)
    console.log(stock)
    // const itemType = await universalFetcher(`item_type/${stock.item_type}`)
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${stock.p_name}</td>
      <td>${stock.item_type}</td>
      <td>${stock.member}</td>
      <td>${marketItem.quantity}</td>
      <td>${marketItem.price}</td>
      <td>Never gonna run around and desert you</td>
    `
    document.getElementById('market-table').appendChild(row)
  }
}

function generateBtn(name) {

}

document.addEventListener('DOMContentLoaded', async () => {
  const marketItems = await universalFetcher('market_item')
  console.log(marketItems)
  populateMarketTable(marketItems)
})