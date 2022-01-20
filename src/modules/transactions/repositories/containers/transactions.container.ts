import { container } from 'tsyringe'

import Itransactions from '@modules/transactions/repositories/interfaces/Itransactions.interface'
import transactionsRepository from '@modules/transactions/infra/typeorm/repositories/transactions.repository'

container.registerSingleton<Itransactions>(
  'transactionsRepository',
  transactionsRepository
)

export default container
