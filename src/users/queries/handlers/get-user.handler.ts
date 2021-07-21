
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '@src/users/repositories/user.repository';
import { GetUserQuery } from '@src/users/queries/impl/get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly repository: UserRepository) {}
  async execute(query: GetUserQuery) {
    return await this.repository.findByID(query.id);
  }
}