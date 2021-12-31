import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsersRepository from '@modules/accounts/repositories/fakes/FakeUsers.repository'
import UserCreateService from './UserCreate.service'

let fakeUsersRepository: FakeUsersRepository
let userCreateService: UserCreateService

describe('Accounts User Create', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    userCreateService = new UserCreateService(fakeUsersRepository)
  })

  it('should be able to create a new user', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@mail.com',
      password: 'john1234',
    }
    const createUser = await userCreateService.execute(user)

    expect(createUser).toHaveProperty('id')
  })

  it('should not be able to create a duplicate user', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@mail.com',
      password: 'john1234',
    }

    await fakeUsersRepository.create(user)

    await expect(
      userCreateService.execute(user)
    ).rejects.toBeInstanceOf(AppError)
  })
})
