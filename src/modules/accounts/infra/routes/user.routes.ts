import { Router } from 'express'

import UserCreateController from '@modules/accounts/useCases/User/Create/UserCreate.controller'

const router = Router()

const userCreateController = new UserCreateController()

router.post('/', userCreateController.handle)

export default router
