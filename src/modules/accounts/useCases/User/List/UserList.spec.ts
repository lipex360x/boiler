import 'reflect-metadata'
import Faker from 'faker'

import FakeUsersRepository from '@modules/accounts/repositories/fakes/FakeUsers.repository'
import UserListService from './UserList.service'
import FakeCacheProvider from '@shared/providers/CacheProvider/fakes/FakeCache.provider'

let fakeUsersRepository: FakeUsersRepository
let userListService: UserListService
let fakeCacheProvider: FakeCacheProvider

describe('Accounts User List', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider()
    fakeUsersRepository = new FakeUsersRepository()
    userListService = new UserListService(fakeCacheProvider, fakeUsersRepository)
  })

  it('should be able to List All Users', async () => {
    await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    const users = await userListService.execute()

    expect(users.length).toBe(2)
  })
})
