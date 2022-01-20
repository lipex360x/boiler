import { instanceToInstance } from 'class-transformer'

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction.entity'

interface Response {
  id: string
  title: string
  type: string
  category: string
  amount: number
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

export default class TransactionMap {
  static one ({ id, title, type, category, amount, created_at, updated_at, deleted_at }: Transaction): Response {
    return instanceToInstance({ id, title, type, category, amount, created_at, updated_at, deleted_at })
  }

  static list (transactions: Transaction[]): Response[] {
    const transactionList:Response[] = []

    for (const transaction of transactions) {
      transactionList.push(transaction)
    }

    return transactionList
  }
}
