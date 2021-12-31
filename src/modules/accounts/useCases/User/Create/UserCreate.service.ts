import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'

import IUsers from '@modules/accounts/repositories/interfaces/IUsers.interface'

interface Request{
  name: string
  email: string
  password: string
  isAdmin?: boolean
}

interface Response {
  id: string
  name: string
  email: string
  isAdmin?: boolean
}

@injectable()
export default class UserCreateService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsers
  ) {}

  async execute ({ name, email, password, isAdmin = false }: Request): Promise<Response> {
    const getUser = await this.repository.findByEmail({ email })

    if (getUser) throw new AppError('This user is already exists')

    const user = await this.repository.create({ name, email, password, isAdmin })

    const response: Response = {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    }

    return response
  }
}
