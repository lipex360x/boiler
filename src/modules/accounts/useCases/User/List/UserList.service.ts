import { inject, injectable } from 'tsyringe'

import User from '@modules/accounts/infra/typeorm/entities/User.entity'
import IUsers from '@modules/accounts/repositories/interfaces/IUsers.interface'
import ICache from '@shared/providers/CacheProvider/interface/ICache.interface'

@injectable()
export default class UserListService {
  constructor (
    @inject('CacheProvider')
    private cacheProvider: ICache,

    @inject('UsersRepository')
    private repository: IUsers
  ) {}

  async execute (): Promise<User[]> {
    let users = await this.cacheProvider.findByKey<User[]>({ key: 'users-list' })

    if (!users) {
      users = await this.repository.findAll()

      await this.cacheProvider.create({ key: 'users-list', value: users })
    }

    return users
  }
}
