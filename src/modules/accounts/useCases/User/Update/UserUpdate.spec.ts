import 'reflect-metadata'
import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsersRepository from '@modules/accounts/repositories/fakes/FakeUsers.repository'
import UserUpdateService from './UserUpdate.service'
import FakeHashProvider from '@shared/providers/HashProvider/fakes/FakeHash.provider'
import FakeCacheProvider from '@shared/providers/CacheProvider/fakes/FakeCache.provider'

let fakeUsersRepository: FakeUsersRepository
let userUpdateService: UserUpdateService
let fakeHashProvider: FakeHashProvider
let fakeCacheProvider: FakeCacheProvider

describe('Accounts User Update', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider()
    fakeCacheProvider = new FakeCacheProvider()

    fakeUsersRepository = new FakeUsersRepository()

    userUpdateService = new UserUpdateService(
      fakeHashProvider,
      fakeCacheProvider,
      fakeUsersRepository
    )
  })

  it('should not be able to Update a invalid user', async () => {
    await expect(
      userUpdateService.execute({ user_id: 'invalid_user' })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to update a user with an existent email', async () => {
    const user1 = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    const user2 = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    await expect(
      userUpdateService.execute({ user_id: user1.id, email: user2.email })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to update a user', async () => {
    const user = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    const updatedAllUser = await userUpdateService.execute({
      user_id: user.id,
      name: 'John Doe',
      email: 'mail@mail.com',
      password: '112233'
    })

    const updatedUserName = await userUpdateService.execute({
      user_id: user.id,
      name: 'John Doe'
    })

    const updatedUserEmail = await userUpdateService.execute({
      user_id: user.id,
      email: 'mail@mail.com'
    })

    const updatedUserPassword = await userUpdateService.execute({
      user_id: user.id,
      password: '112233'
    })

    expect(updatedAllUser).toEqual(
      expect.objectContaining({
        name: 'John Doe',
        email: 'mail@mail.com',
        password: '112233'
      })
    )

    expect(updatedUserName).toEqual(
      expect.objectContaining({
        name: 'John Doe'
      })
    )

    expect(updatedUserEmail).toEqual(
      expect.objectContaining({
        email: 'mail@mail.com'
      })
    )

    expect(updatedUserPassword).toEqual(
      expect.objectContaining({
        password: '112233'
      })
    )
  })
})
