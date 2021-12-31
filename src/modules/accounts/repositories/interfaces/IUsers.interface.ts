import User from '@modules/accounts/infra/typeorm/entities/User.entity'

export interface CreateProps {
  id?: string
  name: string
  email: string
  password: string,
  isAdmin?: boolean
}

export interface FindByEmailProps {
  email: string
}

export interface FindByIdProps {
  id: string
}

export default interface IUser {
  create(data: CreateProps): Promise<User>
  findByEmail(data: FindByEmailProps): Promise<User>
  findById(data: FindByIdProps): Promise<User>
}
