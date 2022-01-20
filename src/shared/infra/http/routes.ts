import { Router } from 'express'

import transactionsRoutes from '@modules/transactions/infra/routes/transaction.routes'

const routes = Router()

routes.use('/transactions', transactionsRoutes)

export default routes
