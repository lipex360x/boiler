import { Router } from 'express'
import multer from 'multer'

import sessionMiddleware from '@shared/middlewares/sessions'
import adminMiddleware from '@shared/middlewares/admin'

import CreateUserController from '@modules/accounts/useCases/User/Create/UserCreate.controller'
import UserUpdateAvatarController from '@modules/accounts/useCases/User/UpdateAvatar/UserUpdateAvatar.controller'
import UserListController from '@modules/accounts/useCases/User/List/UserList.controller'
import UserDeleteController from '@modules/accounts/useCases/User/Delete/UserDelete.controller'

import { multerConfig } from '@shared/config/files'

const router = Router()

const userUpdateAvatarController = new UserUpdateAvatarController()
const createUserController = new CreateUserController()
const userListController = new UserListController()
const userDeleteController = new UserDeleteController()

const upload = multer(multerConfig())

router.post('/', createUserController.handle)

router.use(sessionMiddleware)
router.patch('/avatar', upload.single('avatar'), userUpdateAvatarController.handle)

router.use(sessionMiddleware)
router.use(adminMiddleware)
router.get('/list', userListController.handle)
router.delete('/delete', userDeleteController.handle)

export default router
