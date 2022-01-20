import { Repository, getRepository } from 'typeorm'

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction.entity'
import Itransactions, { CreateProps, FindByIdProps, UpdateProps, DeleteProps } from '@modules/transactions/repositories/interfaces/Itransactions.interface'

export default class transactionsRepository implements Itransactions {
  private repository: Repository<Transaction>

  constructor () {
    this.repository = getRepository(Transaction)
  }

  async create ({ title, type, amount, category }: CreateProps): Promise<Transaction> {
    const transaction = this.repository.create({ title, type, amount, category })

    await this.repository.save(transaction)

    return transaction
  }

  async findById ({ id }: FindByIdProps): Promise<Transaction> {
    return this.repository.findOne({ id })
  }

  async findAll (): Promise<Transaction[]> {
    return this.repository.find()
  }

  async update ({ transaction }: UpdateProps): Promise<Transaction> {
    let findTransaction = await this.repository.findOne(transaction.id)

    findTransaction = { ...transaction } as Transaction

    await this.repository.save(findTransaction)

    return findTransaction
  }

  async delete ({ id }: DeleteProps): Promise<Transaction> {
    const transaction = await this.repository.findOne({ id })

    await this.repository.delete(id)

    return transaction
  }
}
