import { User } from "../domain/User";
import { UserName } from "../domain/UserName";
import { Repository } from "../../../shared/infra/database/Repository";
import { EntityRepository } from "@mikro-orm/core";

export abstract class UserRepository extends Repository<User> {

  protected repo: EntityRepository<User> = this.orm.em.getRepository(User);

  abstract getUserByUserId(userId: string): Promise<User>;

  abstract getUserByUserName(userName: UserName | string): Promise<User>;

  abstract save(user: User): Promise<void>;

}
