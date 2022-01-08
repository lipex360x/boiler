import 'reflect-metadata'
import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsersRepository from '@modules/accounts/repositories/fakes/FakeUsers.repository'
import UserDeleteService from './UserDelete.service'
import FakeCacheProvider from '@shared/providers/CacheProvider/fakes/FakeCache.provider'
import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotifications.repository'

let fakeCacheProvider: FakeCacheProvider
let fakeUsersRepository: FakeUsersRepository
let userDeleteService: UserDeleteService
let fakeNotificationsRepository: FakeNotificationsRepository

describe('Accounts User Delete', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider()
    fakeNotificationsRepository = new FakeNotificationsRepository()

    fakeUsersRepository = new FakeUsersRepository()

    userDeleteService = new UserDeleteService(
      fakeCacheProvider,
      fakeNotificationsRepository,
      fakeUsersRepository
    )
  })

  it('should not be able to Delete a invalid user', async () => {
    await expect(
      userDeleteService.execute({ user_id: 'invalid_user_id' })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to Delete a user', async () => {
    await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    const user = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    const deleteUser = await userDeleteService.execute({ user_id: user.id })
    const listUser = await fakeUsersRepository.findAll()

    expect(deleteUser).toHaveProperty('id')
    expect(listUser.length).toBe(1)
  })
})
