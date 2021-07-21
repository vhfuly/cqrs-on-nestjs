import { plainToClass } from 'class-transformer';

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { ListUserDto } from './dto/list-user.dto';
import { CreateUserCommand } from './commands/impl/create-user.command';
@Resolver('Users')
export class UsersResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Query(() => String)
  test(): string {
    return 'Hello World!'
  }

  @Mutation(() => ListUserDto, { name: 'createUser' })
  create(
    @Args('campaignInput') userInput: CreateUserDto,
  ): Promise<ListUserDto> {
    const command = plainToClass(CreateUserCommand, { ...userInput });
    return  this.commandBus.execute(command);
  }
}
