import { plainToClass } from 'class-transformer';

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { GetUsersQuery } from '@src/users/queries/impl/get-users.query';
import { ListUserDto } from '@src/users/dto/list-user.dto';
import { CreateUserCommand } from '@src/users/commands/impl/create-user.command';
import { GetUserQuery } from './queries/impl/get-user.query';
@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [ListUserDto], { name: 'getUsers' })
  async findAll(): Promise<ListUserDto[]> {
    return await this.queryBus.execute(new GetUsersQuery())
  }

  @Query(() => ListUserDto, { name: 'getUser' })
  async findByID(
    @Args('id') id: string,
  ): Promise<ListUserDto> {
    return await this.queryBus.execute(new GetUserQuery(id))
  }


  @Mutation(() => ListUserDto, { name: 'createUser' })
  async create(
    @Args('campaignInput') userInput: CreateUserDto,
  ): Promise<ListUserDto> {
    const command = plainToClass(CreateUserCommand, { ...userInput });
    return await this.commandBus.execute(command);
  }
}
