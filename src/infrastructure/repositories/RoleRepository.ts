import { EntityRepository, Repository } from 'typeorm'
import { Role, Roles } from 'domain/access/Role'

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {

    public findByType(type: Roles) {
        return this.findOne({ type })
    }
}
