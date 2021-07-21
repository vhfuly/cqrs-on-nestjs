import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Users')
export class UsersResolver {
  @Query(() => String)
  create(): string {
    return 'Hello World!'
  }
}
