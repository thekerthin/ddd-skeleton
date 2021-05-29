import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./CreateUserDTO";
import { UserRepository } from "../../repositories/UserRepository";
import { UseCase } from "../../../../shared/core/UseCase";
import { UserDTO } from "../../dtos/UserDto";
import { User } from "modules/user/domain/User";

type UseCaseResult = UserDTO | void;

@Injectable()
export class CreateUserUseCase
  implements UseCase<CreateUserDTO, UseCaseResult> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(data: CreateUserDTO): UseCaseResult {
    // 1. mapping "data" to value objects and validate it

    // 2. get values and apply extra validation if needed
    // e.g throw CreateUserErrors.MemberAlreadyExistsError

    // 3. create entity/aggregate
    // e.g const user = User.create({ ... });

    const user = User.create(data);
    console.log("user", user);
    console.log("this.userRepository", this.userRepository);

    // 4. validate entity/aggregate and get values to save in repository

    // 5. save entity/aggregate
    // e.g this.userRepository.save(user);

    user.domainEvents;

    // 6. publish domain events if needed
  }
}
