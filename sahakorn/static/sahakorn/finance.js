import { universalFetcher } from './utils.js'

const paymentStatus = document.getElementById('payment-status')
const loansTaken = document.getElementById('loans-taken')
const loansTable = document.getElementById('loans-table')

async function getPaymentStatus() {
  const response = await universalFetcher('common_fee/payment_status')
  return response.payment_status
}

function getLoansStatus(loanDate, remainingDebt) {
  if (remainingDebt <= 0) {
    return '<span class="badge badge-success">Returned</span>'
  }
  else if (loanDate <= new Date()) {
    return '<span class="badge badge-error">Overdue</span>'
  }
  return '<span class="badge badge-warning">In Progress</span>'
}

async function populateLoansTable(loans) {
  for (const loan of loans) {
    const row = document.createElement('tr')
    const status = getLoansStatus(new Date(loan.loan_date), loan.amount-loan.paid)
    row.innerHTML = `
      <td>${loan.id}</td>
      <td>${loan.loan_date}</td>
      <td>${loan.paid}</td>
      <td>${loan.amount}</td>
      <td>${status}</td>
    `
    loansTable.appendChild(row)
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  paymentStatus.innerHTML = await getPaymentStatus()
  const myLoans = await universalFetcher('loans/?member=1')
  loansTaken.innerHTML = myLoans.length !==1 ? `${myLoans.length} Loans` : '1 Loan'
  await populateLoansTable(myLoans)
})