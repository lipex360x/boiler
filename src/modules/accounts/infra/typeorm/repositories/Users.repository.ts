import { Repository, getRepository } from 'typeorm'

import User from '@modules/accounts/infra/typeorm/entities/User.entity'
import IUsers, { CreateProps, FindByEmailProps, FindByIdProps } from '@modules/accounts/repositories/interfaces/IUsers.interface'

export default class UsersRepository implements IUsers {
  private repository: Repository<User>

  constructor () {
    this.repository = getRepository(User)
  }

  async create ({ id, name, email, password, isAdmin }: CreateProps): Promise<User> {
    const user = this.repository.create({ id, name, email, password, isAdmin })

    await this.repository.save(user)

    return user
  }

  async findByEmail ({ email }: FindByEmailProps): Promise<User> {
    const getUser = this.repository.findOne({ email })

    return getUser
  }

  async findById ({ id }: FindByIdProps): Promise<User> {
    const getUser = this.repository.findOne({ id })

    return getUser
  }
}
