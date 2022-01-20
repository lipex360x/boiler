import { inject, injectable } from 'tsyringe'

import Itransactions from '@modules/transactions/repositories/interfaces/Itransactions.interface'
import TransactionMap from '@modules/transactions/mapper/Transaction.map'
import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction.entity'

@injectable()
export default class TransactionListService {
  constructor (
    @inject('transactionsRepository')
    private repository: Itransactions
  ) {}

  async execute (): Promise<TransactionMap[]> {
    const transactions = await this.repository.findAll()

    return TransactionMap.list(transactions) as Transaction[]
  }
}
