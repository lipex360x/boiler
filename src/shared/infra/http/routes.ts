import { Router } from 'express'

import sessionRoutes from '@shared/middlewares/sessions/routes/session.routes'
import userRoutes from '@modules/accounts/infra/routes/user.routes'


const routes = Router()

routes.use('/auth', sessionRoutes)

routes.use('/users', userRoutes)

export default routes
