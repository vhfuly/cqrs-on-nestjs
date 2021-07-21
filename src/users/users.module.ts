import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from '@src/users/users.resolver';
import { User, UserSchema } from '@src/users/models/user.model';
import { UserRepository } from '@src/users/repositories/user.repository';
import { CreateUserHandler } from '@src/users/commands/handlers/create-user.handler';
import { QueryHandlers } from '@src/users/queries/handlers';
import { NewUserHandler } from '@src/users/events/handlers/new-user.handler';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
  ]),
  ],
  providers: [
    UsersResolver,
    UserRepository,
    CreateUserHandler,
    NewUserHandler,
    ...QueryHandlers,
  ]
})
export class UsersModule {}
