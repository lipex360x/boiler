import 'reflect-metadata'
import Faker from 'faker'

import FaketransactionsRepository from '@modules/transactions/repositories/fakes/Faketransactions.repository'
import TransactionCreateService from './TransactionCreate.service'

let faketransactionsRepository: FaketransactionsRepository
let transactionCreateService: TransactionCreateService

describe('Transactions Transaction Create', () => {
  beforeEach(() => {
    faketransactionsRepository = new FaketransactionsRepository()
    transactionCreateService = new TransactionCreateService(faketransactionsRepository)
  })

  it('should be able to Create a Transaction with type Deposit', async () => {
    const data = {
      title: Faker.lorem.words(3),
      type: 'deposit',
      category: Faker.lorem.words(3),
      amount: Faker.datatype.number()
    }

    const transactions = await transactionCreateService.execute(data)

    expect(transactions).toHaveProperty('id')
  })

  it('should be able to Create a Transaction with type Withdraw', async () => {
    const data = {
      title: Faker.lorem.words(3),
      type: 'withdraw',
      category: Faker.lorem.words(3),
      amount: Faker.datatype.number()
    }

    const transactions = await transactionCreateService.execute(data)

    expect(transactions).toHaveProperty('id')
  })
})
