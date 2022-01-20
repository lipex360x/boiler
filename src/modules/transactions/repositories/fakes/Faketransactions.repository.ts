import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction.entity'
import Itransactions, { CreateProps, FindByIdProps, UpdateProps, DeleteProps } from '@modules/transactions/repositories/interfaces/Itransactions.interface'

export default class FakeTransactionsRepository implements Itransactions {
  private repository: Transaction[] = []

  async create ({ title, type, amount, category }:CreateProps): Promise<Transaction> {
    const transaction = new Transaction()

    Object.assign(transaction, {
      ...transaction,
      title,
      type,
      amount,
      category,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(transaction)

    return transaction
  }

  async findById ({ id }: FindByIdProps): Promise<Transaction> {
    return this.repository.find(findTransaction => findTransaction.id === id)
  }

  async findAll (): Promise<Transaction[]> {
    return this.repository
  }

  async update ({ transaction }: UpdateProps): Promise<Transaction> {
    const index = this.repository.findIndex(findTransaction => findTransaction.id === transaction.id)

    this.repository[index] = transaction

    return transaction
  }

  async delete ({ id }: DeleteProps): Promise<Transaction> {
    const transaction = this.repository.find(repo => repo.id === id)

    this.repository = this.repository.filter(repo => repo.id !== id)

    return transaction
  }
}
