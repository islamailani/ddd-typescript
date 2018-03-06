import { EntityRepository, Repository } from 'typeorm'
import { User } from 'domain/access/User'

@EntityRepository(User)
export class UserRepository extends Repository<User> {

}
