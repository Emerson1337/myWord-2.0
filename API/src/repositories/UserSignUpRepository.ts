import { EntityRepository, Repository } from "typeorm";
import { Users } from '../models/Users';

@EntityRepository(Users)
class UserSignUpRepository extends Repository<Users> {

}

export { UserSignUpRepository }