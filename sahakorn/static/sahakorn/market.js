import { universalFetcher, getToday } from './utils.js'

const filterDropDown = document.getElementById('filter')
const userID = JSON.parse(document.getElementById('user_id').textContent);

let selItem = 0

function bindButton() {
  const buttons = document.querySelectorAll('.buy-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      selItem = button.id;
    })
  })
}


async function populateMarketTable(marketItems) {
  // not test yet.
  for (let marketItem of marketItems) {
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
    <td>${marketItem.quantity}</td>
    <td>${marketItem.price}</td>
    <td>
      <button class="btn btn-sm btn-accent buy-btn" id=${marketItem.id} onclick="buyModal.showModal()">
        BUY
      </button>
    </td>
    `
    document.getElementById('market-table').appendChild(row)
  }  
  bindButton()
}



function clearMarketTable () {
  document.getElementById('market-table').innerHTML = ''
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
  const marketItems = await universalFetcher('market_item')
  populateMarketTable(marketItems)
  await generateDropDown()
  filterDropDown.addEventListener('change', async () => {
    clearMarketTable()
    if(filterDropDown.options[filterDropDown.selectedIndex].text === 'ALL TYPES') {
      populateMarketTable(await universalFetcher('market_item'))
    }
    else {
      populateMarketTable(await universalFetcher(`market_item/?item_type=${filterDropDown.options[filterDropDown.selectedIndex].text}`))
    }
  })

  document.getElementById('sort').addEventListener('change', async () => {
    const item_type = filterDropDown.options[filterDropDown.selectedIndex].text
    const order = document.getElementById('sort').selectedIndex===2 ? '-price' : 'price'
    clearMarketTable()
    if(item_type === 'ALL TYPES') {
      populateMarketTable(await universalFetcher(`market_item/?order=${order}`))
    }
    else {
      populateMarketTable(await universalFetcher(`market_item/?order=${order}&item_type=${item_type}`))
    }
  })

  document.getElementById('buyForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('buyForm'));
    const data = {
      'quantity': formData.get('quantity'),
      'market_item': Number(selItem),
      'member': userID,
      'date': getToday(),
      'total_paid': 24908403348909
    };

    const response = await fetch('/api/transaction/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      location.reload();
    } else {
      alert('Error doing transaction.');
    }
  });


})