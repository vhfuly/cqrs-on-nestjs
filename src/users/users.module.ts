import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from '@src/users/users.resolver';
import { User, UserSchema } from '@src/users/models/user.model';
import { UserRepository } from './repositories/user.repository';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUsersHandler } from './queries/handlers/get-users.handler';

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
    GetUsersHandler,
  ]
})
export class UsersModule {}
