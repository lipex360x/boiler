import { inject, injectable } from 'tsyringe'

import User from '@modules/accounts/infra/typeorm/entities/User.entity'
import IUsers from '@modules/accounts/repositories/interfaces/IUsers.interface'



@injectable()
export default class UserListService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsers
  ) {}

  async execute (): Promise<User[]> {
    return this.repository.findAll()
  }
}
