import { EntityRepository, Repository } from '@mikro-orm/core';
import { User } from '../domain/User';
import { UserName } from '../domain/UserName';
import { UserRepository } from './UserRepository';

export class UserRepositoryImpl extends UserRepository {

  getUserByUserId(userId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  getUserByUserName(userName: string | UserName): Promise<User> {
    throw new Error('Method not implemented.');
  }

  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
