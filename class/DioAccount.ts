export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): void => {
    console.log('Seu saldo é de:', this.balance, 'reais.\n')
  }

  deposit = (depositValue: number): void => {
    console.log('Valor a ser depositado:', depositValue)
    if(this.validateStatus()){
      if(depositValue > 0) {
        this.setBalance(this.balance + depositValue)
        console.log('\nDepósito em conta realizado com sucesso.')
      } else console.log('\nNão é possível depositar valores menores ou iguais a zero.')
      this.getBalance()
    }
  }

  withdraw = (withdrawValue: number): void => {
    console.log('Valor a ser sacado:', withdrawValue)
    if(this.validateStatus()){
      if(withdrawValue <= this.balance) {
        this.setBalance(this.balance - withdrawValue)
        console.log('\nSaque em conta realizado com sucesso.')
        this.getBalance()
      } else console.log('\nSaque não realizado por saldo insuficiente.')
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('\nConta inválida. Entre em contato com o DioBank para mais detalhes.')
  }
}
