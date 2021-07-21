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
    const { email, name, phone } = command;
    const newUser = new User();
    newUser.email = email;
    newUser.name = name;
    newUser.phone = phone;
    await this.repository.create(newUser);
    const user = this.eventPublisher.mergeObjectContext(newUser);
    user.commit();
    return user;
  }
}