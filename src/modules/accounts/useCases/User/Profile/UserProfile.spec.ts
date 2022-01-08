import 'reflect-metadata'
import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsersRepository from '@modules/accounts/repositories/fakes/FakeUsers.repository'
import UserProfileService from './UserProfile.service'

let fakeUsersRepository: FakeUsersRepository
let userProfileService: UserProfileService

describe('Accounts User Profile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    userProfileService = new UserProfileService(fakeUsersRepository)
  })

  it('should not be able to view a Profile of an invalid user', async () => {
    await expect(
      userProfileService.execute({ user_id: 'invalid_user_id' })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to view a Profile', async () => {
    const user = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    const profile = await userProfileService.execute({ user_id: user.id })

    expect(profile).toHaveProperty('id')
  })
})
