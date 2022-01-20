import { Request, Response } from 'express'
import { container } from 'tsyringe'

import TransactionListService from './TransactionList.service'

export default class TransactionListController {
  async handle (request: Request, response: Response): Promise<Response> {
    const service = container.resolve(TransactionListService)

    const serviceResponse = await service.execute()

    return response.json(serviceResponse)
  }
}
