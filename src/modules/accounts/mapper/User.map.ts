import { instanceToInstance } from 'class-transformer'

import User from '@modules/accounts/infra/typeorm/entities/User.entity'

interface Response {
  id: string
  name: string
  email: string
  avatar: string
  avatar_url?: Function | string
}

export default class UserMap {
  static one ({ id, name, email, avatar, avatar_url }: User): Response {
    return instanceToInstance({ id, name, email, avatar, avatar_url })
  }

  static list (users: User[]): Response[] {
    const userList:Response[] = []

    for (const user of users) {
      userList.push({
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        avatar_url: user.avatar_url()
      })
    }

    return userList
  }
}
