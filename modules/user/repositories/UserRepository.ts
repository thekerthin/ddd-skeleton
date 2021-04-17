import { User } from "../domain/User";
import { UserEmail } from "../domain/UserEmail";
import { UserName } from "../domain/UserName";

export abstract class UserRepository {

  abstract exists(userEmail: UserEmail): Promise<boolean>;

  abstract getUserByUserId(userId: string): Promise<User>;

  abstract getUserByUserName(userName: UserName | string): Promise<User>;

  abstract save(user: User): Promise<void>;

}
