import { universalFetcher, getCurrentMonthYear } from './utils.js'

const paymentStatus = document.getElementById('payment-status')
const loansTaken = document.getElementById('loans-taken')
const loansTable = document.getElementById('loans-table')
const payCommonFeeContainer = document.getElementById('common-fee-btn-container')
const userID = JSON.parse(document.getElementById('user_id').textContent);
let loanID = 0;

async function getPaymentStatus() {
  const response = await universalFetcher('common_fee/payment_status')
  if (response.payment_status === 'Late') {
    payCommonFeeContainer.innerHTML = `
    <button onclick='commonFeeModal.showModal()'>Pay Common Fee</button>
    `
  }
  return response.payment_status
}

async function getCommonFeePaid() {
  const response = await universalFetcher('common_fee/420/')
  return [response.total_paid, response.total_due]
}

function getLoansStatus(loanDate, remainingDebt, id) {
  if (remainingDebt <= 0) {
    return '<span class="badge badge-success">Returned</span>'
  }
  else if (loanDate <= new Date()) {
    return `<span id=${id} onclick="payLoanModal.showModal()" class="badge badge-error">Overdue</span>`
  }
  return `<span id=${id} onclick="payLoanModal.showModal()" class="badge badge-warning">In Progress</span>`
}

function bindBadges() {
  const badges = document.querySelectorAll('.badge-error, .badge-warning');
  badges.forEach((badge) => {
    badge.addEventListener('click', () => {
      loanID = badge.id;
    })
  })
}

async function populateLoansTable(loans) {
  for (const loan of loans) {
    const row = document.createElement('tr')
    const status = getLoansStatus(new Date(loan.loan_date), loan.amount-loan.paid, loan.id)
    row.innerHTML = `
      <td>${loan.id}</td>
      <td>${loan.loan_date}</td>
      <td>${loan.paid}</td>
      <td>${loan.amount}</td>
      <td>${status}</td>
    `
    loansTable.appendChild(row)
  }
  bindBadges();
}

document.addEventListener('DOMContentLoaded', async () => {
  paymentStatus.innerHTML = await getPaymentStatus()
  const myLoans = await universalFetcher('loans/?member=1')
  loansTaken.innerHTML = myLoans.length !==1 ? `${myLoans.length} Loans` : '1 Loan'
  await populateLoansTable(myLoans)

  const commonFeePaid = await getCommonFeePaid();
  document.getElementById('common-fee-paid').innerHTML = commonFeePaid[0];
  document.getElementById('common-fee-cost').innerHTML = commonFeePaid[1];

  document.getElementById('commonFeeForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('commonFeeForm'));
    const monthYear = getCurrentMonthYear();
    const data = {
      'month': monthYear[0],
      'year': monthYear[1],
      'total_paid': formData.get('total_paid'),
      'member': userID
    };

    const response = await fetch('/api/common_fee/', {
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
      alert('Error paying common fee.');
    }
  });

  document.getElementById('takeLoanForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('takeLoanForm'));
    const data = {
      'amount': formData.get('amount'),
      'loan_date': formData.get('loan_date'),
      'member': userID
    };

    const response = await fetch('/api/loans/', {
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
      alert('Error submitting a loan request.');
    }
  });

  document.getElementById('payLoanForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('payLoanForm'));
    const data = {
      'paid': formData.get('paid'),
    };

    const response = await fetch(`/api/loans/${loanID}/`, {
      method: 'PUT',
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
      alert('Error updating loan.');
    }
  });
})