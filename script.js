const transAmt = document.getElementById('amount');
const transDesc = document.getElementById('transac');
const transBtn = document.getElementById("addbtn");
const incomeCheck = document.getElementById("income-check");
const expenseCheck = document.getElementById("expense-check");
const bal = document.getElementById('bal');
const inc = document.getElementById('inc');
const exp = document.getElementById('exp');
const incomeList = document.getElementById('income-list');
const expenseList = document.getElementById('expense-list');

let income = 0;
let expense = 0;
let balance = 0;



transBtn.addEventListener('click', () => {
    var isIncSelected = incomeCheck.checked;
    var isExpSelected = expenseCheck.checked;

    const amount = Number(transAmt.value);

    if (amount < 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (isIncSelected) {
        income += amount;
        balance += amount;
        const listItem = document.createElement('li');
        listItem.innerHTML = `${transDesc.value} <span class="transaction-amount-inc">(+${amount})</span>`;
        incomeList.appendChild(listItem);
    } else if (isExpSelected) {
        expense += amount;
        balance -= amount;
        const listItem = document.createElement('li');
        listItem.innerHTML = `${transDesc.value} <span class="transaction-amount-exp">(-${amount})</span>`;
        expenseList.appendChild(listItem);
    } else {
        console.log('Error');
    }
    bal.innerHTML = balance;
    inc.innerHTML = income;
    exp.innerHTML = expense;
});
