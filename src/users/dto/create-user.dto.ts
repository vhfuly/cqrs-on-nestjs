import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'Create user DTO' })
export class CreateUserDto {
  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;
}