import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'List User DTO' })
export class ListUserDto {
  @Field(() => String, { nullable: true })
  name?: string;
  
  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  email?: string;
}