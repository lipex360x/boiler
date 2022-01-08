import User from '@modules/accounts/infra/typeorm/entities/User.entity'

export interface CreateProps {
  id?: string
  name: string
  email: string
  password: string,
  isAdmin?: boolean
  avatar?: string
}

export interface FindByEmailProps {
  email: string
}

export interface UpdateProps {
  user: User
}

export interface FindByIdProps {
  id: string
}

export interface DeleteProps {
  id: string
}

export default interface IUsers {
  create(data: CreateProps): Promise<User>
  update(data: UpdateProps): Promise<User>
  findById(data: FindByIdProps): Promise<User>
  findAll(): Promise<User[]>
  findByEmail(data: FindByEmailProps): Promise<User>
  delete(data: DeleteProps): Promise<User>
}
