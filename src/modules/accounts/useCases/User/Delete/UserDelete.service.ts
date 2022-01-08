import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import User from '@modules/accounts/infra/typeorm/entities/User.entity'
import IUsers from '@modules/accounts/repositories/interfaces/IUsers.interface'
import ICache from '@shared/providers/CacheProvider/interface/ICache.interface'

interface Request {
  user_id: string
}

@injectable()
export default class UserDeleteService {
  constructor (
    @inject('CacheProvider')
    private cacheProvider: ICache,

    @inject('UsersRepository')
    private repository: IUsers
  ) {}

  async execute ({ user_id }: Request): Promise<User> {
    const user = await this.repository.findById({ id: user_id })

    if (!user) throw new AppError('User does not exists')

    await this.cacheProvider.deleteKey({ key: 'users-list' })

    return this.repository.delete({ id: user_id })
  }
}
