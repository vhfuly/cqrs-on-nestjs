import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '@src/users/commands/impl/create-user.command';
import { User } from '@src/users/models/user.model';
import { UserRepository } from '@src/users/repositories/user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly repository: UserRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand): Promise<User> {
    await this.repository.create(command);

    const user = this.eventPublisher.mergeObjectContext(command);
    user.commit();
    return user;
  }
}