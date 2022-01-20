import 'reflect-metadata'
import Faker from 'faker'

import FaketransactionsRepository from '@modules/transactions/repositories/fakes/Faketransactions.repository'
import TransactionListService from './TransactionList.service'

let faketransactionsRepository: FaketransactionsRepository
let transactionListService: TransactionListService

describe('Transactions Transaction List', () => {
  beforeEach(() => {
    faketransactionsRepository = new FaketransactionsRepository()
    transactionListService = new TransactionListService(faketransactionsRepository)
  })

  it('should be able to List Transactions', async () => {
    const data = {
      title: Faker.lorem.words(3),
      type: Faker.lorem.words(3),
      category: Faker.lorem.words(3),
      amount: Faker.datatype.number()
    }

    await faketransactionsRepository.create(data)

    const transactions = await transactionListService.execute()

    expect(transactions.length).toBe(1)
  })
})
