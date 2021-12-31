import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsersRepository from '@modules/accounts/repositories/fakes/FakeUsers.repository'
import UserCreateService from '@modules/accounts/useCases/User/Create/UserCreate.service'
import SessionService from './Session.service'

let fakeUsersRepository: FakeUsersRepository
let sessionService: SessionService
let userCreateService: UserCreateService

describe('Session Service', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    userCreateService = new UserCreateService(fakeUsersRepository)
    sessionService = new SessionService(fakeUsersRepository)
  })

  it('should be able to check if user is valid', async () => {
    const user = {
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.datatype.uuid(),
      isAdmin: false
    }

    await userCreateService.execute(user)

    let fakeUser = {
      ...user,
      email: Faker.internet.email()
    }

    await expect(
      sessionService.execute(fakeUser)
    ).rejects.toBeInstanceOf(AppError)

    fakeUser = {
      ...user,
      password: Faker.datatype.uuid()
    }

    await expect(
      sessionService.execute(fakeUser)
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to create a token', async () => {
    const user = {
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.datatype.uuid(),
    }

    await userCreateService.execute(user)

    const webtoken = await sessionService.execute({ email: user.email, password: user.password })

    expect(webtoken).toHaveProperty('token')
  })
})
