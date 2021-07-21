import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from '@src/users/users.resolver';
import { User, UserSchema } from '@src/users/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
  ]),
  ],
  providers: [UsersResolver]
})
export class UsersModule {}
