import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'

import User from '@modules/accounts/infra/typeorm/entities/User.entity'
import IUsers from '@modules/accounts/repositories/interfaces/IUsers.interface'
import IHash from '@shared/providers/HashProvider/interface/IHash.interface'
import ICache from '@shared/providers/CacheProvider/interface/ICache.interface'

interface Request {
  user_id: string
  name?: string
  email?: string
  password?: string
}

@injectable()
export default class UserUpdateService {
  constructor (
    @inject('HashProvider')
    private hashProvider: IHash,

    @inject('CacheProvider')
    private cacheProvider: ICache,

    @inject('UsersRepository')
    private repository: IUsers
  ) {}

  async execute ({ user_id, name, email, password }: Request): Promise<User> {
    const user = await this.repository.findById({ id: user_id })

    if (!user) throw new AppError('App Error')

    const findUserByEmail = await this.repository.findByEmail({ email })

    if (findUserByEmail && findUserByEmail !== user) throw new AppError('This e-mail is invalid')

    user.name = name || user.name
    user.email = email || user.email
    user.password = password ? await this.hashProvider.generateHash(password) : user.password

    await this.cacheProvider.deleteKey({ key: 'users-list' })

    return this.repository.update({ user })
  }
}
