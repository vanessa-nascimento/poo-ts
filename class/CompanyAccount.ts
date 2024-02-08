import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    if (this.validateStatus()) {
      if (loanValue > 0) {
        console.log('\nEmpréstimo realizado.')
        this.deposit(loanValue)
      }
    } else ('Não foi possível realizar o empréstimo. Verifique o valor solicitado.')
  }
}
