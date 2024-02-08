import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Vanessa', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.withdraw(250)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(1000)
companyAccount.withdraw(150)
companyAccount.withdraw(1500)
companyAccount.getLoan(2000)


const premiumAccount: PremiumAccount = new PremiumAccount('Nath', 100)
console.log(premiumAccount)
premiumAccount.premiumDeposit(540)