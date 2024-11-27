import { universalFetcher, getToday } from './utils.js'

const filterDropDown = document.getElementById('filter')
const userID = JSON.parse(document.getElementById('user_id').textContent);

let selItem = 0


async function updateTransactionTable(transactions) {
  for (let transaction of transactions) {
    const marketItem = await universalFetcher(`market_item/${transaction.market_item}`)
    const stock = await universalFetcher(`stock/${marketItem.stock}`)
    const row = document.createElement('tr')
    const itemTypeNameArr = []
    for(let tag of stock.item_type) {
      itemTypeNameArr.push(tag.name)
    }
    row.innerHTML = `
    <td>${stock.p_name}</td>
    <td>${itemTypeNameArr}</td>
    <td>${marketItem.producer}</td>
    <td>${transaction.quantity}</td>
    <td>${transaction.total_paid}</td>
    <td>${transaction.date}</td>
    `
    document.getElementById('transaction-table').appendChild(row)
  }  
}



function clearTransactionTable () {
  document.getElementById('transaction-table').innerHTML = ''
}

async function generateDropDown() {
  const itemTypes = await universalFetcher('item_type')
  for(let t of itemTypes) {
    const option = document.createElement('option')
    option.innerHTML = t.name
    filterDropDown.appendChild(option)
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const transactions = await universalFetcher(`transaction/?user=${userID}`)
  updateTransactionTable(transactions)
  await generateDropDown()
  filterDropDown.addEventListener('change', async () => {
    clearTransactionTable()
    if(filterDropDown.options[filterDropDown.selectedIndex].text === 'ALL TYPES') {
      updateTransactionTable(await universalFetcher(`transaction/?user=${userID}`))
    }
    else {
      updateTransactionTable(await universalFetcher(`transaction/?item_type=${filterDropDown.options[filterDropDown.selectedIndex].text}&user=${userID}`))
    }
  })

  document.getElementById('sort').addEventListener('change', async () => {
    const item_type = filterDropDown.options[filterDropDown.selectedIndex].text
    const order = document.getElementById('sort').selectedIndex===2 ? '-total_paid' : 'total_paid'
    clearTransactionTable()
    if(item_type === 'ALL TYPES') {
      updateTransactionTable(await universalFetcher(`transaction/?order=${order}&user=${userID}`))
    }
    else {
      updateTransactionTable(await universalFetcher(`market_item/?order=${order}&item_type=${item_type}&user=${userID}`))
    }
  })


})