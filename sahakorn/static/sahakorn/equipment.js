import {universalFetcher} from './utils.js'

const allEquipments = document.getElementById('all-equipments')
const lentEquipments = document.getElementById('lent-equipments')
const myEquipments = document.getElementById('my-equipments')
const equipmentsTable = document.getElementById('equipments-table')
const borrowModal = document.getElementById('borrowModal');
const borrowForm = document.getElementById('borrowForm');
let equipmentID = 0;


function bindButton() {
  const buttons = document.querySelectorAll('.borrow-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      equipmentID = button.id;
    })
  })
}

function getToday() {
  let today = new Date();
  const offset = today.getTimezoneOffset();
  today = new Date(today.getTime() - (offset*60*1000))
  return today.toISOString().split('T')[0]
}

async function generateRowsFromBorrowing(borrowings) {
  for(let borrowing of borrowings) {
    const row = document.createElement('tr')
    const equipment = await universalFetcher(`equipment/${borrowing.equipment}`)

    row.innerHTML = `
      <td>${equipment.name}</td>
      <td>Someone's Borrowing</td>
      <td>${equipment.owner_name}</td>
      <td>
        Lent to ${borrowing.borrower_name} from ${borrowing.s_date} to ${borrowing.r_date}
      </td>`
    equipmentsTable.appendChild(row) 
  }
}


async function generateRowsFromEquipments(equipments) {
  for(let equipment of equipments) {
    const row = document.createElement('tr')
    const borrow = await universalFetcher(`borrowing/?equipment=${equipment.id}`)
    if(borrow.length === 0) {
      row.innerHTML = `
        <td>${equipment.name}</td>
        <td>Free to Borrow</td>
        <td>${equipment.owner_name}</td>
        <td>
          <button id=${equipment.id} class="borrow-btn btn btn-accent btn-sm" onclick="borrowModal.showModal()">
            Borrow NOW
          </button>
          </td>`
        }
        else {
          const currentBorrow = borrow[0];
          row.innerHTML = `
          <td>${equipment.name}</td>
          <td>Someone's Borrowing</td>
          <td>${equipment.owner_name}</td>
          <td>Lent to ${currentBorrow.borrower_name} from ${currentBorrow.s_date} to ${currentBorrow.r_date}</td>`
          
        }
        equipmentsTable.appendChild(row) 
      }
  bindButton();
}

function clearRows() {
  equipmentsTable.innerHTML = ''
}

document.addEventListener('DOMContentLoaded', async () => {
  const equipments = await universalFetcher('equipment/');
  await generateRowsFromEquipments(equipments);
  allEquipments.addEventListener('click', async () => {
    const equipments = await universalFetcher('equipment/');
    console.log(equipments)
    clearRows()
    await generateRowsFromEquipments(equipments);    
  })

  lentEquipments.addEventListener('click', async () => {
    const lent = await universalFetcher('borrowing/?owner=1')
    clearRows()
    await generateRowsFromBorrowing(lent)
  })

  myEquipments.addEventListener('click', async () => {
    const mine = await universalFetcher('equipment/?owner=1')
    clearRows()
    await generateRowsFromEquipments(mine)
  })

  borrowForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userID = JSON.parse(document.getElementById('user_id').textContent);
    const formData = new FormData(borrowForm);
    const data = {
      'equipment': equipmentID,
      's_date': getToday(),
      'r_date': formData.get('r_date'),
      'user': userID
    };

    const response = await fetch('/api/borrowing/', {
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
      alert('Error updating profile.');
    }
  });
})