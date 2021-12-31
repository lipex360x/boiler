import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'
import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Faker from 'faker'

import User from '@modules/accounts/infra/typeorm/entities/User'

export default class CreateAdminUser implements Seeder {
  public async run (factory: Factory, connection: Connection): Promise<any> {
    const password = await hash('root', 8)

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: uuid(),
          name: 'admin',
          email: 'admin@user.com',
          password,
          isAdmin: true
        }
      ])
      .execute()

    connection.close()
  }
}
