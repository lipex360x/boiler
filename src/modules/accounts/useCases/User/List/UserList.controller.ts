import { Request, Response } from 'express'
import { container } from 'tsyringe'

import UserListService from './UserList.service'

export default class UserListController {
  async handle (request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UserListService)

    const serviceResponse = await service.execute()

    return response.json(serviceResponse)
  }
}
