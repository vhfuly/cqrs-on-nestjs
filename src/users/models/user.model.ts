import { Document } from 'mongoose';

import { AggregateRoot } from '@nestjs/cqrs';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User extends AggregateRoot {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  email: string;

  constructor() {
    super();
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
