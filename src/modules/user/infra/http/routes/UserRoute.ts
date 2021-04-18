import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDTO } from 'modules/user/use_cases/create_user/CreateUserDTO';
import { CreateUserUseCase } from 'modules/user/use_cases/create_user/CreateUserUseCase';

@Controller('users')
export class UserRoute {

  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ) { }

  @Post()
  createUser(@Body() data: CreateUserDTO) {
    this.createUserUseCase.execute(data);
  }

}
