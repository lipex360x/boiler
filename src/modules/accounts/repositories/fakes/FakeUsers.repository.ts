import bcrypt from 'bcryptjs'

import User from '@modules/accounts/infra/typeorm/entities/User.entity'
import IUsers, { CreateProps, FindByEmailProps, FindByIdProps } from '@modules/accounts/repositories/interfaces/IUsers.interface'

export default class FakeAccountsRepository implements IUsers {
  private repository: User[] = []

  async create ({ name, email, password, isAdmin = false }:CreateProps): Promise<User> {
    const user = new User()
    const passwordCrypted = await bcrypt.hash(password, 8)

    Object.assign(user, {
      name, 
      email, 
      password: passwordCrypted, 
      isAdmin,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(user)

    return user
  }

  async findByEmail ({ email }: FindByEmailProps): Promise<User> {
    const getUser = this.repository.find(user => user.email === email)

    return getUser
  }

  async findById ({ id }: FindByIdProps): Promise<User> {
    const getUser = this.repository.find(user => user.id === id)

    return getUser
  }
}
