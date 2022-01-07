import { Router } from 'express'

import loginRoutes from '@modules/accounts/infra/routes/login.routes'

import userRoutes from '@modules/accounts/infra/routes/user.routes'

import passwordRotes from '@modules/accounts/infra/routes/password.routes'

const routes = Router()

routes.use('/login', loginRoutes)

routes.use('/users', userRoutes)

routes.use('/password', passwordRotes)

export default routes
