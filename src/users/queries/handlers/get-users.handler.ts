
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@src/users/repositories/user.repository';
import { GetUsersQuery } from '@src/users/queries/impl/get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly repository: UserRepository) {}
  async execute() {
    return await this.repository.findAll();
  }
}