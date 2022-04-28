'use strict'

const account =
{
  balance: 0,
  totalWithdraw: 0,
  totalDeposit: 0,
  depositMoney: function (amount) {
    this.balance += amount
    this.totalDeposit += amount
  },

  withdrawMoney: function (amount) {
    this.balance -= amount
    this.totalWithdraw += amount
  },

  getBalance: function () {
    return `This account has a
        balance of R ${this.balance}. There have been deposits totalling R ${this.totalDeposit} and withdrawals totalling R ${this.totalWithdraw}.`
  }

}

const money = 500
const getMoney = 200
const getMoney2 = 50
account.depositMoney(money)
account.withdrawMoney(getMoney)
account.withdrawMoney(getMoney2)
console.log(account.getBalance)
