import { inject, injectable } from 'tsyringe'

import Itransactions from '@modules/transactions/repositories/interfaces/Itransactions.interface'
import TransactionMap from '@modules/transactions/mapper/Transaction.map'

interface Request {
  title: string
  type: string
  category: string
  amount: number
}

@injectable()
export default class TransactionCreateService {
  constructor (
    @inject('transactionsRepository')
    private repository: Itransactions
  ) {}

  async execute ({ title, type, amount, category }: Request): Promise<TransactionMap> {
    const setAmount = type === 'deposit' ? amount : -amount

    const transaction = await this.repository.create({ title, type, amount: setAmount, category })

    return TransactionMap.one(transaction)
  }
}
