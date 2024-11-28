import { universalFetcher } from "./utils.js";
const addForm = document.getElementById('addForm');
const userID = JSON.parse(document.getElementById('user_id').textContent);
const filterDropDown = document.getElementById('filter');
let stockID = 0;

function bindButton() {
  const buttons = document.querySelectorAll('.sell-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      stockID = button.id;
    })
  })
}

async function generateDropDown() {
    const itemTypes = await universalFetcher('item_type')
    for(let t of itemTypes) {
      const option = document.createElement('option')
      option.innerHTML = t.name
      filterDropDown.appendChild(option)
    }
  }

async function updateStockTable(StockItems) {
  for (let Stock of StockItems) {
      const stock = await universalFetcher(`stock/${Stock.id}`)
      const row = document.createElement('tr')
      const itemTypeNameArr = []
      for(let tag of stock.item_type) {
        itemTypeNameArr.push(tag.name)
      }
      row.innerHTML = `
      <td>${stock.p_name}</td>
      <td>${stock.quantity}</td>
      <td>${itemTypeNameArr}</td>
      <td>
        <button class="btn btn-sm btn-accent sell-btn" id=${stock.id} onclick="sellModal.showModal()">
          Put on Sale
        </button>
      </td>
      `
      document.getElementById('Stock-table').appendChild(row)
  }
  bindButton();
}



function clearStockTable () {
document.getElementById('Stock-table').innerHTML = ''
}

  
document.addEventListener('DOMContentLoaded', async () => {
    const stockItems = await universalFetcher(`stock/?user=${userID}`)
    await updateStockTable(stockItems)
    await generateDropDown()
    filterDropDown.addEventListener('change', async () => {
        clearStockTable()
        if(filterDropDown.options[filterDropDown.selectedIndex].text === 'ALL TYPES') {
        updateStockTable(await universalFetcher(`stock/?user=${userID}`))
        }
        else {
        updateStockTable(await universalFetcher(`stock/?item_type=${filterDropDown.options[filterDropDown.selectedIndex].text}&user=${userID}`))
        }
    })

    const itemTypeData = await universalFetcher('item_type/');
    itemTypeData.forEach((data) => {
      const option = document.createElement('option');
      option.value = data.id;
      option.innerHTML = data.name;
      document.getElementById('stock-type').appendChild(option);
    });
  
    addForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(addForm);
      const data = {
        'p_name': formData.get('name'),
        'item_type': formData.getAll('stock-type'),
        'quantity': formData.get('quantity'),
        'member': userID
      };
  
      const response = await fetch('/api/stock/', {
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
        alert('Error updating stock.');
      }
    });

    document.getElementById('sellForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(document.getElementById('sellForm'));
      const data = {
        'quantity': formData.get('quantity'),
        'price': formData.get('price'),
        'stock': stockID
      };
  
      const response = await fetch('/api/market_item/', {
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
        alert('Error putting on sale.');
      }
    });
  })