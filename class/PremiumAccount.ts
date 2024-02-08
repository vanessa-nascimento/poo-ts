import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
    }

    premiumDeposit = (depositValue: number): void => {
        if(depositValue > 0) {
            console.log('\nDepósito Conta Premium')
            console.log('Valor para depósito:', depositValue)
            this.deposit(depositValue + 10)
        } else console.log('Não é possível depositar valores menores ou iguais a zero.')
    }
}