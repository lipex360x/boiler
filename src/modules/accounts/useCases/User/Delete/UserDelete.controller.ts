import { Request, Response } from 'express'
import { container } from 'tsyringe'

import UserDeleteService from './UserDelete.service'

export default class UserDeleteController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body

    const service = container.resolve(UserDeleteService)

    const serviceResponse = await service.execute({ user_id })

    return response.json(serviceResponse)
  }
}
