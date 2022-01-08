import Faker from 'faker'

import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/accounts/repositories/fakes/FakeUsers.repository'
import FakeHashProvider from '@shared/providers/HashProvider/fakes/FakeHash.provider'

import UserCreateService from './UserCreate.service'
import FakeCacheProvider from '@shared/providers/CacheProvider/fakes/FakeCache.provider'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let userCreateService: UserCreateService
let fakeCacheProvider: FakeCacheProvider

describe('UserCreateService ', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider()
    fakeCacheProvider = new FakeCacheProvider()
    fakeUsersRepository = new FakeUsersRepository()

    userCreateService = new UserCreateService(fakeHashProvider, fakeCacheProvider, fakeUsersRepository)
  })

  it('should not be able to create a duplicate user', async () => {
    const user = {
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    }

    await fakeUsersRepository.create(user)

    await expect(
      userCreateService.execute(user)
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to create a new user', async () => {
    const user = {
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    }

    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash')
    const createUser = await userCreateService.execute(user)

    expect(createUser).toHaveProperty('id')
    expect(generateHash).toHaveBeenCalledWith(user.password)
  })
})
