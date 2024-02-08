export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso.')
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): void => {
    console.log('Seu saldo é de:', this.balance, 'reais.')
  }

  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      if(depositValue > 0) {
        this.setBalance(depositValue)
        console.log('\nDepósito feito com sucesso.')
      } else console.log('\nNão é possível depositar valores menores ou iguais a zero.')
      this.getBalance()
    }
  }

  withdraw = (withdrawValue: number): void => {
    if(this.validateStatus()){
      if(withdrawValue <= this.balance) {
        this.setBalance(this.balance - withdrawValue)
        console.log('\nSaque feito com sucesso.')
        this.getBalance()
      } else console.log('\nSaque não realizado por saldo insuficiente.')
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('\nConta inválida. Entre em contato com o DioBank para mais detalhes.')
  }
}
