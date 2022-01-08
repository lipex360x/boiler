import { Request, Response } from 'express'
import { container } from 'tsyringe'

import UserUpdateService from './UserUpdate.service'

export default class UserUpdateController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params
    const { name, email, password } = request.body

    const service = container.resolve(UserUpdateService)

    const serviceResponse = await service.execute({ user_id, name, email, password })

    return response.json(serviceResponse)
  }
}
