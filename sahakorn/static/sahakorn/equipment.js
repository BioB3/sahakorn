import {universalFetcher} from './utils.js'

const allEquipments = document.getElementById('all-equipments')
const lentEquipments = document.getElementById('lent-equipments')
const myEquipments = document.getElementById('my-equipments')
const equipmentsTable = document.getElementById('equipments-table')


async function generateRows(equipments) {
  for(let equipment of equipments) {
    const row = document.createElement('tr')
    const borrow = await universalFetcher(`borrowing/?equipment=${equipment.id}`)
    if(borrow.length === 0) {
      row.innerHTML = `
        <td>${equipment.name}</td>
        <td>Free to Borrow</td>
        <td>${equipment.owner}</td>
        <td>
          <button class="btn btn-accent btn-sm">
            Borrow NOW
          </button>
        </td>`
    }
    else {
      const currentBorrow = borrow[0];
      row.innerHTML = `
        <td>${equipment.name}</td>
        <td>Someone's Borrowing</td>
        <td>${equipment.owner}</td>
        <td>Lent to ${currentBorrow.user} from ${currentBorrow.s_date} to ${currentBorrow.r_date}</td>`
      
    }
    equipmentsTable.appendChild(row) 
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const equipments = await universalFetcher('equipment/');
  await generateRows(equipments);
})