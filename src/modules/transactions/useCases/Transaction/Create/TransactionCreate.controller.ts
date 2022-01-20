import { Request, Response } from 'express'
import { container } from 'tsyringe'

import TransactionCreateService from './TransactionCreate.service'

export default class TransactionCreateController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { title, type, amount, category } = request.body

    const service = container.resolve(TransactionCreateService)

    const serviceResponse = await service.execute({ title, type, amount, category })

    return response.json(serviceResponse)
  }
}
