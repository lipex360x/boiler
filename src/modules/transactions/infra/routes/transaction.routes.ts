import { Router } from 'express'

import TransactionCreateController from '@modules/transactions/useCases/Transaction/Create/TransactionCreate.controller'
import TransactionListController from '@modules/transactions/useCases/Transaction/List/TransactionList.controller'

const router = Router()

const transactionCreateController = new TransactionCreateController()
const transactionListController = new TransactionListController()

router.post('/', transactionCreateController.handle)
router.get('/', transactionListController.handle)

export default router
