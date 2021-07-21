export class CreateUserCommand {
  constructor(
      public readonly name: string,
      public readonly phone: string,
      public readonly email: string,
  ) {}
}