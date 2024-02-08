import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

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
